import blueInk from "../../assets/casestudy/blueink.png";
import booked from "../../assets/casestudy/icon/booked.png";
import increase from "../../assets/casestudy/icon/increase.png";
import up from "../../assets/casestudy/icon/up.png";
import right from "../../assets/casestudy/icon/right.png";
const BlueInk = () => {
  return (
    <div className="bg-white">
      <div className="flex flex-row justify-between items-center w-[786px] h-[386px] bg-gradient-to-br from-violet-500 to-violet-900 rounded-lg ">
        <div className="flex flex-col justify-center items-start text-start p-3">
          <p className="text-white w-[349px] h-[120px] text-[20px] leading-[30px] font-medium">
            BlueInk increases meetings booked by 100% in a single quarter with
            Sales Engagement Automation
          </p>
          <hr className="border-t-1 border-violet-200 w-[349px] " />

          <div className="flex flex-row justify-start items-start text-start gap-5">
            <div className="flex flex-col justify-start items-start text-start">
              <img src={booked} alt="booked" className="w-[20px] h-[20px]" />
              <p className="font-normal text-white text-[13px] leading-[19px]">
                Meeting Booked
              </p>
              <div className="flex flex-row justify-center items-center gap-2">
                <div className="font-semibold text-white text-[24px] leading-[36px] flex justify-self-center">
                  100%
                </div>
                <img src={up} alt="up" className="w-2 h-[12px]" />
              </div>
            </div>

            <div className="flex flex-col justify-start items-start text-start">
              <img src={increase} alt="booked" className="w-[20px] h-[20px]" />
              <p className="font-normal text-white text-[13px] leading-[19px]">
                Increase in Open Rates
              </p>
              <div className="flex flex-row justify-center items-center gap-2">
                <div className="font-semibold text-white text-[24px] leading-[36px] flex justify-self-center">
                  97%
                </div>
                <img src={up} alt="up" className="w-2 h-[12px]" />
              </div>
            </div>
          </div>

          <div className="flex flex-row justify-center items-center gap-2 ">
            <div className="font-semibold text-blue-200 flex justify-self-center">
              READ CASE STUDY
            </div>
            <div>
              <img
                src={right}
                alt="right arrow"
                className="w-4"
                style={{ borderWidth: "1.5px" }}
              />
            </div>
          </div>
        </div>

        <img src={blueInk} alt="blueInk" className="w-[326px] h-[362px] p-2" />
      </div>
    </div>
  );
};

export default BlueInk;
