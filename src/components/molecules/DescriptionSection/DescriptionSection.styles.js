import styled from "styled-components";
import { device } from "helpers/breakpoints";

export const StyledDescriptionSection = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 30px 25px;
  position: relative;

  @media ${device.tablet} {
    padding: 50px 50px;
  }

  @media ${device.laptopL} {
    flex-direction: row;
  }
  @media ${device.laptop} {
    padding: 50px 150px;
    min-height: 50vh;
  }
`;

export const StyledTextSection = styled.div`
  @media ${device.laptopL} {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 30px 25px;
    width: 35%;

    position: absolute;
    background-color: white;
    left: 40%;
    bottom: 25px;
  }
`;
