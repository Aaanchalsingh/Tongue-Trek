import React, { useState, useEffect } from "react";
import $ from "jquery";
import "jquery.transit";
import logo1 from "./1.png";
import logo2 from "./2.png";

function Pge2() {
  const [isRecording, setIsRecording] = useState(false);
  const [note, setNote] = useState(null);
  const [notesStore, setNotesStore] = useState([]);
  const [showSpeakPrompt, setShowSpeakPrompt] = useState(true);
  const [isImageOne, setIsImageOne] = useState(true);
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
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
      setNotesStore([...notesStore, recordingResult]);
      setShowSpeakPrompt(false);
    };

    microphone.onerror = (event) => {
      console.log("Speech recognition error:", event.error);
    };

    return () => {
      console.log("Cleaning up microphone...");
      microphone.stop();
    };
    // eslint-disable-next-line
  }, [isRecording, notesStore]);

  const toggleRecording = () => {
    setIsRecording((prevState) => !prevState);
  };

  const toggleImage = () => {
    setIsImageOne((prev) => !prev);
  };

  useEffect(() => {
    const animateBackground = () => {
      const circles = Array.from({ length: 10 }, (_, i) => i + 1);

      circles.forEach((_, index) => {
        const circle = document.createElement("li");
        document.querySelector(".circles").appendChild(circle);
        circle.style.left = `${Math.random() * 100}%`;
        circle.style.animationDelay = `${Math.random() * 10}s`;
        circle.style.animationDuration = `${Math.random() * 20 + 10}s`;
      });
    };

    animateBackground();

    return () => {
      $(".circles li").remove();
    };
  }, []);

  return (
    <div className="App">
      <div className="flex flex-col items-center h-screen justify-center">
        <h1 className="text-5xl pb-7 text-center font-bold text-white">
          Record Voice Notes
        </h1>
        {showSpeakPrompt && <h2>Speak in your native language</h2>}
        <div className="flex">
          <div>
            <button className="cursor-pointer" onClick={toggleRecording}>
              <img
                src={isImageOne ? logo1 : logo2}
                alt=""
                onClick={toggleImage}
              />
            </button>
          </div>
          <div className="noteContainer">
            {notesStore.map((note, index) => (
              <p key={index}>{note}</p>
            ))}
          </div>
        </div>
      </div>
      <div className="area">
        <ul className="circles"></ul>
      </div>
    </div>
  );
}

export default Pge2;
