import { Section } from "../../components/style";
import TestWork from "../../assets/images/work1.png";
//icons
import GithubIcon from "../../assets/github.svg";
import LinkIcon from "../../assets/url.svg";

export const Works = () => {
  return (
    <Section>
      <div className="max-w-screen-xl flex flex-wrap flex-col mx-auto pt-24 md:px-28 px-5">
        <div className="flex flex-wrap md:flex-row flex-col justify-left items-center mb-5">
          <h2 className="text-3xl font-primary">Some Things I've Built</h2>
          <span className="bg-gray-500 h-0.5 md:w-1/4 w-2/4 md:mt-0 mt-2 md:ml-5"></span>
        </div>
        <div className="flex flex-wrap flex-col justify-between mt-10 mb-10 ">
          <div className="flex flex-wrap md:flex-row relative">
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="md:h-96 h-[350px] md:w-2/3 w-full"
            >
              <img
                src={TestWork}
                className="w-full h-full md:hover:grayscale-0 md:grayscale relative hover:z-10"
              />
            </a>
            <div className="md:w-1/3 w-full md:h-0 h-[350px] md:relative absolute top-0">
              <div className="md:text-right text-left text-xl tracking-wide font-medium font-secondary md:relative absolute md:top-0 top-2 md:left-0 left-2 md:z-0 z-20">
                <p className="mb-2 text-sm font-tetiary md:block hidden">
                  Feature Project -
                </p>
                <a
                  href=""
                  target="_blank"
                  className="font-tetiary font-bold hover:underline"
                >
                  Project Name
                </a>
              </div>
              <div className="">
                <div className="md:bg-[#080808] bg-[rgba(248,102,102,0.9)] md:h-56 w-full absolute md:top-20 top-0 bottom-0 md:right-1/4 ">
                  <p className="p-2 text-lg font-tetiary md:tracking-wide tracking-widest md:mt-0 mt-10 md:ml-0 ml-2">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. In
                    cupiditate facere dolores ipsa consequuntur nihil tempora
                    rem repudiandae delectus? Aliquam dolor ea esse aliquid
                    ipsam corrupti ab perferendis accusamus laudantium!
                  </p>
                </div>
              </div>
              <div className="absolute bottom-2 left-2 md:top-[320px]">
                <ul className="flex flex-wrap text-sm space-x-4">
                  <li>React</li>
                  <li>Node</li>
                  <li>Express</li>
                  <li>Express</li>
                </ul>
                <ul className="flex flex-wrap text-sm space-x-4">
                  <li className="hover:bg-black p-1 rounded">
                    <a href="" className="" target="_blank">
                      <img src={GithubIcon} alt="" className="" />
                    </a>
                  </li>
                  <li className="hover:bg-black p-1 rounded">
                    <a href="" className="" target="_blank">
                      <img src={LinkIcon} alt="" className="" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap flex-col justify-between my-16">
          <div className="flex flex-wrap md:flex-row relative">
            <div className="md:w-1/3 w-full  md:relative absolute top-0 z-[2]">
              <div className="text-right text-xl tracking-wide font-medium font-secondary">
                <p className="mb-2 text-sm font-tetiary text-left md:block hidden">
                  Feature Project -
                </p>
                <a
                  href=""
                  target="_blank"
                  className="font-tetiary font-bold hover:underline text-left flex md:ml-0 ml-2 md:mt-0 mt-2 md:relative absolute z-20"
                >
                  Project Name
                </a>
              </div>
              <div className="md:bg-[#080808] bg-[rgba(10,10,10,0.9)] md:h-56 h-[50vh] w-full absolute md:top-20 md:left-1/4 left-0 top-0">
                <p className="p-2 text-lg font-tetiary md:tracking-wide tracking-widest md:mt-0 mt-16 md:ml-0 ml-2">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. In
                  cupiditate facere dolores ipsa consequuntur nihil tempora rem
                  repudiandae delectus? Aliquam dolor ea esse aliquid ipsam
                  corrupti ab perferendis accusamus laudantium!
                </p>
              </div>
              <ul className="flex flex-wrap text-sm absolute md:bottom-12 bottom-[-400px] left-2 md:left-auto md:right-5 space-x-4">
                <li>React</li>
                <li>Node</li>
                <li>Express</li>
                <li>Express</li>
              </ul>
              <ul className="flex flex-wrap text-sm absolute md:bottom-0 bottom-[-450px] md:right-5 md:left-auto left-2 space-x-4">
                <li className="hover:bg-black p-1 rounded">
                  <a href="" className="" target="_blank">
                    <img src={GithubIcon} alt="" className="" />
                  </a>
                </li>
                <li className="hover:bg-black p-1 rounded">
                  <a href="" className="" target="_blank">
                    <img src={LinkIcon} alt="" className="" />
                  </a>
                </li>
              </ul>
            </div>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="md:h-96 h-[50vh] md:w-2/3 w-full"
            >
              <img
                src={TestWork}
                className="w-full h-full md:hover:grayscale-0 md:grayscale relative hover:z-10 z-0"
              />
            </a>
          </div>
        </div>
        <button className="my-8 tracking-wide font-secondary text-md w-fit p-2 border-2 border-gray-100 border-dotted hover:border-dashed rounded mx-auto text-gray-100">
          Show More
        </button>
      </div>
    </Section>
  );
};
