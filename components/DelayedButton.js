const React = require('react');

class DelayedButton extends React.Component {
  constructor(props) {
    super();
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(event) {
    event.persist()
    setTimeout(this.props.onDelayedClick(event), this.props.delay)
    let coordinates = [event.clientX, event.clientY];
    this.props.onReceiveCoordinates(coordinates);
  }

  render() {
    return(<button onClick={this.clickHandler}>Delayed Coordinates Button</button>)
  }
}

moudle.exports = DelayedButton