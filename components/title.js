import { Trail, config } from 'react-spring'

export default () => (
  <div className="d-flex h1 justify-content-center mb-5 mt-3">
    <Trail
      dealy={250}
      config={config.slow}
      items={[
        { key: 1, text: "Ima", className: "" },
        { key: 2, text: "N", className: "hl" },
        { key: 3, text: "gine", className: "" },
      ]}
      keys={item => item.key}
      from={{ transform: 'translate3d(0,-40px,0)', opacity: 0 }}
      to={{ transform: 'translate3d(0,0px,0)', opacity: 1 }}>
      {item => props =>
        <div style={props} className={item.className}>{item.text}</div>
      }
    </Trail>
  </div>
)