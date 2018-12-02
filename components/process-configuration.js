import { Formik, Form, Field, ErrorMessage } from 'formik'

const ProcessConfiguration = ({files}) => (
  <div className="process-configuration">
    <h4 className="process-configuration__title">
      Process <span className="hl">C</span>onfiguration
    </h4>
    <hr />

    <Formik
      initialValues={{ resolution: false, width: 1920, height: 1080, crop: false }}
      validate={values => {
        let errors = {};

        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ values, isSubmitting }) => (
        <Form>
          <div className="form-check form-check-inline">
            <Field
              type="checkbox"
              name="resolution"
              className="form-check-input"
            />
            <label htmlFor="resolution" className="form-check-label h5 ml-3">Change <span className="hl">R</span>esolution</label>
          </div>
          <p>Check to set the resolution you want your images resized to.</p>
          <ErrorMessage name="resolution" component="div" />

          <div className={`${values.resolution ? 'visible' : 'invisible'}`}>
            <div className="form-group row">
              <label htmlFor="width" className="col-sm-2 col-form-label">Width:</label>
              <div className="col-sm-10">
                <Field type="number" name="width" className="form-control" />
              </div>
            </div>
            <ErrorMessage name="width" component="div" />
            <div className="form-group row">
              <label htmlFor="height" className="col-sm-2 col-form-label">Height:</label>
              <div className="col-sm-10">
                <Field type="number" name="height" className="form-control" />
              </div>
            </div>
            <ErrorMessage name="height" component="div" />
            <div className="form-check form-check-inline">
              <Field type="checkbox" name="crop" className="form-check-input" />
              <label htmlFor="crop" className="form-check-label ml-2">Activate <span className="hl">crop</span> to match the set resolution</label>
            </div>
          </div>

          <hr />
          <button type="submit" disabled={isSubmitting} className="btn btn-warning btn-lg btn-block">
            Proceed
          </button>
        </Form>
      )}
    </Formik>
  </div>
)

ProcessConfiguration.defaultProps = {
  files: []
}

export default ProcessConfiguration