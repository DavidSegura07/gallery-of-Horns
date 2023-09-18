/* eslint-disable react/prop-types */

import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFavorite: 0
    };
  }

  handleClick = () => {
    this.setState({ isFavorite: this.state.isFavorite + 1 })
  }
  render() {
    return (
      <Card className="card-hover" style={{ border: 'thin solid red' }}>
        <Card.Img className="card-image" variant="top" src={this.props.image_url} />
        <Card.Body>
          <Card.Title>Beast Name: {this.props.title}</Card.Title>
          <Card.Text >Description: {this.props.description}</Card.Text>
          <Card.Text>Type of Beast: {this.props.keyword}</Card.Text>
          <Card.Text>How many horns do i have: {this.props.horns}</Card.Text>
          <Card.Text>{`Am I your favorite? \u2764\uFE0F ${this.state.isFavorite}`}</Card.Text>
          <Button onClick={this.handleClick} variant="primary">  My Favorite Beast!</Button>
        </Card.Body>
      </Card>
    )
  }
}
export default HornedBeast;
