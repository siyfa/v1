import { useState } from "react";
import { Section } from "../../components/style";

export const Experience = () => {
  const [activeTab, setActiveTab] = useState("trusoft");

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <Section id="experience">
      <div className="max-w-screen-xl flex flex-wrap flex-col mx-auto pt-24 md:px-28 px-3">
        <div className="flex flex-wrap md:flex-row flex-col justify-left items-center mb-5">
          <h2 className="text-3xl font-primary">Where I've worked</h2>
          <span className="bg-gray-500 h-0.5 md:w-1/4 w-1/4 md:mt-0 mt-2 md:ml-5"></span>
        </div>

        <div className="mb-4 mt-2 border-b border-gray-900 dark:border-gray-700 w-fit">
          <ul
            className="flex flex-wrap -mb-px font-medium text-center tracking-wide md:text-xl  font-secondary"
            id="myTab"
            data-tabs-toggle="#myTabContent"
            role="tablist"
          >
            <li className="mr-2" role="presentation">
              <button
                className={`inline-block p-4 border-b-2 rounded-t-lg ${
                  activeTab === "trusoft"
                    ? "border-gray-600"
                    : "border-transparent"
                }`}
                id="trusoft-tab"
                data-tabs-target="#trusoft"
                type="button"
                role="tab"
                aria-controls="trusoft"
                aria-selected={activeTab === "trusoft"}
                onClick={() => handleTabClick("trusoft")}
              >
                Trusoft
              </button>
            </li>
            <li className="mr-2" role="presentation">
              <button
                className={`inline-block p-4 border-b-2 rounded-t-lg ${
                  activeTab === "foodtrain"
                    ? "border-gray-600"
                    : "border-transparent"
                }`}
                id="foodtrain-tab"
                data-tabs-target="#foodtrain"
                type="button"
                role="tab"
                aria-controls="foodtrain"
                aria-selected={activeTab === "foodtrain"}
                onClick={() => handleTabClick("foodtrain")}
              >
                FoodTrain
              </button>
            </li>
            <li className="mr-2" role="presentation">
              <button
                className={`inline-block p-4 border-b-2 rounded-t-lg ${
                  activeTab === "proctorme"
                    ? "border-gray-600"
                    : "border-transparent"
                }`}
                id="proctorme-tab"
                data-tabs-target="#proctorme"
                type="button"
                role="tab"
                aria-controls="settings"
                aria-selected={activeTab === "proctorme"}
                onClick={() => handleTabClick("proctorme")}
              >
                ProctorMe
              </button>
            </li>
          </ul>
        </div>
        <div id="myTabContent">
          <div
            className={`p-4 rounded-lg tracking-wide font-tetiary ${
              activeTab === "trusoft" ? "bg-transparent" : "hidden"
            }`}
            id="trusoft"
            role="tabpanel"
            aria-labelledby="trusoft-tab"
          >
            <h4 className="text-2xl">
              Lead Engineer -
              <a
                href="https://trusoftng.com"
                className="text-gray-100 font-bold hover:underline ml-1"
                target="_blank"
              >
                Trusoft
              </a>
            </h4>
            <p className="text-lg">July 2022 - Present</p>
            <p className="text-md"> - Remote</p>
            <ol className="mt-5 list-disc ml-5 text-lg md:w-3/4">
              <li className="mb-5">
                Deliver high-quality, robust production code for a diverse array
                of projects for clients including Harvard Business School,
                Everytown for Gun Safety, Pratt Institute, Koala Health,
                Vanderbilt University, The 19th News, and more
              </li>
              <li className="mb-5">
                Deliver high-quality, robust production code for a diverse array
                of projects for clients including Harvard Business School,
                Everytown for Gun Safety, Pratt Institute, Koala Health,
                Vanderbilt University, The 19th News, and more
              </li>
              <li className="mb-5">
                Deliver high-quality, robust production code for a diverse array
                of projects for clients
              </li>
              <li className="mb-5">
                Deliver high-quality, robust production code for a diverse array
                of projects for clients
              </li>
            </ol>
          </div>
          <div
            className={`p-4 rounded-lg tracking-wide font-tetiary ${
              activeTab === "foodtrain" ? "bg-transparent" : "hidden"
            }`}
            id="foodtrain"
            role="tabpanel"
            aria-labelledby="foodtrain-tab"
          >
            <h4 className="text-2xl">
              MERN Stack Developer -
              <a
                href="https://foodtrain.co"
                className="text-gray-100 font-bold hover:underline ml-1"
                target="_blank"
              >
                FoodTrain
              </a>
            </h4>
            <p className="text-lg">May 2021 - June 2022</p>
            <p className="text-md"> - Remote</p>
            <ol className="mt-5 list-disc ml-5 text-lg md:w-3/4">
              <li className="mb-5">
                Deliver high-quality, robust production code for a diverse array
                of projects for clients including Harvard Business School,
                Everytown for Gun Safety, Pratt Institute, Koala Health,
                Vanderbilt University, The 19th News, and more
              </li>
              <li className="mb-5">
                Deliver high-quality, robust production code for a diverse array
                of projects for clients including Harvard Business School,
                Everytown for Gun Safety, Pratt Institute, Koala Health,
                Vanderbilt University, The 19th News, and more
              </li>
              <li className="mb-5">
                Deliver high-quality, robust production code for a diverse array
                of projects for clients
              </li>
              <li className="mb-5">
                Deliver high-quality, robust production code for a diverse array
                of projects for clients
              </li>
            </ol>
          </div>
          <div
            className={`p-4 rounded-lg tracking-wide font-tetiary ${
              activeTab === "proctorme" ? "bg-transparent" : "hidden"
            }`}
            id="proctorme"
            role="tabpanel"
            aria-labelledby="proctorme-tab"
          >
            <h4 className="text-2xl">
              React Developer -
              <a
                href="https://proctorme.com"
                className="text-gray-100 font-bold hover:underline ml-1"
                target="_blank"
              >
                ProctorMe
              </a>
            </h4>
            <p className="text-lg">July 2022 - Present</p>
            <p className="text-md"> - Contract</p>
            <ol className="mt-5 list-disc ml-5 text-lg md:w-3/4">
              <li className="mb-5">
                Deliver high-quality, robust production code for a diverse array
                of projects for clients including Harvard Business School,
                Everytown for Gun Safety, Pratt Institute, Koala Health,
                Vanderbilt University, The 19th News, and more
              </li>
              <li className="mb-5">
                Deliver high-quality, robust production code for a diverse array
                of projects for clients including Harvard Business School,
                Everytown for Gun Safety, Pratt Institute, Koala Health,
                Vanderbilt University, The 19th News, and more
              </li>
              <li className="mb-5">
                Deliver high-quality, robust production code for a diverse array
                of projects for clients
              </li>
              <li className="mb-5">
                Deliver high-quality, robust production code for a diverse array
                of projects for clients
              </li>
            </ol>
          </div>
        </div>
      </div>
    </Section>
  );
};
