import React from "react";
import Info from "../../img/Info.jpg";
import Info2 from "../../img/Info2.jpg";
import Poster from "../../img/Poster.jpg";
import {
  Img,
  InfoDiv,
  InfoDivAfisha,
  Section,
  Text,
} from "./Hero.styled";

function Hero() {
  return (
    <Section>
      <InfoDiv>
        <div>
          <Img src={Info} alt={"foto"} />
          <Img src={Info2} alt={"foto"} />
        </div>
        <Text>
          Lorem, lorem, Lorem, lorem, Lorem, lorem, Lorem,
          lorem, Lorem, lorem, Lorem, lorem, Lorem, lorem,
          Lorem, lorem, Lorem, lorem, Lorem, lorem, Lorem,
          lorem, Lorem, lorem, Lorem, lorem, Lorem, lorem,
          Lorem, lorem, Lorem, lorem, Lorem, lorem, Lorem,
          lorem, Lorem, lorem, Lorem, lorem, Lorem, lorem
        </Text>
      </InfoDiv>
      <InfoDivAfisha>
        <div>
          <Img src={Poster} alt={"foto"} />
        </div>
        <Text>
          Lorem, lorem, Lorem, lorem, Lorem, lorem, Lorem,
          lorem, Lorem, lorem, Lorem, lorem, Lorem, lorem,
          Lorem, lorem, Lorem, lorem, Lorem, lorem, Lorem,
          lorem, Lorem, lorem, Lorem, lorem, Lorem, lorem,
          Lorem, lorem, Lorem, lorem, Lorem, lorem, Lorem,
          lorem, Lorem, lorem, Lorem, lorem, Lorem, lorem
        </Text>
      </InfoDivAfisha>
    </Section>
  );
}

export default Hero;
