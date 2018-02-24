import React, { Component } from 'react';
import Sidebar from './components/Sidebar';
import Editor from './components/Editor';

class App extends Component {
  constructor() {
    super();
    const MKEY = "MDNOTES";
    const localNotes = JSON.parse(localStorage.getItem(MKEY));
    this.state = {
      notes: localNotes ? localNotes : [],      /*'notes'  is a LIST of notes*/
      selectedNote: {}
    };
    this.addNote = this.addNote.bind(this);
    this.updateNote = this.updateNote.bind(this);
    this.selectNote = this.selectNote.bind(this);
    this.uuidv4 = this.uuidv4.bind(this);
  }

  addNote() {
    const guid = this.uuidv4(); //universal unique id
    const note = { id: guid, body: 'New Note...' };
    /*!Important!*/
    /***this.state.notes exists... But you CANNOT add something to this state array...
     so, we create this newNotes array equal to that state property... */
    const newNotes = this.state.notes;
    /*then, push it to that var with  */
    newNotes.push(note);
    /*finally, we reset the notes array with...*/
    this.setState({notes: newNotes});
    /* then, when I add a note (addNote()) I select that note and add it to local storage*/
    this.selectNote(note);
    this.save(this.state.notes);
  }

  updateNote(body) {
    let notes = this.state.notes;
    let currentNote = this.state.selectedNote;
    
    /* pass in the body to the currentNote */
    currentNote.body = body;
    /* Then we take the selected note & give it the value of this currentNote with this new body*/
    this.setState({ selectedNote: currentNote });

    /* if the currnt note id is equal to any notes that already exist, then THAT is the note which will be updated */
    /* so this really is a filter */
    let nIndex = notes.findIndex(n => {
      return n.id === currentNote.id;
    });

    /*then***/
    notes[nIndex].body = currentNote.body;

    this.setState({notes:notes})

    this.save(this.state.notes);
  }

  selectNote(note) {
    if (note === this.state.selectedNote) return;
    /*else*/
    this.setState({ selectedNote: note });
  }

  /*when I hit "save"*/
  save(notes) {
    /*if notes doesn't exist, it will "say" nothing*/
    if (!notes) return;
    /*else it sets an item in local storage*/
    const MKEY = 'MDNOTES';
    localStorage.setItem(MKEY, JSON.stringify(notes));
  }
  /* Unique ID generator*/
  uuidv4() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
      (c ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))).toString(16)
    );
  }

  render() {
    return (
      <div className="app">
        <h1 className="app-title">Markdown Notetaker</h1>
        <div className="row comps-container">
          <Sidebar add={this.addNote} select={this.selectNote} selected={this.state.selectedNote}  notes={this.state.notes}/>
          <Editor change={this.updateNote} currentNote={this.state.selectedNote} />
        </div>
      </div>
    );
  }
}

export default App;

/*
function uuidv4() {
  return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
  )
}
uuidv4();
*/

/*
this.state.notes exists... But you CANNOT add something to this state array... so...
we create
const newNotes = this.state.notes;
then, push it to that var with

newNotes.push(note); (see above)
*/
