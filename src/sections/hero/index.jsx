import { useState, useEffect } from "react";
import { Wrapper, Overlay, HeroContent } from "../../components/style.js";
import "animate.css";

import { ParticleBackground } from "../../components/particle.jsx";
//
import NavBar from "../../components/nav/index.jsx";

export const Hero = () => {
  return (
    <Wrapper>
      <ParticleBackground />
      <Overlay>
        <NavBar />
        <HeroContent className="animate__animated animate__backInUp">
          <h1>Hello</h1>
        </HeroContent>
      </Overlay>
    </Wrapper>
  );
};
