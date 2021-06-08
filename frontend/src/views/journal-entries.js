// src/views/external-api.js
import React, { Component } from "react";
import "./journal-entries.css";
import Entries from "../components/entries";
import JournalForm from "../components/journal-form";

class JournalEntries extends Component {
  state = {
    entries: [],
  };

  removeEntry = index => {
    const { entries } = this.state

    this.setState({
      entries: entries.filter ((entry, i) => {
        return i !== index
      })
    })
  }
  
  handleSubmit = (entry) => {
    this.setState({ entries: [...this.state.entries, entry] });
  };

  render() {
    const { entries } = this.state;

    return (
      <div className="text-left">
        <h1 className="mb-4">Journal Entries</h1>
        <JournalForm handleSubmit={this.handleSubmit} />
        <div className="journal-entries">
          <Entries entryData={entries} removeEntry={this.removeEntry} />
        </div>
      </div>
    );
  }
}

export default JournalEntries;
