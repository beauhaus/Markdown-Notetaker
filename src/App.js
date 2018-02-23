import React, { Component } from 'react';

import Sidebar from './components/Sidebar';
import Editor from './components/Editor';

class App extends Component {
  constructor(props) {
    super(props);
    this.change = this.change.bind(this);
  }
  change() {
    console.log('This changed!');
  }
  
  render() {
    return (
      <div className="app">
        <h1 className="app-title">Markdown Notetaker</h1>
        <div className="row comps-container">
          <Sidebar />
          <Editor change={this.change}/>
        </div>
      </div>
    );
  }
}

export default App;
