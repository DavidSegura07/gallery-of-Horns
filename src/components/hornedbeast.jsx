
import React from 'react';

class HornedBeast extends React.Component {
  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <img className='beast' src={this.props.image} alt={this.props.description} />
      </div>
    )
  }
}
export default HornedBeast