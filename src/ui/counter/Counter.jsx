import { Container } from "@mui/material";
import CountUp from "react-countup";

const Counter = () => {
  return (
    <section className="my-20 py-8 bg-gradient-to-l from-[#A355DC] to-[#344FB6]">
      <Container maxWidth="lg">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white">
              <CountUp duration={10} start={0} end={30} />M <span className="ml-1">+</span>
            </h2>
            <h4 className="text-base font-medium text-white text-center">
              views
            </h4>
          </div>
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white">
              <CountUp duration={10} start={0} end={100000} /> <span className="ml-1">+</span>
            </h2>
            <h4 className="text-base font-medium text-white text-center">
              Community
            </h4>
          </div>
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white">
              <CountUp duration={10} start={0} end={10000} /> <span className="ml-1">+</span>
            </h2>
            <h4 className="text-base font-medium text-white text-center">
              Student taught
            </h4>
          </div>
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white">
              <CountUp duration={10} start={0} end={1000} /> <span className="ml-1">+</span>
            </h2>
            <h4 className="text-base font-medium text-white text-center">
              Selections
            </h4>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Counter;
