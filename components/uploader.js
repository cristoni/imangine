import Dropzone from 'react-dropzone'

export default ({onDropHandler}) => (
  <Dropzone
    className="dropzone d-flex justify-content-center align-items-center"
    activeClassName="dropzone--active"
    onDrop={onDropHandler}
    accept="image/jpeg, image/png"
  >
    <h6 className="text-uppercase">
      Drop your files here or click to open the file explorer
    </h6>
  </Dropzone>
)