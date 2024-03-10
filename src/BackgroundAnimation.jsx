import React, { useEffect } from "react";
import "jquery.transit";
import { Link } from "react-router-dom";
import $ from "jquery";

function BackgroundAnimation() {
  useEffect(() => {
    const initializr = () => {
      const style = {
        bubbles_color: "#fff",
        stroke_width: 0,
        stroke_color: "black",
      };
      const bubbles_number = 30;
      const speed = [1500, 8000];
      const shape = false;

      const object = document.createElement("div");
      object.id = "background_css3";
      object.style.cssText =
        "z-index: -1; margin: 0; padding: 0; overflow: hidden; position: absolute; bottom: 0;";
      document.body.appendChild(object);

      for (let i = 0; i < bubbles_number; i++) {
        generateBubbles(object, style, shape, speed);
      }
    };

    const generateBubbles = (object, style, shape, speed) => {
      const base = document.createElement("div");
      base.classList.add("shape_background");

      let bolla;
      const shape_type = shape ? shape : Math.floor(rn(1, 3));
      if (shape_type === 1) {
        bolla = base;
      } else if (shape_type === 2) {
        bolla = base;
      } else {
        bolla = base;
      }

      const rn_size = rn(0.8, 1.2);
      bolla.style.cssText = `
        transform: scale(${rn_size}) rotate(${rn(-360, 360)}deg);
        top: 100vh;
        left: ${rn(-60, window.innerWidth + 60)}px;
      `;

      object.appendChild(bolla);
      $(bolla).transit(
        {
          top: rn(window.innerHeight / 2, window.innerHeight / 2 - 60),
          transform: `scale(${rn_size}) rotate(${rn(-360, 360)}deg)`,
          opacity: 0,
        },
        rn(speed[0], speed[1]),
        () => $(bolla).remove()
      );
    };

    const rn = (from, to, arr) => {
      if (arr) {
        return Math.random() * (to - from + 1) + from;
      } else {
        return Math.floor(Math.random() * (to - from + 1) + from);
      }
    };

    initializr();

    return () => {};
  }, []);

  return (
    <div className="App" style={{ background: "#007bff", height: "100%" }}>
      hellllllllllllllo
      <header className="App-header">
        <h1
          style={{
            height: "auto",
            display: "table",
            width: "80%",
            textAlign: "center",
            overflow: "auto",
            margin: "auto",
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            color: "white",
            fontFamily: "'Raleway', sans-serif",
            fontWeight: 300,
            fontSize: "3em",
          }}
        >
          Voice-to-Text Recognition
        </h1>
        <h2
          style={{
            position: "fixed",
            textAlign: "center",
            top: "10px",
            right: "20px",
            color: "white",
            fontSize: "20px",
            fontFamily: "Roboto",
            fontWeight: "normal",
            zIndex: 999,
          }}
        >
          <span style={{ fontSize: "15px", fontWeight: "lighter" }}>
            Subtitle
          </span>
          <Link
            to="#"
            style={{ color: "white", fontSize: "15px", padding: "0 30px" }}
          >
            Link
          </Link>
        </h2>
      </header>
    </div>
  );
}
export default BackgroundAnimation;
