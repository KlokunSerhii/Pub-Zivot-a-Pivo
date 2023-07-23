import React from "react";
import {
  Img,
  InfoDiv,
  Section,
  TexContainar,
  Text,
} from "./DishWeek.styled";
import Dist from "../../img/Dist.jpg";
function DishWeek() {
  return (
    <Section>
      <InfoDiv>
        <div>
          <Img src={Dist} alt={"foto"} />
        </div>
        <TexContainar>
          <h2>Titel</h2>
          <Text>
            Lorem, lorem, Lorem, lorem, Lorem, lorem, Lorem,
            lorem, Lorem, lorem, Lorem, lorem, Lorem, lorem,
            Lorem, lorem, Lorem, lorem, Lorem, lorem, Lorem,
            lorem, Lorem, lorem, Lorem, lorem, Lorem, lorem,
            Lorem, lorem, Lorem, lorem, Lorem, lorem, Lorem,
            lorem, Lorem, lorem, Lorem, lorem, Lorem, lorem
          </Text>
        </TexContainar>
      </InfoDiv>
    </Section>
  );
}

export default DishWeek;
