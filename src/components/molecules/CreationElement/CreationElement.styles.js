import styled from "styled-components";
import { device } from "helpers/breakpoints";
export const StyledCreationElement = styled.div`
  width: 100%;
  position: relative;

  @media ${device.tablet} {
    width: 40%;
    border: 2px solid pink;
  }
  @media ${device.laptop} {
    width: 30%;
  }
`;
