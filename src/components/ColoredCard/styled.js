import styled from "styled-components";
import { motion } from "framer-motion";

export const ColoredCardWrapper = motion.custom(styled.div`
  background-color: ${(p) => p.color};
  margin: 16px;
  min-height: 210px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  box-shadow: 0 0.625rem 1.6875rem 0 rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  position: relative;
`);

export const ColoredCardPart = styled.div`
  flex-grow: 1;
`;

export const ColoredCardUpperPart = styled(ColoredCardPart)`
  align-self: flex-start;
`;

export const ColoredCardMiddlePart = styled(ColoredCardPart)`
  color: ${(p) => p.theme.color.white};
  text-align: center;

  span {
    display: block;
    font-size: 42px;
    font-weight: 800;
  }
`;

export const ColoredCardLowerPart = styled(ColoredCardPart)`
  align-self: flex-end;
`;
