import React from "react";
import Navbar from "./components/Navbar/Navbar";
import "./global.scss";
import TitileCard from "./components/TitleCard/TitileCard";

import titlecardBG1 from "./assets/images/titlecard-bg-1.png";
import titlecardBG2 from "./assets/images/titlecard-bg-2.png";
import iwatchBG from './assets/images/iWatch-bg.png';
import iwatchHeading from "./assets/images/iWatch-Heading.png";

import IWatchTitleCard from "./components/iWatchTitleCard/iWatchTitleCard";

const App = () => {
  return (
    <>
      <Navbar />
      <TitileCard
        heading="iPhone 15 Pro"
        description="
        Titanium. So strong. So light. So Pro."
        bgImage={titlecardBG1}
        bgColor="black"
        color="white"
      />
      <TitileCard
        heading="iPhone 15 Pro"
        description="
        New camera. New design. Newphoria."
        bgImage={titlecardBG2}
        bgColor="#F5F5F7"
        color="black"
      />
      <IWatchTitleCard image={iwatchBG} heading={iwatchHeading} />
    </>
  );
};

export default App;
