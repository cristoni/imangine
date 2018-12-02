import React from 'react'
import Uploader from '../components/uploader'
import FilesList from '../components/files-list'

export default class Index extends React.Component {
  state = {
    files: []
  }

  onDropHandler(acceptedFiles, rejectedFiles) {
    if (rejectedFiles.length) console.error(rejectedFiles)

    this.setState({
      files: acceptedFiles
    })
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
            {!!this.state.files.length && <button className="btn btn-warning btn-lg shadow d-flex justify-content-center ml-auto mr-auto mt-4">
              Process selected files <i className="ml-2 material-icons">cloud_upload</i>
            </button>}
          </div>
          {!!this.state.files.length && <div className="col-auto mw-50">
            <h5 className="mb-2 mt-4">Selected <span className="hl">I</span>mages</h5>
            <FilesList files={this.state.files} />
          </div>}
        </div>
      </div>
    )
  }
}