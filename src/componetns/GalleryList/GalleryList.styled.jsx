import styled from "@emotion/styled";

export const Section = styled.section`
  display: flex;
  width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
  justify-content: center;
`;
export const List = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-top: 50px;
  margin-bottom: 50px;
`;
export const InfoDiv = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(211, 255, 255, 0.5);
  border-radius: 10px;
`;
export const Img = styled.img`
  width: 350px;
  margin: 15px;
  border-radius: 10px;
  box-shadow: 10px 10px 8px 2px rgba(0, 0, 0, 0.7);
`;
export const Text = styled.p`
  width: 300px;
  text-align: center;
  color: #0f0f0f;
  font-weight: 700;
  font-size: 18px;
`;
