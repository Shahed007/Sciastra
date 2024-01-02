import {Container } from "@mui/material";
import heroVideo from "../../assets/video/rocketNew.mp4";
const Hero = () => {
  return (
    <section className="relative lg:h-screen w-full overflow-hidden ">
      <video style={{ width: "100%" }} src={heroVideo} autoPlay loop muted>
        Your browser doesn't support the video tag
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>
      <Container maxWidth="sm">
        <div className="absolute top-1/2 left-14  w-full h-full items-center ">
          <div className="flex items-start justify-start flex-col w-full h-full ">
            <h1 className="font-medium text-4xl  sm:text-7xl text-white">
              SciAstra
            </h1>
            <h3 className="sm:text-5xl text-xl text-white font-medium">For the love of science</h3>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
