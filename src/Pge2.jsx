import React from "react";
import SpeechToText from "./SpeechToText";
import BackgroundAnimation from "./BackgroundAnimation";
function Pge2() {
  return (
    <div className="App">
    <header className="App-header">
      <h1>Voice-to-Text Recognition</h1>
      <BackgroundAnimation/>
      <SpeechToText />
    </header>
  </div>
  );
}

export default Pge2;
