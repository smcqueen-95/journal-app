import React, { Component } from "react";

class JournalForm extends Component {
  constructor(props) {
    super(props);

    this.initialState = {
      title: "",
      body: "",
    };

    this.state = this.initialState;
  }

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  submitForm = (event) => {
    event.preventDefault();
    this.props.handleSubmit(this.state);
    this.setState(this.initialState);
  };

  render() {
    const { title, body } = this.state;

    return (
      <div className="text-left">
        <form>
          <div className="mb-3">
            <label className="form-label">Title</label>
            <input
              type="text"
              name="title"
              id="title"
              value={title}
              className="form-control"
              placeholder="New Entry Title"
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3 form">
            <label className="form-label">Type Your Thoughts</label>
            <textarea
              className="form-control"
              id="body"
              name="body"
              overflow-y="scroll"
              rows="10"
              placeholder="..."
              value={body}
              onChange={this.handleChange}
            ></textarea>
            <button
              className="btn btn-block mt-2"
              type="submit"
              onClick={this.submitForm}
            >
              Submit Entry
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default JournalForm;
