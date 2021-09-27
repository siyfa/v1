//styles
import "./main.scss";
//dependencies
import { init } from "ityped";
import Bubble from "../Bubble";
//react
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      strings: ["Web developer", "Web designer", "Graphic Designer"],
      backDelay: 1500,
      backSpeed: 60,
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/map.png" alt="" className="personal" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Siyanbola Faruk</h1>
          <h3>
            Freelance <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
      <Bubble />
    </div>
  );
}
