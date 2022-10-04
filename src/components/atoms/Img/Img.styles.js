import styled from "styled-components";
import { device } from "helpers/breakpoints";
export const StyledImgInfo = styled.div`
  background-image: ${(props) => props.url && `url(${props.url})`};
  width: 100%;
  height: 224px;
  background-size: cover;

  @media ${device.mobileL} {
    width: 100%;
    height: 300px;
    background-size: contain;
    background-repeat: no-repeat;
  }

  @media ${device.tablet} {
    width: 654px;
    height: 400px;
    background-size: cover;
    background-repeat: no-repeat;
  }
  @media ${device.laptop} {
    width: 654px;
    height: 448px;
    background-size: contain;
    background-repeat: no-repeat;
    position: relative;
  }
  @media ${device.laptopL} {
    width: 731px;
    height: 500px;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
  }

  //TODO:work at size, but url works correctly
`;

export const StyledImgCreation = styled.div`
  background-image: ${(props) => props.url && `url(${props.url})`};
  width: 100%;
  height: 150px;
  background-size: cover;
  display: flex;
  align-items: flex-end;
  margin: 10px;
  @media ${device.tablet} {
    width: 256px;
    height: 450px;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  }
  @media ${device.laptop} {
    width: 256px;
    height: 450px;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  }

  //TODO:work at size, but url works correctly
`;
