import React, { useState, useEffect } from "react";
import $ from "jquery";
import "jquery.transit";
import logo1 from "./1.png";
import logo2 from "./2.png";

function Pge2() {
  const [isRecording, setIsRecording] = useState(false);
  // eslint-disable-next-line
  const [note, setNote] = useState(null);
  const [notesStore, setNotesStore] = useState([]);
  const [showSpeakPrompt, setShowSpeakPrompt] = useState(true);
  const [isImageOne, setIsImageOne] = useState(true); // state to toggle between two images
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
    setIsImageOne((prev) => !prev); // toggle between the two images
  };

  useEffect(() => {
    const backgroundInitializr = () => {

      const $this = {};
      $this.id = "background_css3";
      $this.style = {
        bubbles_color: "#fff",
        stroke_width: 0,
        stroke_color: "black",
      };
      $this.bubbles_number = 30;
      $this.speed = [1500, 8000];
      $this.max_bubbles_height = $this.height;
      $this.shape = false;

      if ($("#" + $this.id).length > 0) {
        $("#" + $this.id).remove();
      }
      $this.object = $(
        "<div style='margin:0;padding:0; overflow:hidden;position:absolute;bottom:0' id='" +
          $this.id +
          "'> </div>"
      ).appendTo("body");

      $this.ww = $(window).width();
      $this.wh = $(window).height();
      $this.width = $this.object.width($this.ww);
      $this.height = $this.object.height($this.wh);

      $("body").prepend(
        "<style>.shape_background {transform-origin:center; width:80px; height:80px; background: " +
          $this.style.bubbles_color +
          "; position: absolute}</style>"
      );

      for (let i = 0; i < $this.bubbles_number; i++) {
        // Generate bubbles here
        const base = $("<div class='shape_background'></div>");
        const shape_type = $this.shape
          ? $this.shape
          : Math.floor(Math.random() * 3) + 1;
        let bolla;
        if (shape_type === 1) {
          bolla = base.css({ borderRadius: "50%" });
        } else if (shape_type === 2) {
          bolla = base.css({
            width: 0,
            height: 0,
            "border-style": "solid",
            "border-width": "0 40px 69.3px 40px",
            "border-color":
              "transparent transparent " +
              $this.style.bubbles_color +
              " transparent",
            background: "transparent",
          });
        } else {
          bolla = base;
        }
        const rn_size = Math.random() * (1.2 - 0.8) + 0.8;
        bolla.css({
          transform:
            "scale(" +
            rn_size +
            ") rotate(" +
            (Math.random() * 720 - 360) +
            "deg)",
          top: $this.wh + 100,
          left: Math.random() * ($this.ww + 120) - 60,
        });
        bolla.appendTo($this.object);
        bolla.transit(
          {
            top: Math.random() * ($this.wh / 2 - 60) + $this.wh / 2,
            transform:
              "scale(" +
              rn_size +
              ") rotate(" +
              (Math.random() * 720 - 360) +
              "deg)",
            opacity: 0,
          },
          Math.random() * ($this.speed[1] - $this.speed[0]) + $this.speed[0],
          function () {
            $(this).remove();
            backgroundInitializr();
          }
        );
      }
    };

    backgroundInitializr();

    return () => {
      // eslint-disable-next-line
      $("#" + "background_css3").remove();
    };
  }, []);

  return (
    <div className="App" style={{ background: "#007bff" }}>
      <div className="flex flex-col items-center h-screen justify-center">
        <h1 className="text-5xl pb-7 text-center font-bold text-white">
          Record Voice Notes
        </h1>
        {showSpeakPrompt && <h2>Speak in your native language</h2>}{" "}
        {/* Render the h2 only when showSpeakPrompt is true */}
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
              <p key={index}>{note}</p> // Use index as key since note might not be unique
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pge2;
