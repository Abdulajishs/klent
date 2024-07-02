import contact from "../assets/support/contact.png";
import handheld from "../assets/support/handheld.png";
import migration from "../assets/support/migration.png";

const Support = () => {
  return (
    <div className="bg-blue-900 flex flex-col justify-center items-center text-center">
      <p className="font-semibold text-blue-600 text-[14px] leading-[21px] mt-24">
        SUPPORT AND ONBOARDING
      </p>
      <h2 className="font-semibold text-white text-[32px] leading-[48px] text-center w-[633px] h-[96px] ">
        Not Just a Software. A True Partner In Your Sales Success.
      </h2>

      <div className="flex flex-row justify-center items-center w-[984px] h-[96px] my-5  gap-5">
        <div className="flex flex-row justify-center items-center gap-3 bg-blue-700 p-4 w-[312px] h-[96px] rounded-lg">
          <img src={contact} alt="contact" className="w-[64px] h-[64px]" />
          <p className="text-white text-start text-[14px] leading-[21px] ">
            Free, 24/7 support across email, chat and phone
          </p>
        </div>
        <div className="flex flex-row justify-center items-center gap-3 bg-blue-700 p-4 w-[312px] h-[96px] rounded-lg">
          <img src={handheld} alt="handheld " className="w-[64px] h-[64px]" />
          <p className="text-white text-start text-[14px] leading-[21px]">
            Hand-held onboarding and product workshops
          </p>
        </div>
        <div className="flex flex-row justify-center items-center gap-3 bg-blue-700 p-4 w-[312px] h-[96px] rounded-lg">
          <img src={migration} alt="contact" className="w-[64px] h-[64px]" />
          <p className="text-white text-start text-[14px] leading-[21px]">
            Free white-gove migration
          </p>
        </div>
      </div>
    </div>
  );
};
export default Support;
