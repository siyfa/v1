import { Section } from "../../components/style";
import TestWork from "../../assets/images/work1.png";
//icons
import GithubIcon from "../../assets/github.svg";
import LinkIcon from "../../assets/url.svg";

export const Works = () => {
  return (
    <Section>
      <div className="max-w-screen-xl flex flex-wrap flex-col mx-auto pt-24 md:px-28 px-5">
        <div className="flex flex-wrap justify-left items-center mb-5">
          <h2 className="text-3xl font-primary">Some Things I've Built</h2>
          <span className="bg-gray-500 h-0.5 w-1/4 ml-5"></span>
        </div>
        <div className="flex flex-wrap flex-col justify-between mt-10 mb-10">
          <div className="flex flex-wrap flex-row ">
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="h-96 w-2/3"
            >
              <img
                src={TestWork}
                className="w-full h-full hover:grayscale-0 grayscale relative hover:z-10"
              />
            </a>
            <div className="w-1/3 relative">
              <div className="text-right text-xl tracking-wide font-medium font-secondary">
                <p className="mb-2 text-sm font-tetiary">Feature Project -</p>
                <a
                  href=""
                  target="_blank"
                  className="font-tetiary font-bold hover:underline"
                >
                  Project Name
                </a>
              </div>
              <div className="bg-[#080808] h-56 w-full absolute top-20 right-1/4 ">
                <p className="p-2 text-lg font-tetiary tracking-wide">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. In
                  cupiditate facere dolores ipsa consequuntur nihil tempora rem
                  repudiandae delectus? Aliquam dolor ea esse aliquid ipsam
                  corrupti ab perferendis accusamus laudantium!
                </p>
              </div>
              <ul className="flex flex-wrap text-sm absolute bottom-12 left-5 space-x-4">
                <li>React</li>
                <li>Node</li>
                <li>Express</li>
                <li>Express</li>
              </ul>
              <ul className="flex flex-wrap text-sm absolute bottom-0 left-5 space-x-4">
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
        <div className="flex flex-wrap flex-col justify-between my-16">
          <div className="flex flex-wrap flex-row ">
            <div className="w-1/3 relative z-[2]">
              <div className="text-right text-xl tracking-wide font-medium font-secondary">
                <p className="mb-2 text-sm font-tetiary text-left">
                  Feature Project -
                </p>
                <a
                  href=""
                  target="_blank"
                  className="font-tetiary font-bold hover:underline text-left flex"
                >
                  Project Name
                </a>
              </div>
              <div className="bg-[#080808] h-56 w-full absolute top-20 left-1/4 ">
                <p className="p-2 text-lg font-tetiary tracking-wide">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. In
                  cupiditate facere dolores ipsa consequuntur nihil tempora rem
                  repudiandae delectus? Aliquam dolor ea esse aliquid ipsam
                  corrupti ab perferendis accusamus laudantium!
                </p>
              </div>
              <ul className="flex flex-wrap text-sm absolute bottom-12 right-5 space-x-4">
                <li>React</li>
                <li>Node</li>
                <li>Express</li>
                <li>Express</li>
              </ul>
              <ul className="flex flex-wrap text-sm absolute bottom-0 right-5 space-x-4">
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
              className="h-96 w-2/3"
            >
              <img
                src={TestWork}
                className="w-full h-full hover:grayscale-0 grayscale relative hover:z-10 z-0"
              />
            </a>
          </div>
        </div>
        <div className="flex flex-wrap flex-col justify-between mt-10 mb-10">
          <div className="flex flex-wrap flex-row ">
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="h-96 w-2/3"
            >
              <img
                src={TestWork}
                className="w-full h-full hover:grayscale-0 grayscale relative hover:z-10"
              />
            </a>
            <div className="w-1/3 relative">
              <div className="text-right text-xl tracking-wide font-medium font-secondary">
                <p className="mb-2 text-sm font-tetiary">Feature Project -</p>
                <a
                  href=""
                  target="_blank"
                  className="font-tetiary font-bold hover:underline"
                >
                  Project Name
                </a>
              </div>
              <div className="bg-[#080808] h-56 w-full absolute top-20 right-1/4 ">
                <p className="p-2 text-lg font-tetiary tracking-wide">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. In
                  cupiditate facere dolores ipsa consequuntur nihil tempora rem
                  repudiandae delectus? Aliquam dolor ea esse aliquid ipsam
                  corrupti ab perferendis accusamus laudantium!
                </p>
              </div>
              <ul className="flex flex-wrap text-sm absolute bottom-12 left-5 space-x-4">
                <li>React</li>
                <li>Node</li>
                <li>Express</li>
                <li>Express</li>
              </ul>
              <ul className="flex flex-wrap text-sm absolute bottom-0 left-5 space-x-4">
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
        <div className="flex flex-wrap flex-col justify-between my-16">
          <div className="flex flex-wrap flex-row ">
            <div className="w-1/3 relative z-[2]">
              <div className="text-right text-xl tracking-wide font-medium font-secondary">
                <p className="mb-2 text-sm font-tetiary text-left">
                  Feature Project -
                </p>
                <a
                  href=""
                  target="_blank"
                  className="font-tetiary font-bold hover:underline text-left flex"
                >
                  Project Name
                </a>
              </div>
              <div className="bg-[#080808] h-56 w-full absolute top-20 left-1/4 ">
                <p className="p-2 text-lg font-tetiary tracking-wide">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. In
                  cupiditate facere dolores ipsa consequuntur nihil tempora rem
                  repudiandae delectus? Aliquam dolor ea esse aliquid ipsam
                  corrupti ab perferendis accusamus laudantium!
                </p>
              </div>
              <ul className="flex flex-wrap text-sm absolute bottom-12 right-5 space-x-4">
                <li>React</li>
                <li>Node</li>
                <li>Express</li>
                <li>Express</li>
              </ul>
              <ul className="flex flex-wrap text-sm absolute bottom-0 right-5 space-x-4">
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
              className="h-96 w-2/3"
            >
              <img
                src={TestWork}
                className="w-full h-full hover:grayscale-0 grayscale relative hover:z-10 z-0"
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
