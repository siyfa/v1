import { Section } from "../../components/style";
import TestImg from "../../assets/images/sf.png";
//icons
import GithubIcon from "../../assets/github.svg";

export const Works = () => {
  return (
    <Section>
      <div className="max-w-screen-xl flex flex-wrap flex-col mx-auto pt-10 md:px-28 px-5">
        <div className="flex flex-wrap justify-left items-center mb-5">
          <h2 className="text-3xl font-primary">Some Things I've Built</h2>
          <span className="bg-gray-500 h-0.5 w-1/4 ml-5"></span>
        </div>
        <div className="flex flex-wrap flex-col justify-between mt-10">
          <div className="flex flex-wrap flex-row ">
            <a
              href="http://"
              target="_blank"
              rel="noopener noreferrer"
              className="h-96 w-2/3"
            >
              <img src={TestImg} className="w-full h-full" />
            </a>
            <div className="w-1/3 relative">
              <div className="text-right text-xl tracking-wide font-medium font-secondary">
                <p className="mb-2 ">Feature Project -</p>
                <a
                  href=""
                  target="_blank"
                  className="font-tetiary font-bold hover:underline"
                >
                  Project Name
                </a>
              </div>
              <div className="bg-[#0f0f0f] h-56 w-full absolute top-1/4 right-1/4">
                <p className="p-2 text-lg font-tetiary tracking-wide">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. In
                  cupiditate facere dolores ipsa consequuntur nihil tempora rem
                  repudiandae delectus? Aliquam dolor ea esse aliquid ipsam
                  corrupti ab perferendis accusamus laudantium!
                </p>
              </div>
              <ul className="flex flex-wrap text-sm absolute bottom-9 left-5 space-x-4">
                <li>React</li>
                <li>Node</li>
                <li>Express</li>
                <li>Express</li>
                <li>Express</li>
                <li>Express</li>
              </ul>
              <ul className="flex flex-wrap text-sm absolute bottom-0 left-5 space-x-4">
                <li>
                  <a href="" className="" target="_blank">
                    <img src={GithubIcon} alt="" className="" />
                  </a>
                </li>
                <li>
                  <a href="" className="" target="_blank">
                    Url
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
