import styled, { css } from "styled-components";

const widthArea = (w) => 12 / w;
const getWidth = (width) => (100 / widthArea(width)).toString() + "%";

export const Row = styled.section`
  display: flex;
  flex-wrap: wrap;
`;

export const Col = styled.div`
  /* Bigger screen */
  ${(props) =>
    props.xl &&
    css`
      @media screen and (min-width: 991px) {
        width: ${getWidth(props.xl)};
      }
    `}
   /* tab */
    ${(props) =>
      props.lg &&
      css`
        @media only screen and (min-width: 748px) and (max-width: 990px) {
          width: ${getWidth(props.lg)};
        }
      `}

    ${(props) =>
      props.sm &&
      css`
        @media only screen and (min-width: 481px) and (max-width: 747px) {
          width: ${getWidth(props.sm)};
        }
      `}

    ${(props) =>
      props.xsm &&
      css`
        @media only screen and (min-width: 320px) and (max-width: 480px) {
          width: ${getWidth(props.xsm)};
        }
      `}

      ${(props) =>
        props.xxsm &&
        css`
          @media only screen and (max-width: 319px) {
            width: ${getWidth(props.xxsm)};
          }
        `}
`;
