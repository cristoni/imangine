import Uploader from '../components/uploader'

export default () => (
  <div>
    <div className="row">
      <div className="col">
        <h1 className="text-center">Ima<span className="hl">N</span>gine</h1>
        <p>
          ImaNgine allow you to optimize your images for free.
          <br />
          It is developed using <a href="https://reactjs.org/" target="_blank">React</a>, more specifically <a href="https://nextjs.org/" target="_blank">Next.js</a>. You can find it's source code <a href="https://github.com/cristoni/imangine" target="_blank">here</a>.
        </p>
      </div>
    </div>
    <div className="row">
      <div className="col">
        <Uploader onDropHandler={(acceptedFiles, rejectedFiles) => console.log(acceptedFiles, rejectedFiles)} />
      </div>
    </div>
  </div>
)