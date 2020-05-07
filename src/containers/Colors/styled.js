import styled from "styled-components";
import {motion} from "framer-motion";
import { device } from "./../../utils";

export const ColorsWrapper = styled.div`
  height: 100%;
  background-color: ${(p) => p.theme.color.bg};

  .Paginator {
    margin: 0 auto;
    position: fixed;
    bottom: 16px;
    left: 0;
    right: 0;
  }

  @media ${device.mobileL} {
    height: auto;
    padding-bottom: 78px;
  }
`;

export const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media ${device.mobileL} {
    .flex-grid {
      display: block;
    }
  }
`;

export const Col = styled.div`
  flex: 1 0 30%;
`;
