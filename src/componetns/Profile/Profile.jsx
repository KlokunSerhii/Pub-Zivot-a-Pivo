import React from "react";
import {
  Button,
  Dislike,
  Heart,
  Img,
  InfoDiv,
  Like,
  List,
  Section,
  SvgContainer,
  Text,
  UserInfo,
} from "./Profile.styled";
import Poster3 from "../../img/poster3.jpg";

function Profile() {
  return (
    <Section>
      <UserInfo>
        <h1>Profile</h1>
        <ul>
          <li>
            <p>User: Name</p>
          </li>
          <li>
            <p>User: Email</p>
          </li>
        </ul>
      </UserInfo>
      <List>
        <InfoDiv>
          <Img src={Poster3} alt={"foto"} />
          <SvgContainer>
            <Button type="button">
              <Like />
            </Button>
            <span>0</span>
            <Button type="button">
              <Dislike />
            </Button>
            <span>0</span>
            <Button type="button">
              <Heart />
            </Button>
          </SvgContainer>
          <Text>
            Lorem ipsum dolor, sit amet consectetur.
          </Text>
        </InfoDiv>
      </List>
    </Section>
  );
}

export default Profile;
