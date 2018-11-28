const FilesList = ({files}) => (
  <div className="list-group shadow">
    {files.map((file, i) => <a key={i} href="#" className="list-group-item list-group-item-action">{file.name}</a>)}
  </div>
)

export default FilesList