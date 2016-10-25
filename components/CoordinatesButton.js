const React = require('react');

class CoordinatesButton extends React.Component {
  constructor(props) {
    super();
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(event) {
    let coordinates = [event.clientX, event.clientY];
    this.props.onReceiveCoordinates(coordinates);
  }

  render() {
    return(<button onClick={this.clickHandler}>Coordinates Button</button>)
  }
}

moudle.exports = CoordinatesButton