import React from 'react'
import SocketContext from '../contexts/socket'
import io from 'socket.io-client'

import "../styles/main.scss"

// MainContainer component setup all the cross application task like: importing styles,
// exposing the socket.io instance and wrapping the application in the main class container.
class MainContainer extends React.Component {
  state = {
    socket: null
  }

  componentDidMount() {
    this.setState({
      socket: io.connect()
    })
  }

  render() {
    return (
      <SocketContext.Provider value={this.state.socket}>
        <div className="container">
          {this.props.children}
        </div>
      </SocketContext.Provider>
    )
  }
}

export default MainContainer