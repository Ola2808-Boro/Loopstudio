import styled from "styled-components";
import { device } from "helpers/breakpoints";
export const StyledCreations = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 30px 25px;
  width: 100%;

  @media ${device.tablet} {
    padding: 50px 50px;
  }
  @media ${device.laptop} {
    padding: 50px 150px;
  }
`;
export const StyledSectionImg = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-around;

  @media ${device.tablet} {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-around;
  }
  @media ${device.laptop} {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-around;
  }
`;
