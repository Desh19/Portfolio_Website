import styled from "styled-components";

export const Div = styled.div`
  width: 600px;
  height: 600px;
  position: relative;

  @media screen and (max-width: 960px) {
    width: 600px;
    height: 600px;
  }

  @media screen and (max-width: 768px) {
    width: 500px;
    height: 500px;
  }

  @media screen and (max-width: 480px) {
    width: 350px;
    height: 350px;
  }
`;