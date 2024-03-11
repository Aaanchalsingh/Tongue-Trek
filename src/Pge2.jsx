import React, { useState, useEffect } from "react";
import $ from "jquery";
import "jquery.transit";
import logo from "./1.png";

function Pge2() {
  const [isRecording, setIsRecording] = useState(false);
  const [note, setNote] = useState(null);
  const [notesStore, setNotesStore] = useState([]);
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const microphone = new SpeechRecognition();

  microphone.continuous = true;
  microphone.interimResults = true;
  microphone.lang = "en-US";

  const startRecordController = () => {
    if (isRecording) {
      console.log("Starting recording...");
      microphone.start();
    } else {
      console.log("Stopping recording...");
      microphone.stop();
    }
  };

  useEffect(() => {
    startRecordController();

    microphone.onresult = (event) => {
      const recordingResult = Array.from(event.results)
        .map((result) => result[0])
        .map((result) => result.transcript)
        .join("");
      console.log("Recording result:", recordingResult);
      setNote(recordingResult);
    };

    microphone.onerror = (event) => {
      console.log("Speech recognition error:", event.error);
    };

    return () => {
      console.log("Cleaning up microphone...");
      microphone.stop();
    };
  }, [isRecording]);

  const toggleRecording = () => {
    setIsRecording((prevState) => !prevState);
  };

  useEffect(() => {
    const backgroundInitializr = () => {
      // Your background initialization code here
    };

    backgroundInitializr();

    return () => {
      $("#" + "background_css3").remove();
    };
  }, []);

  return (
    <div className="App" style={{ background: "#007bff" }}>
      <div className="flex flex-col items-center h-screen justify-center">
        <h1 className="text-5xl pb-7 text-center font-bold text-white">
          Record Voice Notes
        </h1>
        <div className="flex">
          <div>
            <button
              className="cursor-pointer"
              onClick={toggleRecording}
            >
              <img src={logo} alt="" />
            </button>

            <p>{note}</p>
          </div>
          <div className="noteContainer">
            <h2>Speak in your native language</h2>
            {notesStore.map((note) => (
              <p key={note}>{note}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pge2;
