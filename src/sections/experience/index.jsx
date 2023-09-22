import { useState } from "react";
import { Section } from "../../components/style";

export const Experience = () => {
  const [activeTab, setActiveTab] = useState("trusoft");

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <Section>
      <div className="max-w-screen-xl flex flex-wrap flex-col mx-auto pt-10 md:px-28 px-5">
        <div className="flex flex-wrap justify-left items-center mb-5">
          <h2 className="text-3xl font-primary">Where I've worked</h2>
          <span className="bg-gray-500 h-0.5 w-1/4 ml-5"></span>
        </div>

        <div class="mb-4 mt-2 border-b border-gray-200 dark:border-gray-700">
          <ul
            class="flex flex-wrap -mb-px text-sm font-medium text-center tracking-wide"
            id="myTab"
            data-tabs-toggle="#myTabContent"
            role="tablist"
          >
            <li class="mr-2" role="presentation">
              <button
                className={`inline-block p-4 border-b-2 rounded-t-lg ${
                  activeTab === "trusoft"
                    ? "border-blue-500"
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
            <li class="mr-2" role="presentation">
              <button
                class={`inline-block p-4 border-b-2 rounded-t-lg ${
                  activeTab === "foodtrain"
                    ? "border-blue-500"
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
            <li class="mr-2" role="presentation">
              <button
                class={`inline-block p-4 border-b-2 rounded-t-lg ${
                  activeTab === "proctorme"
                    ? "border-blue-500"
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
            className={`p-4 rounded-lg ${
              activeTab === "trusoft" ? "bg-gray-50 dark:bg-gray-800" : "hidden"
            }`}
            id="trusoft"
            role="tabpanel"
            aria-labelledby="trusoft-tab"
          >
            <p className="text-sm text-gray-500 dark:text-gray-400">
              This is some placeholder content the{" "}
              <strong className="font-medium text-gray-800 dark:text-white">
                Profile tab's associated content
              </strong>
              .
            </p>
          </div>
          <div
            className={`p-4 rounded-lg ${
              activeTab === "foodtrain" ? "bg-gray-50 dark:bg-gray-800" : "hidden"
            }`}
            id="foodtrain"
            role="tabpanel"
            aria-labelledby="foodtrain-tab"
          >
            <p className="text-sm text-gray-500 dark:text-gray-400">
              This is some placeholder content the foodtrain
              <strong className="font-medium text-gray-800 dark:text-white">
                Profile tab's associated content
              </strong>
              .
            </p>
          </div>
          <div
            className={`p-4 rounded-lg ${
              activeTab === "proctorme" ? "bg-gray-50 dark:bg-gray-800" : "hidden"
            }`}
            id="proctorme"
            role="tabpanel"
            aria-labelledby="proctorme-tab"
          >
            <p className="text-sm text-gray-500 dark:text-gray-400">
              This is some placeholder content the proctorme
              <strong className="font-medium text-gray-800 dark:text-white">
                Profile tab's associated content
              </strong>
              .
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};
