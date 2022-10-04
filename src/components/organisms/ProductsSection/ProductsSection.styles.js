import styled from "styled-components";
import { device } from "helpers/breakpoints";

export const ProductSection = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  padding: 30px 25px;

  @media ${device.tablet} {
    padding: 50px 50px;
  }
  @media ${device.laptop} {
    padding: 50px 150px;
    min-height: 50vh;
  }
`;
export const StyledSection = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`;
