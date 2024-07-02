import "./App.css";
import Brandname from "./components/Brandname";
import CaseStudies from "./components/CaseStudies";
import Conclusion from "./components/Conclusion";
import Detail from "./components/Detail";
import Explore from "./components/Explore";
import Intro from "./components/Intro";
import MultiChannel from "./components/MultiChannel";
import Navbar from "./components/Navbar";
import PartnerReviews from "./components/PartnerReviews";
import SalesMarket from "./components/SalesMarket";
import Security from "./components/Security";
import Support from "./components/Support";

function App() {
  return (
    <div className=" bg-violet-50 text-violet-900">
      <Navbar />
      <Intro />
      <Brandname />
      <Detail />
      <Explore />
      <MultiChannel />
      <SalesMarket />
      <CaseStudies />
      <Support />
      <Security />
      <PartnerReviews />
      <Conclusion />
    </div>
  );
}

export default App;
