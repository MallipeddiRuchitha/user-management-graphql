import React, { Component } from 'react'

class User extends Component {
  render() {
    return (
      <div>
        <div>
          id: {this.props.user.id}
          <br />
          name:{this.props.user.name}
          <br />
          email:{this.props.user.email}
        </div>
      </div>
    )
  }
}

export default User