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

  const storeNote = () => {
    setNotesStore([...notesStore, note]);
    setNote("");
  };

  const startRecordController = () => {
    if (isRecording) {
      console.log("Recording started");
      microphone.start();
    } else {
      console.log("Recording stopped");
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
      console.log(recordingResult);
      setNote(recordingResult);
    };

    microphone.onerror = (event) => {
      console.log("Speech recognition error:", event.error);
    };

    // Clean up the microphone when the component unmounts
    return () => {
      microphone.stop();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isRecording]);

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
        const shape_type = $this.shape ? $this.shape : Math.floor(Math.random() * 3) + 1;
        let bolla;
        if (shape_type === 1) {
          bolla = base.css({ borderRadius: "50%" });
        } else if (shape_type === 2) {
          bolla = base.css({
            width: 0,
            height: 0,
            "border-style": "solid",
            "border-width": "0 40px 69.3px 40px",
            "border-color": "transparent transparent " + $this.style.bubbles_color + " transparent",
            background: "transparent",
          });
        } else {
          bolla = base;
        }
        const rn_size = Math.random() * (1.2 - 0.8) + 0.8;
        bolla.css({
          transform: "scale(" + rn_size + ") rotate(" + (Math.random() * 720 - 360) + "deg)",
          top: $this.wh + 100,
          left: Math.random() * ($this.ww + 120) - 60,
        });
        bolla.appendTo($this.object);
        bolla.transit(
          {
            top: Math.random() * ($this.wh / 2 - 60) + $this.wh / 2,
            transform: "scale(" + rn_size + ") rotate(" + (Math.random() * 720 - 360) + "deg)",
            opacity: 0,
          },
          Math.random() * ($this.speed[1] - $this.speed[0]) + $this.speed[0],
          function () {
            $(this).remove();
            // Call recursively to generate more bubbles
            backgroundInitializr();
          }
        );
      }
    };

    backgroundInitializr();

    // Clean up the background effect when the component unmounts
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
            <button onClick={() => setIsRecording((prevState) => !prevState)}>
              <img src={logo} alt="" srcSet="" />
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
