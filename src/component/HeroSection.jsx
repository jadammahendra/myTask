import React from "react";
import Check from "/public/check.svg";
import HeroImage from "/public/hero_image.png";
export default function HeroBanner() {
  return (
    <>
      <section className="hero-section  flex items-center justify-center flex-col bg-[#E0EAF3] lg:pt-[152px] md:pt-[100px] sm:pt-[80px] pt-[70px]">
        <div className="max-w-[994px] container mx-auto text-center">
          <h1 className="font-bold mb-5 xs:text-2xl md:text-5xl text-[#1D1D1B]">
            Digital transformation is our{" "}
            <span className="text-[#FF734F] capitalize">Motto </span>
            Let’s Create a Milestone{" "}
            <span className="text-[#FF734F] capitalize"> Together</span>{" "}
          </h1>
        </div>
        <div className="max-w-[994px] flex items-center justify-center gap-8 mb-5">
          <div>
            <div className="flex items-center justify-center gap-2">
              <img src={Check} alt="" />{" "}
              <span className="font-bold md:text-base text-[12px]">
                No hiring headaches
              </span>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-center gap-2">
              <img src={Check} alt="" />{" "}
              <span className="font-bold md:text-base text-[12px]">
                No hiring headaches
              </span>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-center gap-2">
              <img src={Check} alt="" />{" "}
              <span className="font-bold md:text-base text-[12px]">
                No hiring headaches
              </span>
            </div>
          </div>
        </div>
        <div>
          <button
            type="button"
            className="text-white  text-base py-4 px-2 rounded-lg uppercase font-bold"
            style={{
              background:
                "linear-gradient(91.39deg, rgba(248, 102, 66, 0.75) 18.73%, rgba(248, 102, 66, 0.9) 100%)",
            }}
          >
            start your risk free trial
          </button>
        </div>
        <div>
          <img src={HeroImage} alt="" />
        </div>
      </section>
    </>
  );
}
