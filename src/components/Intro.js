import { Button, Container, Image } from "react-bootstrap";
import introImage from "../assets/intro.png";
const Intro = () => {
  return (
    <section className="bg-gradient-to-t from-violet-100 to-gray-100 ">
      <Container className="flex flex-row justify-center items-center ">
        <div className="flex flex-col justify-evenly items-start gap-5 ">
          <h6 className="text-violet-700">
            SALES ENGAGEMENT AND INTELLIGENCE PLATFORM
          </h6>
          <h1 className="text-violet-900 font-bold">
            Find, Engage and Convert Prospects Into Pipeline
          </h1>
          <p className="text-violet-900">
            Klenty combines a B2B prospecting database, multi-channel sequences
            and AI across the sales cycle to help sales teams predictably hit
            their number.
          </p>
          <Button variant="primary">SCHEDULE A DEMO</Button>
        </div>
        <div>
          <Image src={introImage} />
        </div>
      </Container>
    </section>
  );
};
export default Intro;
