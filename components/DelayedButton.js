const React = require('react');

class DelayedButton extends React.Component {
  constructor(props) {
    super();
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(event) {
    event.persist()
    setTimeout(() => {this.props.onDelayedClick(event)}, this.props.delay)
  }

  render() {
    return(<button onClick={this.clickHandler}>Delayed Coordinates Button</button>)
  }
}

module.exports = DelayedButton