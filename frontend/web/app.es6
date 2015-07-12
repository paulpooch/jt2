var React = require('react');
require('webpack-sails.io.js');

class HelloComponent extends React.Component {
  render() {
    return <div>Hello {this.props.name}</div>;
  }
}

React.render(<HelloComponent name="Paul" />, document.getElementById('content'));
