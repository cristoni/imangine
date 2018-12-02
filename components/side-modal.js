import { Spring } from 'react-spring'

const SideModal = ({open, close, children}) => (
  <div className={`side-modal ${open ? 'side-modal--open' : ''}`}>
    {!!open && <Spring
      from={{ opacity: 0.8, transform: 'translate3d(-100%,0,0)' }}
      to={{ opacity: 1, transform: 'translate3d(0%,0,0)' }}
    >
      {props => <div style={props} className="side-modal__content shadow">
        <div className="side-modal__clear" onClick={close}>
          <i className="ml-2 material-icons">clear</i>
        </div>

        {children}
      </div>}
    </Spring>}
  </div>
)

export default SideModal