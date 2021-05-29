import React, { Component } from 'react'

export class BackGroundImage extends Component {
  render() {
    return (
      <div className="backgroundImage" style={{
        backgroundImage: `url("${this.props.url}")`
      }}>
        {/* <div className="overlay">
           heloo
          
            </div> */}
      </div>
    )
  }
}

export default BackGroundImage;