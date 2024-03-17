import React from "react";
import Accordion from "./Accordion";
export default function Frequently() {
  return (
    <>
      <section className="flex items-center justify-center flex-col bg-[#F6F6F6] lg:pt-[152px] md:pt-[100px] sm:pt-[80px] pt-[70px]">
        <div className="container mx-auto text-center">
          <h2 className="font-bold md:mb-16 mb-8 xs:text-2xl md:text-5xl text-[#1D1D1B]">
            Our most{" "}
            <span className="text-[#FF734F] capitalize">frequently</span> asked
            questions
          </h2>
          <Accordion />
        </div>
      </section>
    </>
  );
}
