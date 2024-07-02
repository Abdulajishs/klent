import security from "../assets/security.png";
import clock from "../assets/privacy/clock.png";
import uptime from "../assets/privacy/uptime.png";
import config from "../assets/privacy/configure.png";
import manager from "../assets/privacy/manager.png";
import aicpa from "../assets/privacy/aicpa.png";
import gdpr from "../assets/privacy/gdpr.png";
const Security = () => {
  return (
    <div className="bg-gradient-to-br from-blue-700 to-blue-950 flex flex-col justify-center items-center text-center ">
      <img
        src={security}
        alt="security"
        className="h-[153px] w-[123px] mb-4 "
      />
      <p className="text-blue-600 text-[14px] leading-[21px]">
        SECURITY AND PRIVACY
      </p>
      <h2 className="text-semibold text-white text-[32px] leading-[48px] text-center w-[675px] h-[96px] ">
        Enterprise-Grade Security And Reliable Platform Uptime
      </h2>
      <p className="text-violet-400 text-[16px] leading-[24px] ">
        So you face zero lags, zero downtime and zero data concerns. Keep
        selling like clockwork.
      </p>

      <div className="flex flex-row justify-center items-center w-[1073px] h-[120px] gap-24 m-12 ">
        <div className="flex flex-col justify-center items-center text-center">
          <img src={clock} alt="clock" className=" w-[30px] h-[27px] " />
          <p className="text-white font-extrabold text-[24px] leading-[36px] ">
            2.5 min
          </p>
          <p className="text-violet-400 text-[13px] leading-[20px] ">
            Support Response Time
          </p>
        </div>

        <div className="flex flex-col justify-center items-center text-center">
          <img src={uptime} alt="uptime" className=" w-[30px] h-[23px] " />
          <p className="text-white font-extrabold text-[24px] leading-[36px] ">
            99.5%
          </p>
          <p className="text-violet-400 text-[13px] leading-[20px] ">
            Platform Uptime
          </p>
        </div>

        <div className="flex flex-col justify-center items-center text-center">
          <img src={config} alt="config" className=" w-[21px] h-[30px] " />
          <p className="text-white font-extrabold text-[24px] leading-[36px] ">
            Configurable
          </p>
          <p className="text-violet-400 text-[13px] leading-[20px] ">
            Roles and Admin Permissions
          </p>
        </div>

        <div className="flex flex-col justify-center items-center text-center">
          <img src={manager} alt="manager" className=" w-[21px] h-[30px] " />
          <p className="text-white font-extrabold text-[24px] leading-[36px] ">
            Dedicated
          </p>
          <p className="text-violet-400 text-[13px] leading-[20px] ">
            Success Manager
          </p>
        </div>

        <div>
          <img src={aicpa} alt="aicpa" className=" w-[101px] h-[101px] " />
        </div>

        <div>
          <img src={gdpr} alt="gdpr" className=" w-[101px] h-[101px] " />
        </div>
      </div>
    </div>
  );
};

export default Security;
