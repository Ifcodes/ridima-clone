import React from "react";
import { notificationStates } from "../../Entity/NotificationsEntity";
import { CircledBackground } from "./CircledBackground";

const TotalUnreadNotificationSuffix = ({
  isActive,
}: {
  isActive?: boolean;
}) => {
  const totalUnreadNotification = notificationStates.use().totalUnread;

  return (
    <CircledBackground
      bgColor={isActive ? "white" : "#E81313"}
      textColor={isActive ? "#E81313" : "white"}
      width="2rem"
      height="2rem"
    >
      {totalUnreadNotification}
    </CircledBackground>
  );
};

export default TotalUnreadNotificationSuffix;
