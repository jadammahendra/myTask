import React from "react";
import AccordionItem from "./AccordionItem";

const Accordion = () => {
  return (
    <div>
      <div className="flex items-center flex-col bg-[#F6F6F6]">
        <div className="max-w-[994px] container mx-auto">
          <AccordionItem title="Do I really get unlimited design services?">
            <>
              {" "}
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Quisquam non pariatur deleniti voluptatibus inventore. Quaerat
                non tenetur dolorum velit quam? Beatae aliquid et veritatis quam
                explicabo fugit, optio itaque expedita.
              </p>
            </>
          </AccordionItem>
          <AccordionItem title="Another Accordion Title">
            <>
              {" "}
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Quisquam non pariatur deleniti voluptatibus inventore. Quaerat
                non tenetur dolorum velit quam? Beatae aliquid et veritatis quam
                explicabo fugit, optio itaque expedita.
              </p>
            </>
          </AccordionItem>
          <AccordionItem title="I need my designs ASAP—can you help?">
            <>
              {" "}
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Quisquam non pariatur deleniti voluptatibus inventore. Quaerat
                non tenetur dolorum velit quam? Beatae aliquid et veritatis quam
                explicabo fugit, optio itaque expedita.
              </p>
            </>
          </AccordionItem>
          <AccordionItem title="What types of projects do you work on?">
            <>
              {" "}
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Quisquam non pariatur deleniti voluptatibus inventore. Quaerat
                non tenetur dolorum velit quam? Beatae aliquid et veritatis quam
                explicabo fugit, optio itaque expedita.
              </p>
            </>
          </AccordionItem>
          <AccordionItem title="What if I want to cancel my service?">
            <>
              {" "}
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Quisquam non pariatur deleniti voluptatibus inventore. Quaerat
                non tenetur dolorum velit quam? Beatae aliquid et veritatis quam
                explicabo fugit, optio itaque expedita.
              </p>
            </>
          </AccordionItem>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
