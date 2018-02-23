import React, { Component } from 'react';
// import jsx- from 'inscrybmde';jsx-markdown
import SimpleMDE from 'react-simplemde-editor';

class Editor extends Component {
  render() {
    return (
      <div className="edit">
      <h2>Editor</h2>
      <SimpleMDE 
      onChange={this.props.change} 
      value="hello"
      options={{
        autofocus: true
      }}
      />
      </div>
    );
  }
}

export default Editor;
