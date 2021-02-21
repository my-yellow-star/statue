import './App.css';
import Intro from "./Presentational/intro";
import AboutMe from "./Presentational/aboutMe";
import Skills from "./Presentational/skills";
import Hankki from "./Component/Hankki";
import Damdam from "./Component/Damdam";
import Chikachika from "./Component/Chikachika";
import Chikachika2 from "./Component/Chikachika2";
import Chikachika3 from "./Component/Chikachika3";
import Hackathon from "./Component/Hackathon";
import Footprint from "./Component/footprint";
import More from "./Presentational/More";

function App() {
  return (
    <>
      <Intro/>
      <AboutMe/>
      <Skills/>
      <Hankki/>
      <Footprint/>
      <Damdam/>
      <Chikachika/>
      <Chikachika2/>
      <Chikachika3/>
      <Hackathon/>
      <More/>
    </>
  );
}

export default App;
