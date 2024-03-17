import React, { useState } from "react";
import AccessFirst from "/public/accessFirst.jpg";
import AccessSecond from "/public/accessTwo.jpg";
import AccessThird from "/public/accessThree.jpg";
import LeftVector from "/public/left-vector.png";
import RightVector from "/public/right-vector.png";
import EricImg from "/public/erick_desoto.png";
export default function Accessible() {
  const [slideIndex, setSlideIndex] = useState(0); // Initial slide index

  const handlePrevious = () => {
    setSlideIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNext = () => {
    setSlideIndex((prevIndex) => Math.min(prevIndex + 1, 1)); // Adjust maximum index based on content length
  };

  const renderContent = () => {
    // Define your content for each slide index
    switch (slideIndex) {
      case 0:
        return (
          <>
            <div className="relative quote-para">
              <p className="md:px-16 md:py-16 p-8 font-bold text-white text-base md:text-2xl">
                TDP helped identify the main pain points and designed a new UX
                that is accessible and easy to understand. The redesign pushed
                us forward on our mission to be able to verify 100% of IDs in
                real-time, and we raised over $100M in funding.
              </p>
            </div>
            <div className="flex items-center justify-center flex-col text-center">
              <div className="flex items-center gap-2 mb-5">
                <img src={EricImg} alt="" />
                <div className="text-start">
                  <span className="block md:text-xl text-base font-bold text-[#FF734F]">
                    Erick Desoto
                  </span>
                  <span className="text-base font-normal text-white">
                    VP of Product at Socure
                  </span>
                </div>
              </div>
              <div>
                <button
                  type="button"
                  className="text-white text-sm md:text-base md:py-4 md:px-8 py-2 px-8 md:w-80 w-full rounded-xl uppercase font-bold bg-[#FF734F]"
                  
                >
                  see our case studies
                </button>
              </div>
            </div>
          </>
        );
      case 1:
        return (
          <>
            <div className="relative quote-para">
              <p className=" px-16 py-16 font-bold text-white text-2xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore eos ad assumenda amet sequi pariatur in dicta ex, repellat eaque iure minus soluta blanditiis porro provident fugit voluptates explicabo autem.
              </p>
            </div>
          </>
        );
      default:
        return null;
    }
  };
  return (
    <>
      <section className="flex items-center justify-center flex-col bg-[#292526] lg:pt-[152px] md:pt-[100px] sm:pt-[80px] pt-[70px]">
        <div className="max-w-[994px] container mx-auto text-center md:mb-10 mb-5">
          <h2 className="font-bold mb-5 xs:text-2xl md:text-4xl text-white">
            How <span className="text-[#FF734F] capitalize">accessible</span> UX design is
            changing the <span className="text-[#FF734F] capitalize"> businesses </span>{" "}
            for the better{" "}
          </h2>
        </div>
        <div className="flex  items-center md:flex-nowrap flex-wrap flex-row bg-[#91CFD2]  md:px-10 mb-10">
          <div
            className="flex flex-col bg-[#231F20] py-6 px-5 mb-5 md:mb-0 w-96 md:w-auto rounded-lg md:mr-6 mr-0 mt-4"
            style={{
              boxShadow: "7px 8px 51px 0px #FF734F8A",
            }}
          >
            <div>
              <span className="bg-[#FF734F] text-white font-bold text-base rounded-lg p-2 inline-block mb-4">
                Socure
              </span>
              <h3 className="md:text-xl text-base font-bold text-white w-full max-w-[390px] mb-4">
                A predictive analytics platform for consumers digital identity
                verification
              </h3>
              <a
                href="#"
                className="bg-transparent text-white text-base border px-4 py-2 rounded-lg border-[#FF734F] uppercase"
              >
                read case study
              </a>
            </div>
          </div>
          <div className="flex flex-col">
            <img src={AccessFirst} alt="" />
          </div>
        </div>
        <div className="max-w-[70rem] text-center mx-10 mb-10">
          <img src={AccessSecond} alt="" />
        </div>
        <div className="max-w-[70rem] text-center mx-10 mb-10">
          <img src={AccessThird} alt="" />
        </div>
        <div className="max-w-[70rem] text-center mx-10 mb-10">
          <div className="flex items-center ">
            <button
              onClick={handlePrevious}
              disabled={slideIndex === 0}
              className={`text-blue-500 focus:outline-none ${
                slideIndex === 0 && "font-bold"
              }`}
            >
              <img src={LeftVector} alt="" />
            </button>
            <div className="px-16 text-center">{renderContent()}</div>
            <button
              onClick={handleNext}
              disabled={slideIndex === 1} // Adjust maximum index based on content length
              className={`text-blue-500 focus:outline-none ${
                slideIndex === 1 && "font-bold"
              }`}
            >
              <img src={RightVector} alt="" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
