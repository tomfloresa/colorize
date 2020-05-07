import styled from "styled-components";
import { device } from "./../../utils";

import { Card } from "bighouse-ui-kit";
import { Paginator } from "./../../components";

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

export const ColoredCard = styled(Card)`
  background-color: ${(p) => p.color};
  margin: 16px;
  min-height: 210px;
  cursor: pointer;
`;
