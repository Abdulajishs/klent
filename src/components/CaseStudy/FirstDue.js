import firstDue from "../../assets/casestudy/firstdue.png";
import booked from "../../assets/casestudy/icon/booked.png";
import up from "../../assets/casestudy/icon/up.png";
import right from "../../assets/casestudy/icon/right.png";
const FirstDue = () => {
  return (
    <div className="bg-white">
      <div className="flex flex-row justify-between items-center w-[786px] h-[386px] bg-gradient-to-br from-violet-500 to-violet-900 rounded-lg ">
        <div className="flex flex-col justify-center items-start text-start p-3">
          <p className="text-white w-[349px] h-[120px] text-[20px] leading-[30px] font-medium">
            How First Due SDRs Booked 233% More Meetings
          </p>
          <hr className="border-t-1 border-violet-200 w-[349px] " />

          <div className="flex flex-row justify-start items-start text-start gap-5">
            <div className="flex flex-col justify-start items-start text-start">
              <img src={booked} alt="booked" className="w-[20px] h-[20px]" />
              <p className="font-normal text-white text-[13px] leading-[19px]">
                Booked Meetings
              </p>
              <div className="flex flex-row justify-center items-center gap-2">
                <div className="font-semibold text-white text-[24px] leading-[36px] flex justify-self-center">
                  200%
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

        <img src={firstDue} alt="gti" className="w-[326px] h-[362px] p-2" />
      </div>
    </div>
  );
};

export default FirstDue;
