import React, { useState } from "react";
import Arrow from "/public/arrow.png";
function Tab(props) {
  return (
    <button
      className={`inline-block p-4 border-b-2 rounded-tl-lg rounded-bl-lg ${
        props.isActive ? "bg-black text-white dark:bg-gray-700" : ""
      }`}
      onClick={props.onClick}
      aria-controls={props.tabId}
      aria-selected={props.isActive}
      role="tab"
      id={`${props.tabId}-tab`}
      data-tabs-target={`#${props.tabId}`}
      type="button"
    >
      {props.title}
    </button>
  );
}

function TabContent(props) {
  return (
    <div
      className={`p-4 rounded-lg bg-gray-50 dark:bg-gray-800 ${
        props.isActive ? "block" : "hidden"
      }`}
      id={props.tabId}
      role="tabpanel"
      aria-labelledby={`${props.tabId}-tab`}
    >
      {props.children}
    </div>
  );
}

function ServiceTab() {
  const [activeTab, setActiveTab] = useState("Silver");

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <>
      <section className="tab-section  bg-[#F6F6F6] lg:pt-[152px] md:pt-[100px] sm:pt-[80px] pt-[70px]">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center flex-col">
            <div className="mb-4  border-b border-gray-200 dark:border-gray-700">
              <ul
                className="flex flex-wrap -mb-px text-sm font-medium text-center border border-[#FF734F] rounded-xl"
                id="default-tab"
                data-tabs-toggle="#default-tab-content"
                role="tablist"
              >
                <li className="me-2 border-r border-[#FF734F]" role="presentation">
                  <Tab
                    title="Silver"
                    isActive={activeTab === "Silver"}
                    onClick={() => handleTabClick("Silver")}
                    tabId="Silver"
                  />
                </li>
                <li
                  className="me-4 relative mx-auto text-center border-r border-[#FF734F]"
                  role="presentation"
                >
                  <span className="absolute top-[-26px] text-[#FF734F]">
                    Save 10%
                  </span>
                  <Tab
                    title="Gold"
                    isActive={activeTab === "Gold"}
                    onClick={() => handleTabClick("Gold")}
                    tabId="Gold"
                  />
                </li>
                <li
                  className="me-2 relative mx-auto text-center"
                  role="presentation"
                >
                  <span className="absolute top-[-26px] text-[#FF734F]">
                    Save 10%
                  </span>
                  <Tab
                    title="Premium"
                    isActive={activeTab === "Premium"}
                    onClick={() => handleTabClick("Premium")}
                    tabId="Premium"
                  />
                </li>
              </ul>
            </div>
            <div id="default-tab-content" className="mb-24">
              <TabContent tabId="Silver" isActive={activeTab === "Silver"}>
                <div
                  className="flex flex-col rounded-lg border-2 px-20 py-10 border-[#FF734F] text-center hover:border-black
"
                >
                  <div className="mb-10">
                    <h4 className="text-[#292526] font-bold text-2xl inter">
                      Silver
                    </h4>
                    <span className="text-base font-normal inter">
                      Great for basic UI/UX design needs
                    </span>
                  </div>

                  <div className="border-b-2 pb-7 mb-5 border-[#FF734F]">
                    <h5 className="font-bold text-2xl text-[#FF734F] inter">
                      $2,600
                    </h5>
                    <span className="font-bold text-base text-[#FF734F] inter">
                      per month
                    </span>
                  </div>

                  <div className="text-start mb-10">
                    <h6 className="inter text-base font-bold text-black mb-3">
                      What’s included:
                    </h6>
                    <ul className="pl-5">
                      <li className="inter text-base font-normal text-black mb-4">
                        UI execution
                      </li>
                      <li className="inter text-base font-normal text-black mb-5">
                        Connect on Slack
                      </li>
                      <li className="inter text-base font-normal text-black">
                        One 30 minute meeting a week
                      </li>
                    </ul>
                  </div>
                  <div className="text-start mb-10">
                    <h6 className="inter text-base font-bold text-black mb-3">
                      Design Team
                    </h6>
                    <ul className="pl-5">
                      <li className="inter text-base font-normal text-black mb-4">
                        1 designer working with 4-5 other customers at the same
                        time
                      </li>
                    </ul>
                  </div>
                  <div>
                    <button
                      type="button"
                      className="border-2 border-[#000] rounded-xl uppercase w-full p-6 inter flex items-center justify-center flex-wrap gap-4 font-bold"
                    >
                      Try Free <img src={Arrow} alt="" />
                    </button>
                  </div>
                </div>
              </TabContent>
              <TabContent tabId="Gold" isActive={activeTab === "Gold"}>
                <div
                  className="flex flex-col rounded-lg border-2 px-20 py-10 border-[#FF734F] text-center hover:border-black
"
                >
                  <div className="mb-10">
                    <h4 className="text-[#292526] font-bold text-2xl inter">
                      Gold
                    </h4>
                    <span className="text-base font-normal inter">
                      Great for end-to-end product design
                    </span>
                  </div>

                  <div className="border-b-2 pb-7 mb-5 border-[#FF734F]">
                    <h5 className="font-bold text-2xl text-[#FF734F] inter">
                      $3,595
                    </h5>
                    <span className="font-bold text-base text-[#FF734F] inter">
                      per month
                    </span>
                  </div>

                  <div className="text-start mb-10">
                    <h6 className="inter text-base font-bold text-black mb-3">
                      What’s included:
                    </h6>
                    <ul className="pl-5">
                      <li className="inter text-base font-normal text-black mb-4">
                        Everything in Essential
                      </li>
                      <li className="inter text-base font-normal text-black mb-4">
                        Full UI/UX design and research
                      </li>
                      <li className="inter text-base font-normal text-black mb-5">
                        Dev ready Figma files
                      </li>
                      <li className="inter text-base font-normal text-black">
                        One 1 hour meeting a week
                      </li>
                    </ul>
                  </div>
                  <div className="text-start mb-10">
                    <h6 className="inter text-base font-bold text-black mb-3">
                      Design Team
                    </h6>
                    <ul className="pl-5">
                      <li className="inter text-base font-normal text-black mb-4">
                        1 design lead
                      </li>
                      <li className="inter text-base font-normal text-black mb-4">
                        1 designer working on 2-3 other customers at the same
                        time
                      </li>
                    </ul>
                  </div>
                  <div>
                    <button
                      type="button"
                      className="border-2 border-[#000] rounded-xl uppercase w-full p-6 inter flex items-center justify-center flex-wrap gap-4 font-bold"
                    >
                      Try Free <img src={Arrow} alt="" />
                    </button>
                  </div>
                </div>
              </TabContent>
              <TabContent tabId="Premium" isActive={activeTab === "Premium"}>
                <div
                  className="flex flex-col rounded-lg border-2 px-20 py-10 border-[#FF734F] text-center hover:border-black
"
                >
                  <div className="mb-10">
                    <h4 className="text-[#292526] font-bold text-2xl inter">
                      Premium
                    </h4>
                    <span className="text-base font-normal inter block max-w-[300px] m-auto">
                      Great for products that require more design horsepower and
                      tight timelines
                    </span>
                  </div>

                  <div className="border-b-2 pb-7 mb-5 border-[#FF734F]">
                    <h5 className="font-bold text-2xl text-[#FF734F] inter">
                      $5,200
                    </h5>
                    <span className="font-bold text-base text-[#FF734F] inter">
                      per month
                    </span>
                  </div>

                  <div className="text-start mb-10">
                    <h6 className="inter text-base font-bold text-black mb-3">
                      What’s included:
                    </h6>
                    <ul className="pl-5">
                      <li className="inter text-base font-normal text-black mb-4">
                        Everything in Essential and Pro
                      </li>
                      <li className="inter text-base font-normal text-black mb-5">
                        User Testing
                      </li>
                      <li className="inter text-base font-normal text-black">
                        Figma Prototypes
                      </li>
                      <li className="inter text-base font-normal text-black">
                        Flexible meetings
                      </li>
                      <li className="inter text-base font-normal text-black">
                        Custom workflows to speed up delivery
                      </li>
                    </ul>
                  </div>
                  <div className="text-start mb-10">
                    <h6 className="inter text-base font-bold text-black mb-3">
                      Design Team
                    </h6>
                    <ul className="pl-5">
                      <li className="inter text-base font-normal text-black mb-4">
                        1 design lead
                      </li>
                      <li className="inter text-base font-normal text-black mb-4">
                        1 designer working on 1 other customer at the same time
                      </li>
                    </ul>
                  </div>
                  <div>
                    <button
                      type="button"
                      className="border-2 border-[#000] rounded-xl uppercase w-full p-6 inter flex items-center justify-center flex-wrap gap-4 font-bold"
                    >
                      Try Free <img src={Arrow} alt="" />
                    </button>
                  </div>
                </div>
              </TabContent>
            </div>
            <div className="border-t pt-5 border-[#000]">
              <h4 className="font-bold text-base text-black mb-5">
                Hey! Need a custom plan?{" "}
                <span className="text-[#F86642]">Contact us!</span>{" "}
              </h4>
              <p className="text-sm font-normal mb-7">
                Try us risk free for 7 days, if you don’t love us, get your
                money back.
              </p>
              <button
                type="button"
                className="bg-[#FF734F] text-white font-bold px-11 py-4 rounded-lg uppercase"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ServiceTab;
