import React from 'react'
import SocketContext from '../contexts/socket'
import Uploader from '../components/uploader'
import FilesList from '../components/files-list'
import SideModal from '../components/side-modal'
import ProcessConfiguration from '../components/process-configuration'

export default class Index extends React.Component {
  static contextType = SocketContext

  state = {
    files: [],
    open: false,
    listening: false,
  }

  constructor() {
    super()

    this.processedHandler = this.processedHandler.bind(this)
    this.processEndHandler = this.processEndHandler.bind(this)
  }

  processedHandler(data) {
    console.log(data)
  }

  processEndHandler() {
    alert('Image processing ended')
  }

  onDropHandler(acceptedFiles, rejectedFiles) {
    if (rejectedFiles.length) console.error(rejectedFiles)

    this.setState({
      files: acceptedFiles,
      open: false,
    })
  }

  onProcessHandler(e) {
    e.preventDefault()

    this.setState({
      open: true,
    })
  }

  onCloseSideModalHandler() {
    this.setState({
      open: false,
    })
  }

  onSubmitHandler(values, { setSubmitting }) {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2))
      this.context.emit('process', { files: this.state.files })
      setSubmitting(false)
    }, 400)
  }

  componentDidUpdate() {
    if (!this.context) return
    if (this.context.constructor.name !== 'Socket') return
    if (this.state.listening) return

    this.setState({
      listening: true
    })
    
    this.context.on('processed', this.processedHandler)
    this.context.on('process.end', this.processEndHandler)
  }

  componentWillUnmount() {
    this.context.remove('processed', this.processedHandler)
    this.context.remove('process.end', this.processEndHandler)
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col">
            <p>
              ImaNgine allow you to optimize your images for free.
              <br />
              It is developed using <a href="https://reactjs.org/" target="_blank">React</a>, more specifically <a href="https://nextjs.org/" target="_blank">Next.js</a>. You can find it's source code <a href="https://github.com/cristoni/imangine" target="_blank">here</a>.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h5 className="mb-2 mt-4">Select the <span className="hl">Images</span> that you want to process</h5>
            <Uploader onDropHandler={this.onDropHandler.bind(this)} />
            {!!this.state.files.length
             && <button
              className="btn btn-warning btn-lg shadow d-flex justify-content-center ml-auto mr-auto mt-4"
              onClick={this.onProcessHandler.bind(this)}
            >
              Process selected files <i className="ml-2 material-icons">cloud_upload</i>
            </button>}
          </div>
          {!!this.state.files.length && <div className="col-auto mw-50">
            <h5 className="mb-2 mt-4">Selected <span className="hl">I</span>mages</h5>
            <FilesList files={this.state.files} />
          </div>}
        </div>
        
        <SideModal open={this.state.open} close={this.onCloseSideModalHandler.bind(this)}>
          <ProcessConfiguration onSubmit={this.onSubmitHandler.bind(this)} />
        </SideModal>
      </div>
    )
  }
}