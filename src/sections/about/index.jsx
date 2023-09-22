import { Section } from "../../components/style";
import Me from "../../assets/images/me.jpg";

export const About = () => {
  return (
    <Section>
      <div className="max-w-screen-xl flex flex-wrap flex-col mx-auto pt-10 md:px-28 px-5">
        <div className="flex flex-wrap justify-left items-center mb-5">
          <h2 className="text-3xl font-primary">About Me</h2>
          <span className="bg-gray-500 h-0.5 w-1/4 ml-5"></span>
        </div>
        <div className="flex flex-wrap md:flex-row flex-col items-center justify-between">
          <div className="w-1/2 text-lg font-tetiary tracking-wide">
            <p className="mb-5">
              Hello! My name is Faruk and I enjoy creating things that live on
              the internet. My interest in web development started back in 2019
              when I decided to try editing custom Tumblr themes — turns out
              hacking together a custom reblog button taught me a lot about HTML
              & CSS!
            </p>
            <p className="mb-5">
              Fast-forward to today, and I’ve had the privilege of working at an
              advertising agency, a start-up, a huge corporation, and a
              student-led design studio. My main focus these days is building
              accessible, inclusive products and digital experiences at
              <a
                href="https://trusoftng.com"
                className="text-gray-100 font-bold hover:underline ml-1"
                target="_blank"
              >
                Trusoft
              </a>{" "}
              for a variety of clients.
            </p>
            <p className="mb-5">
              I also recently launched a course that covers everything you need
              to build a web app with the Spotify API using Node & React.
            </p>
            <div className="">
              <p>
                Here are a few technologies I’ve been working with recently:
              </p>
              <ul className="flex flex-wrap list-disc ml-5">
                <li>Node</li>
                <li className="ml-14">JavaScript (ES6+)</li>
              </ul>
              <ul className="flex flex-wrap list-disc ml-5">
                <li>React</li>
                <li className="ml-14">TypeScript</li>
              </ul>
              <ul className="flex flex-wrap list-disc ml-5">
                <li>AWS</li>
                <li className="ml-14">Python</li>
              </ul>
            </div>
          </div>
          <div className="">
            <div className="h-96 w-96 bg-gray-300 relative rounded">
              <img
                src={Me}
                alt="siyanbola faruk"
                className="object-cover md:h-full md:w-full absolute left-3 hover:left-0 bottom-3 hover:bottom-0 mix-blend-multiply brightness-50 hover:brightness-100 rounded"
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
