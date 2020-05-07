import React from "react";

// Styles
import {
  ColoredCardWrapper,
  ColoredCardUpperPart,
  ColoredCardMiddlePart,
  ColoredCardLowerPart,
} from "./styled";

const ColoredCard = ({ colorData }) => {
  const { color, year, pantone_value, name } = colorData;
  return (
    <ColoredCardWrapper color={color}>
      <ColoredCardUpperPart>{year}</ColoredCardUpperPart>
      <ColoredCardMiddlePart>
        <span>{`${name}`}</span>
        <span>{`${color}`}</span>
      </ColoredCardMiddlePart>
      <ColoredCardLowerPart>{pantone_value}</ColoredCardLowerPart>
    </ColoredCardWrapper>
  );
};

export default ColoredCard;
