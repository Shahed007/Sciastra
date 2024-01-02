import { Box } from "@mui/material";
import heroVideo from "../../assets/video/rocketNew.mp4";
const Hero = () => {
  return (
    <section className="relative lg:h-screen w-full overflow-hidden">
      <video style={{ width: "100%" }} src={heroVideo} autoPlay loop muted>
        Your browser doesn't support the video tag
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>
    </section>
  );
};

export default Hero;
