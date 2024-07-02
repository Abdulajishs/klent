import donationPresident from "../assets/partner/donationPresident.png";
import bluePresident from "../assets/partner/bluePresident.png";
import design from "../assets/partner/design.png";
import next from "../assets/next.png";
import prev from "../assets/previous.png";
import { useEffect, useState } from "react";
const PartnerReviews = () => {
  const [activeOne, setActiveOne] = useState(true);
  const [activeSecond, setActiveSecond] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveOne(!activeOne);
      setActiveSecond(!activeSecond);
    }, 3000);
    return () => clearInterval(timer);
  });

  return (
    <div className=" flex flex-col justify-center items-center text-center m-20">
      <h2 className=" text-semibold text-[40px] leading-[60px] h-[120px] w-[904px] ">
        Rated Highly By Growing Sales Teams With Varying Use-Cases
      </h2>

      <div className="flex flex-row justify-center items-center gap-10">
        <button
          className="mt-4 mb-24"
          onClick={() => {
            setActiveOne(!activeOne);
            setActiveSecond(!activeSecond);
          }}
        >
          <img src={prev} alt="next" className="h-[48px] w-[48px] " />
        </button>
        {activeOne && (
          <div className="flex flex-row justify-center items-centers bg-violet-300  h-[420px] w-[850px]">
            <div className="flex flex-col justify-start items-start text-start p-10 ">
              <img src={design} alt="design" className="h-[58px] w-[97px] " />
              <p className="text-violet-700 text-[24px] leading-[36px] ">
                Klenty has helped us engage a far greater number of leads per
                week, resulting in an outbound revenue jump of 93%.
              </p>
              <p className="font-bold  text-[22px] leading-[33px]">
                Adam Weinger
              </p>
              <p className="font-light text-[16px] leading-[24px] ">
                President, Double The Donation{" "}
              </p>
            </div>
            <img
              src={donationPresident}
              alt="donationPresident"
              className="h-[420px] w-[390px] "
            />
          </div>
        )}

        {activeSecond && (
          <div className="flex flex-row justify-center items-centers bg-violet-300  h-[420px] w-[850px]">
            <div className="flex flex-col justify-start items-start text-start p-10 ">
              <img src={design} alt="design" className="h-[58px] w-[97px] " />
              <p className="text-violet-700 text-[24px] leading-[36px] ">
                Klenty has helped us engage a far greater number of leads per
                week, resulting in an outbound revenue jump of 93%.
              </p>
              <p className="font-bold  text-[22px] leading-[33px]">
                Adam Weinger
              </p>
              <p className="font-light text-[16px] leading-[24px] ">
                President, Double The Donation{" "}
              </p>
            </div>
            <img
              src={bluePresident}
              alt="donationPresident"
              className="h-[420px] w-[390px] "
            />
          </div>
        )}
        <button
          className="mt-4 mb-24"
          onClick={() => {
            setActiveOne(!activeOne);
            setActiveSecond(!activeSecond);
          }}
        >
          <img src={next} alt="next" className="h-[48px] w-[48px] " />
        </button>
      </div>
    </div>
  );
};
export default PartnerReviews;
