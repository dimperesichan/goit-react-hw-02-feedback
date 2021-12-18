import React, { Component } from 'react';
import Feedback from './components/Feedback';
export class App extends Component {
  render() {
    return <Feedback initialValue={0} />;
  }
}

export default App;
