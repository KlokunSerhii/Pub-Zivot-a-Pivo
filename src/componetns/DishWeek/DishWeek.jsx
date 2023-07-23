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
            Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Temporibus nobis ipsum
            facilis, quaerat, debitis laudantium,
            consectetur voluptas officia voluptates ducimus
            exercitationem aspernatur facere eos nemo!
            Consectetur harum ratione esse ut.
          </Text>
        </TexContainar>
      </InfoDiv>
    </Section>
  );
}

export default DishWeek;
