import Adaptable from "/public/adaptable.png";
import Costs from "/public/costs.png";
import Times from "/public/times.png";
import SignFirst from "/public/sign_first.png";
import SignSecond from "/public/sign_second.png";
import SignThird from "/public/sign_third.png";
export default function Team() {
  return (
    <>
      <section className="flex items-center justify-center flex-col bg-[#F6F6F6] lg:pt-[152px] md:pt-[100px] sm:pt-[80px] pt-[70px] lg:pb-[152px] md:pb-[100px] sm:pb-[80px] pb-[70px] ">
        <div className="max-w-[994px] container mx-auto text-center">
          <h2 className="font-bold mb-5 xs:text-xl md:text-4xl text-[#1D1D1B]">
            A diverse team of{" "}
            <span className="text-[#FF734F] capitalize"> passionate</span> tech
            nerds who are here to help your{" "}
            <span className="text-[#FF734F] capitalize"> startup succeed </span>{" "}
          </h2>
          <p className="text-base font-normal text-black max-w-[840px] m-auto mb-6">
            From ideation to expansion, TDP understands the unique demands of
            your startup—providing you with optimized design strategies and fast
            turnarounds for an affordable monthly subscription.
          </p>
        </div>
        <div className="max-w-[994px] flex items-center md:flex-nowrap flex-wrap  justify-center gap-8 mb-5">
          <div>
            <div className="flex items-center justify-center flex-col gap-2 max-w-[362px] text-center">
              <img src={Costs} alt="" className="h-[80px]" />{" "}
              <span className="font-bold md:text-base text-[19px]">
                Costs 70% less
              </span>{" "}
              <span className="text-base font-normal text-black">
                We developed highly-optimized design processes to let us work
                fast and deliver incredible results—and we pass those savings on
                to you
              </span>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-center flex-col gap-2 max-w-[362px] text-center">
              <img src={Adaptable} alt="" className="h-[80px]" />{" "}
              <span className="font-bold md:text-base text-[12px]">
                Adaptable and scalable
              </span>{" "}
              <span className="text-base font-normal text-black">
                High-velocity is crucial to a startup’s success, and that’s why
                TDP delivers new designs every week so your momentum never
                falters
              </span>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-center flex-col gap-2 max-w-[362px] text-center">
              <img src={Times} alt="" className="h-[80px]" />{" "}
              <span className="font-bold md:text-base text-[12px]">
                Fast turnaround times
              </span>{" "}
              <span className="text-base font-normal text-black">
                TDP was built for flexibility—we quickly adapt and grow as you
                grow
              </span>
            </div>
          </div>
        </div>

        <div className="max-w-[994px] text-center lg:pt-[152px] md:pt-[100px] sm:pt-[80px] pt-[70px]">
          <h2 className="font-bold mb-5 xs:text-xl md:text-4xl text-[#1D1D1B]">
            How <span className="text-[#FF734F] capitalize"> signing up </span>{" "}
            with The Design Project{" "}
            <span className="text-[#FF734F] capitalize"> works </span>!?{" "}
          </h2>
          <p className="text-base font-normal text-black max-w-[840px] m-auto mb-6">
            Take a minute to imagine how you’d feel watching your user count
            grow, and retention rates stay consistently high. When you
            prioritize effective UX, better retention and growth are natural
            consequences. Backed by countless hours of research and testing, TDP
            blends UX, UI, and Product design into a deliciously smooth process
            that fuels productivity and success.
          </p>
        </div>
        <div className="max-w-[994px] flex items-center md:flex-nowrap flex-wrap justify-center gap-8 mb-5">
          <div>
            <div className="flex items-center justify-center flex-col gap-2 max-w-[362px] text-center">
              {" "}
              <span
                className="font-bold text-base md:text-2xl text-white p-2 rounded-full"
                style={{
                  background:
                    "linear-gradient(180deg, #FF734F 18.18%, #E83C11 100%)",
                }}
              >
                01
              </span>{" "}
              <span className="text-[#F86642] md:text-xl text-base font-semibold">
                Sign up for one of our services{" "}
              </span>{" "}
              <img src={SignFirst} alt="" className="h-[80px]" />{" "}
              <span className="text-base font-normal text-black">
                Sign up for one of our affordable subscription play which offer
                a variety of options to fit your unique needs.
              </span>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-center flex-col gap-2 max-w-[362px] text-center ">
              {" "}
              <span
                className="font-bold text-base md:text-2xl text-white p-2 rounded-full"
                style={{
                  background:
                    "linear-gradient(180deg, #FF734F 18.18%, #E83C11 100%)",
                }}
              >
                02
              </span>{" "}
              <span className="text-[#F86642] md:text-xl text-base font-semibold h-full max-h-24">
                Meet your perfect match{" "}
              </span>{" "}
              <img src={SignSecond} alt="" className="h-[80px]" />{" "}
              <span className="text-base font-normal text-black">
                We match you with the best TDP design expert for your needs.
                Then we schedule a call to learn about your startup.
              </span>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-center flex-col gap-2 max-w-[362px] text-center">
              {" "}
              <span
                className="font-bold text-base md:text-2xl text-white p-2 rounded-full"
                style={{
                  background:
                    "linear-gradient(180deg, #FF734F 18.18%, #E83C11 100%)",
                }}
              >
                03
              </span>{" "}
              <span className="text-[#F86642] md:text-xl text-base font-semibold">
                The first sprint begins (hold on tight)
              </span>{" "}
              <img src={SignThird} alt="" className="h-[80px]" />{" "}
              <span className="text-base font-normal text-black">
                TDP manages the project, learns the intimate details of what
                your users want, and delivers impactful design iterations.
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
