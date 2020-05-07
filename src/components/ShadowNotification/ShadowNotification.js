import React from "react";
import { AnimatePresence } from "framer-motion";

// Styles
import { ShadowNotificationWrapper, ShadowNotificationText } from "./styled";

const ShadowNotification = ({ isActive, text }) => {
  return (
    <AnimatePresence>
      {isActive && (
        <ShadowNotificationWrapper
          key="ShadowNotification"
          initial={{ opacity: 0, scale: 0.0 }}
          animate={{ opacity: 1, scale: 1.5 }}
          exit={{ opacity: 0, scale: 0.0 }}
        >
          <ShadowNotificationText>{text}</ShadowNotificationText>
        </ShadowNotificationWrapper>
      )}
    </AnimatePresence>
  );
};

export default ShadowNotification;
