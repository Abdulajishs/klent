import { useEffect, useState } from "react";
import BlueInk from "./CaseStudy/BlueInk";
import DoubleDonation from "./CaseStudy/DoubleDonation";
import FirstDue from "./CaseStudy/FirstDue";
import Gti from "./CaseStudy/Gti";
import Plauti from "./CaseStudy/Plauti";
import prev from "../assets/previous.png";
import next from "../assets/next.png";

const components = [BlueInk, DoubleDonation, FirstDue, Gti, Plauti];

const CaseStudies = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % components.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const ActiveComponent = components[activeIndex];

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % components.length);
  };

  const handlePrev = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + components.length) % components.length
    );
  };

  return (
    <div className="flex flex-row justify-center items-center gap-10 m-10">
      <button className="mt-4 mb-24" onClick={handlePrev}>
        <img src={prev} alt="prev" className="h-[48px] w-[48px]" />
      </button>
      <ActiveComponent />
      <button className="mt-4 mb-24" onClick={handleNext}>
        <img src={next} alt="next" className="h-[48px] w-[48px]" />
      </button>
    </div>
  );
};

export default CaseStudies;
