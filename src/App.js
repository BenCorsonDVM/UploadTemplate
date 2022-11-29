import React, { useState } from "react";
import CloudSmall from "./cloud-small.png";
import CloudLarge from "./cloud-large.png";
import "./App.css";
import "./Components/Files.css";
import Files from "./Components/Files";
import { FileIcon } from "react-file-icon";

function App() {
  const [files, setFiles] = useState({});

  const changeHandler = (event) => {
    setFiles(event.target.files[0]);
  };

  return (
    <div id="file-upload-card">
      <div>
        <p id="top-text-1">UPLOAD FILES</p>
        <p id="top-text-2">
          Upload documents you want to share with your team.
        </p>
      </div>
      <div id="drag-and-drop-box">
        <img src={CloudSmall} id="cloud-small" width="50px"></img>
        <p>Drag & Drop your files here</p>
        <p id="or-text">OR</p>
        <input
          type="file"
          accept="image/*"
          id="hidden-file-btn"
          hidden
          onChange={changeHandler}
        />
        <label for="hidden-file-btn" id="actual-btn">
          Browse Files
        </label>
      </div>
      <div>
        <img src={CloudLarge} id="cloud-large" width="103%" />
      </div>
      <div id="file-upload-bottom">
        <p id="uploaded-files-text">Uploaded files</p>
        <Files props={files} />
      </div>
    </div>
  );
}

export default App;
