import React, { Component } from 'react';

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <h1 className="title">Sidebar</h1>
        <button className="btn btn-clear">new note</button>
      </div>
    );
  }
}

export default Sidebar;