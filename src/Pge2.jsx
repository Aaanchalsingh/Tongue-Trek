import React, { useState, useEffect } from "react";
import $ from "jquery";
import "jquery.transit";
import logo from "./1.png";
import pause from "./2.png";

function Pge2() {
  const [isRecording, setisRecording] = useState(false);
  const [note, setNote] = useState(null);
  const [notesStore, setnotesStore] = useState([]);
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
  const microphone = new SpeechRecognition();

  microphone.continuous = true;
  microphone.interimResults = true;
  microphone.lang = "en-US";

  const storeNote = () => {
    setnotesStore([...notesStore, note]);
    setNote("");
  };

  const startRecordController = () => {
    if (isRecording) {
      // Start animation when recording starts
      startAnimation();
      microphone.start();
      microphone.onend = () => {
        console.log("continue..");
        microphone.start();
      };
    } else {
      // Stop animation when recording stops
      stopAnimation();
      microphone.stop();
      microphone.onend = () => {
        console.log("Stopped microphone on Click");
      };
    }
    microphone.onstart = () => {
      console.log("microphones on");
    };

    microphone.onresult = (event) => {
      const recordingResult = Array.from(event.results)
        .map((result) => result[0])
        .map((result) => result.transcript)
        .join("");
      console.log(recordingResult);
      setNote(recordingResult);
      microphone.onerror = (event) => {
        console.log(event.error);
      };
    };
  };

  const startAnimation = () => {
    // Start animation logic
    $(".shape_background").transit("resume");
  };

  const stopAnimation = () => {
    // Stop animation logic
    $(".shape_background").transit("pause");
  };

  useEffect(() => {
    startRecordController();
    // eslint-disable-next-line
  }, [isRecording]);

  useEffect(() => {
    const background = {};

    background.initializr = function () {
      const $this = this;

      // Options
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
      console.log("hello");

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
        $this.generate_bubbles();
      }
    };

    background.generate_bubbles = function () {
      const $this = this;
      const base = $("<div class='shape_background'></div>");
      const shape_type = $this.shape ? $this.shape : Math.floor($this.rn(1, 3));
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
      const rn_size = $this.rn(0.8, 1.2);
      bolla.css({
        transform:
          "scale(" + rn_size + ") rotate(" + $this.rn(-360, 360) + "deg)",
        top: $this.wh + 100,
        left: $this.rn(-60, $this.ww + 60),
      });
      bolla.appendTo($this.object);
      bolla.transit(
        {
          top: $this.rn($this.wh / 2, $this.wh / 2 - 60),
          transform:
            "scale(" + rn_size + ") rotate(" + $this.rn(-360, 360) + "deg)",
          opacity: 0,
        },
        $this.rn($this.speed[0], $this.speed[1]),
        function () {
          $(this).remove();
          $this.generate_bubbles();
        }
      );
    };

    background.rn = function (from, to, arr) {
      if (arr) {
        return Math.random() * (to - from + 1) + from;
      } else {
        return Math.floor(Math.random() * (to - from + 1) + from);
      }
    };

    background.initializr();

    return () => {};
  }, []);

  return (
    <div className="App flex flex-col items-center align-content-center " style={{ background: "#007bff" }}>
      <h1 className="text-6xl font-bold text-center text-white p-10">
        Record Voice Notes
      </h1>
      <div className="flex items-center align-content-center ">
        <div className="noteContainer">

          <h2>Record Note Here</h2>
          <button className="button" onClick={storeNote} disabled={!note}>
            Save
          </button>
          <button onClick={() => {
            setisRecording((prevState) => !prevState);
            startRecordController();
          }}>
            <img src={!isRecording ? pause : logo} alt="" srcSet="" />
          </button>
          <p>{note}</p>
        </div>
        <div className="noteContainer">
          <h2>Notes Store</h2>
          **
          {notesStore.map((note) => (
            <p key={note}>{note}</p>
          ))}
          **
        </div>
      </div>
    </div>
  );
}

export default Pge2;
