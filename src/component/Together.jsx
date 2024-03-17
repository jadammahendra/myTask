import React from "react";
import TogetherImage from "/public/together_image.png";
export default function Together() {
  return (
    <>
      <section className="flex items-center justify-center flex-col bg-[#F6F6F6] lg:pt-[152px] md:pt-[100px] sm:pt-[80px] pt-[70px]">
        <div className="max-w-[652px] container mx-auto text-center">
          <h2 className="font-bold mb-5 xs:text-2xl md:text-5xl text-[#1D1D1B]">
            Let’s <span className="text-[#FF734F] capitalize">build</span>{" "}
            something <span className="text-[#FF734F] capitalize">awesome</span>{" "}
            together!
          </h2>
          <p className="text-base font-normal text-black mb-10">
            Try us risk free for 7 days, if you don’t love us, get your money
            back.
          </p>
          <div className="mb-8">
            <button
              type="button"
              className="text-white  text-base py-4 px-2 rounded-xl uppercase font-bold w-80"
              style={{
                background:
                  "linear-gradient(91.39deg, rgba(248, 102, 66, 0.75) 18.73%, rgba(248, 102, 66, 0.9) 100%)",
              }}
            >
              Get Started
            </button>
          </div>
          <div>
            <img src={TogetherImage} alt="" />
          </div>
        </div>
      </section>
    </>
  );
}
