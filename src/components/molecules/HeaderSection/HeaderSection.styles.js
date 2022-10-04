import styled from "styled-components";
import { device } from "helpers/breakpoints";

export const StyledHeaderSection = styled.div`
  width: 100%;
  background-image: url(${(props) => props.url});
  background-repeat: no-repeat;
  background-size: cover;
  padding: 30px 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-height: 70vh;

  @media ${device.tablet} {
    padding: 50px 50px;
    min-height: 80vh;
    align-items: flex-start;
  }
  @media ${device.laptop} {
    padding: 50px 150px;
    min-height: 50vh;
  }
`;

export const StyledNav = styled.nav`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;
