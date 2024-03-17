import Combinator from "/public/combinator.png";
import Sequioia from "/public/sequioia.png";
import Aceel from "/public/accel.png";
import ALogo from "/public/a1_logo.png";
export default function Helped() {
  return (
    <>
      <section className="flex items-center justify-center flex-col bg-[#292526] py-[79px]">
        <div className="container mx-auto text-center mb-12">
          <h2 className="text-xl xs:text-2xl md:text-4xl text-white font-bold">
            We helped our customers raise{" "}
            <span className="text-[#FF734F]">$1B+</span>{" "}
          </h2>
        </div>
        <div className="max-w-[994px] flex items-center justify-center gap-8 mb-5">
          <div className="flex items-center justify-center gap-2 pr-4 border-r-[1px] border-[#FF734F]">
            <img src={Combinator} alt="" />{" "}
          </div>

          <div className="flex items-center justify-center gap-2 pr-4 border-r-[1px] border-[#FF734F]">
            <img src={Sequioia} alt="" />{" "}
          </div>
          <div className="flex items-center justify-center gap-2 pr-4 border-r-[1px] border-[#FF734F]">
            <img src={Aceel} alt="" />{" "}
          </div>
          <div className="flex items-center justify-center gap-2">
            <img src={ALogo} alt="" />{" "}
          </div>
        </div>
      </section>
    </>
  );
}
