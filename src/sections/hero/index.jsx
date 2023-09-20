import { useState, useEffect } from "react";
import { Wrapper, Overlay, Logo } from "../../components/style.js";
import "animate.css";

import { ParticleBackground } from "../../components/particle.jsx";
//
import NavBar from "../../components/nav/index.jsx";

export const Hero = () => {
  return (
    <Wrapper>
      <ParticleBackground />
      <Overlay>
        <div className="animate__animated animate__backInUp">
          <NavBar />
          <h1>hello</h1>
        </div>
      </Overlay>
    </Wrapper>
  );
};
