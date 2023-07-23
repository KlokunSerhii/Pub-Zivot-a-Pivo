import styled from "@emotion/styled";
import { AiOutlineInfoCircle } from "react-icons/ai";

export const Section = styled.section`
  display: flex;
  width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
`;
export const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin-top: 50px;
  margin-bottom: 50px;
`;
export const Table = styled.table`
  padding: 20px;
  background-color: rgba(211, 255, 255, 0.5);
  box-shadow: 10px 10px 8px 2px rgba(0, 0, 0, 0.7);
  border-radius: 10px;
`;

export const TableTh = styled.th`
  height: 50px;
  width: 180px;
  font-size: 20px;
`;

export const TableTd = styled.td`
  height: 40px;
  font-size: 18px;
  font-weight: 700;
`;
export const TableTdInfo = styled.td`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  height: 40px;
  font-size: 18px;
  font-weight: 700;
`;

export const TableTr = styled.tr`
  text-align: center;
`;
export const Button = styled.button`
  display: flex;
  border: none;
  background-color: transparent;
  &:hover {
    color: orange;
  }
`;
export const Svg = styled(AiOutlineInfoCircle)`
  width: 25px;
  height: 25px;
`;
