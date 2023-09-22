import { Wrapper, HeroContent } from "../../components/style.js";
import "animate.css";
//
import NavBar from "../../components/nav/index.jsx";

export const Hero = () => {
  return (
    <Wrapper>
      <NavBar />
      <HeroContent className="animate__animated animate__backInUp">
        <div className="max-w-screen-xl flex flex-wrap flex-col mx-auto md:pt-40 pt-20 md:px-28 px-5 animate__animated animate__backInUp">
          <p className="md:text-xl pb-5 font-tetiary font-bold tracking-wide">
            Hi, my name is
          </p>
          <h1 className="md:text-7xl text-4xl font-secondary font-semibold">
            Siyanbola Faruk.
          </h1>
          <h1 className="md:text-7xl text-4xl pt-2 font-secondary font-semibold text-gray-400">
            I build things for the web.
          </h1>
          <p className="md:text-xl pt-10 font-tetiary tracking-wide md:w-3/4 w-auto">
            I’m a software engineer specializing in building and designing
            exceptional digital experiences. Currently, I’m focused on building
            accessible, human-centered products at{" "}
            <a
              href="https://trusoftng.com"
              className="text-gray-100 font-bold hover:underline"
              target="_blank"
            >
              Trusoft
            </a>
          </p>
        </div>
      </HeroContent>
    </Wrapper>
  );
};
