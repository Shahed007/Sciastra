import Navbar from "./components/navbar/Navbar";
import AtSciAstra from "./ui/atSciAstra/AtSciAstra";
import Congratulations from "./ui/congratulations/Congratulations";
import Hero from "./ui/hero/Hero";
import MoreOption from "./ui/moreOption/MoreOption";
import Offer from "./ui/offer/Offer";
import ShorovGanguli from "./ui/shorovGanguli/ShorovGanguli";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <MoreOption></MoreOption>
      <Offer></Offer>
      <ShorovGanguli></ShorovGanguli>
      <AtSciAstra></AtSciAstra>
      <Congratulations></Congratulations>
    </>
  );
}

export default App;
