import { Trail } from 'react-spring'

const FilesList = ({files}) => (
  <div className="list-group shadow">
    <Trail
      items={files}
      keys={file => file.name}
      from={{ transform: 'translate3d(60px,0,0)', opacity: 0 }}
      to={{ transform: 'translate3d(0px,0,0)', opacity: 1 }}>
      {file => props =>
        <div style={props} href="#" className="list-group-item list-group-item-action">{file.name}</div>
      }
    </Trail>
  </div>
)

FilesList.defaultProps = {
  files: []
}

export default FilesList