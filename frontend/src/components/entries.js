import React from "react";

const EntryBody = (props) => {
  const lines = props.entryData.map((line, index) => {
    return (
      <div key={index}>
        <h2>{line.title}</h2>
        <p>{line.body}</p>
        <button className="btn" onClick={() => props.removeEntry(index)}>Delete</button>
      </div>
    );
  });

  return <div>{lines}</div>;
};

const Entries = (props) => {
  const { entryData, removeEntry } = props;

  return (
    <div>
      <EntryBody className="entry-column" entryData={entryData} removeEntry={removeEntry} />
    </div>
  );
};

export default Entries;
