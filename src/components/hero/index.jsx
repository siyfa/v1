import { Wrapper, Overlay } from "./style.js";
import { ParticleBackground } from "./particle.jsx";
import "animate.css";

//
import Logo from "../../assets/images/sf.png";

export const Hero = () => {
  return (
    <Wrapper>
      <ParticleBackground />
      <Overlay>
        <div className="animate__animated animate__backInUp">
          <img src={Logo} />
          <h1>Hi</h1>
        </div>
      </Overlay>
    </Wrapper>
  );
};
