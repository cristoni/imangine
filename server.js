const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = createServer((req, res) => {
    const parsedUrl = parse(req.url, true)
    handle(req, res, parsedUrl)
  })

  server.listen(process.env.PORT || 3000, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${process.env.PORT || 3000}`)
  })

  const io = require('socket.io')(server)

  io.on('connection', function (socket) {
    socket.on('process', function (data) {
      const fs = require('fs')

      const processes = data.files.map(file => new Promise((resolve, reject) => {
        const h = require('crypto').createHash('sha1')
        h.update(file)
        const fileType = require('file-type')
        const type = fileType(file)

        const filename = `${socket.id}-${h.digest('hex')}.${type.ext}`;

        // open the file in writing mode, adding a callback function where we do the actual writing
        fs.open(filename, 'w', function(err, fd) {
          if (err) {
            reject('could not open file: ' + err)
          }

          // write the contents of the buffer, from position 0 to the end, to the file descriptor returned in opening our file
          fs.write(fd, file, 0, file.length, null, function(err) {
            if (err) reject('error writing file: ' + err)
            fs.close(fd, function() {
              socket.emit('processed', { url: filename })
              resolve(filename)
            })
          })
        })
      }))

      Promise.all(processes)
        .then(url => socket.emit('process.end'))
        .catch(err => { throw err })
    })
  })
})
