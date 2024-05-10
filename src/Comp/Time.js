import React, { Component } from 'react';

class Time extends Component {
  state = {
    interval: 0 // Time interval since component mount
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState(prevState => ({
        interval: prevState.interval + 1
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { interval } = this.state;

    return <p>Time since mount: {interval} seconds</p>;
  }
}

export default Time;