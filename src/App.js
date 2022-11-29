import React, { useState } from "react";
import CloudSmall from "./cloud-small.png";
import CloudLarge from "./cloud-large.png";
import "./App.css";
import "./Components/Files.css";
import Files from "./Components/Files";

function App() {
  const [files, setFiles] = useState([]);
  const [images, setImages] = useState([]);

  const changeHandler = (e) => {
    setFiles(e.target.files[0]);
    setImages(URL.createObjectURL(e.target.files[0]));
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
        <Files files={files} images={images} />
      </div>
    </div>
  );
}

export default App;
