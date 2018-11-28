import Dropzone from 'react-dropzone'

const Uploader = ({onDropHandler}) => (
  <Dropzone
    className="dropzone d-flex justify-content-center align-items-center shadow"
    activeClassName="dropzone--active"
    onDrop={onDropHandler}
    accept="image/jpeg, image/png"
  >
    <h6 className="text-uppercase text-center">
      Drop your files here or click to open the file explorer
    </h6>
  </Dropzone>
)

export default Uploader