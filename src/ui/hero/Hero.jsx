import { Box } from "@mui/material";
import heroVideo from "../../assets/video/rocketNew.mp4";
const Hero = () => {
  return (
    <section style={{ height: "100vh", width: "100%", overflow: "hidden" }}>
      <video style={{ width: "100%" }} src={heroVideo} autoPlay loop>
        your browser does&apos;t support video tag
      </video>
    </section>
  );
};

export default Hero;
