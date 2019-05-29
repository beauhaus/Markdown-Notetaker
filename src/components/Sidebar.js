import React, { Component } from 'react';

class Sidebar extends Component {
  renderList() {
    let list = [];
    /*** className below if the current note id is the same as the selected, then the class will have 'selected' */
    this.props.notes.forEach(note => {
      list.push(
        <li key={note.id} onClick={() => this.props.select(note)} className={note.id === this.props.selected.id ? 'selected' : ''}>
        {note.body}
        </li>
      )
    })
    return list;
  }
  render() {
    return (
      <div className="sidebar">
        <h1 className="title">Notes</h1>
        <button className="btn btn-clear" onClick={this.props.add}>+ new note</button>
        <dl className="list">
        {this.renderList()}
        </dl>
      </div>
    );
  }
}

export default Sidebar;