import exploreImg from "../assets/explore.png";
const Explore = () => {
  return (
    <div className="flex flex-col justify-center items-center my-10 container">
      <h2 className="font-bold  text-[46px] leading-[69px] text-center my-40 w-[1071px]">
        Unique Klenty Capabilities That Drive Pipeline
      </h2>
      <p className="font-semibold text-blue-600 text-[14px] leading-[21px] ">
        B2B PROSPECTING DATA
      </p>
      <h3 className="font-bold">
        Conquer Your Market With Verified, Accurate Contact Data
      </h3>
      <p className="w-[774px] leading-[24px] text-center">
        Klenty swiftly searches through 10+ data providers in a Waterfall
        Enrichment Model and gives you the most precise emails, direct dial
        numbers and account insights.
      </p>
      <button className=" px-5 py-3 bg-blue-800 text-white rounded-lg shadow-lg">
        EXPLORE PROSPECTING DATA
      </button>
      <img src={exploreImg} alt="explore" className="w-[1040px]" />
    </div>
  );
};

export default Explore;
