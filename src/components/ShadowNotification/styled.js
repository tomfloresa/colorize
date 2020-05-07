import styled from "styled-components";
import { transparentize } from "polished";
import { motion } from "framer-motion";

export const ShadowNotificationWrapper = motion.custom(styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 180px;
  height: 180px;
  z-index: 20;
  background: ${transparentize(0.1, "#040507")};
  border-radius: 25px;
  padding: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
`);

export const ShadowNotificationText = styled.span`
  color: ${(p) => p.theme.color.white};
  font-weight: 800;
  text-align: center;
  font-size: 32px;
`;
