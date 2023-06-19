import React from "react";
import "./File_an_issue.css";
function File_an_issue() {
  return (
    <div className="app__form">

    <h2 className="form__header">Register Your complaint</h2>

      <div className="form">
        <h2 className="title">Title</h2>
        <input className="input text-area-color textarea" type="text" />
        <h2 className="msg">Message</h2>
        <textarea
          className="text-area-size text-area-color textarea"
          placeholder="Include all the information about the issue of your PC"
        />
        <button type="submit" className="btn">Submit</button>
      </div>
    </div>
  );
}

export default File_an_issue;
