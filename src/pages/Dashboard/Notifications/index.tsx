import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CircledBackground } from "../../../components/atoms/CircledBackground";
import HorizontalLinedTitle from "../../../components/atoms/TitleWithHorizontalLine";

import { H1 } from "../../../components/atoms/Typography";
import NotificationIconSecondary from "../../../components/atoms/vectors/NotificationIconSecondary";
import DashboardLayout from "../../../components/templates/MainLayout";
import {
  notificationStates,
  setUnreadNotifications,
} from "../../../Entity/NotificationsEntity";
import {
  NotificationItemCard,
  NotificationPageWrapper,
} from "./notificationsStyles";
import { useDocumentTitle } from "../../../hooks/useDocumentTitle";

const today = new Date();
const yesterday = new Date(today);

yesterday.setDate(yesterday.getDate() - 1);

const notifications = [
  {
    title: "Rates are up !!!",
    description: "You need to see the current Google Play Rate",
    pageUrl: "/trade-giftcards/check-rates",
    type: "news",
    read: false,
    date: today,
  },
  {
    title: "Withdrawal",
    description: "Guranty Trust Bank. Terry Septimus (0345689013)",
    pageUrl: "/activities",
    type: "transaction",
    transactionStatus: "Failed",
    read: false,
    date: today,
  },
  {
    title: "Fund Wallet",
    description: "Guranty Trust Bank. Terry Septimus (0345689013)",
    pageUrl: "/activities",
    type: "transaction",
    transactionStatus: "Successful",
    read: false,
    date: today,
  },
  {
    title: "Fund Wallet",
    description: "Wema Ban. Omotoyosil Lawal (2223455435)",
    pageUrl: "/activities",
    type: "transaction",
    transactionStatus: "Successful",
    read: true,
    date: yesterday,
  },
  {
    title: "Rates are up !!!",
    description: "You need to see the current Google Play Rate",
    pageUrl: "/trade-giftcards/check-rates",
    type: "news",
    read: false,
    date: yesterday,
  },
  {
    title: "Rates are up !!!",
    description: "You need to see the current Google Play Rate",
    pageUrl: "/trade-giftcards/check-rates",
    type: "news",
    read: true,
    date: yesterday,
  },
];

const Notification = () => {
  useDocumentTitle("Notifications");
  const navigate = useNavigate();
  const unreadNote = notificationStates.use().totalUnread;
  const [allNotifications, setAllNotifications] = useState(notifications);

  const filterUnread = () => {
    const notRead = allNotifications.filter((note) => note.read === false);
    setUnreadNotifications(notRead.length);
  };

  // useEffect(() => {
  //   setAllNotifications(notifications);
  //   filterUnread();
  // }, []);

  const todayNotification = allNotifications.filter(
    ({ date }) => date === today
  );

  const yesterdayNotifications = allNotifications.filter(
    ({ date }) => date === yesterday
  );

  const handleNotificationClick = (path: string, indx: number) => {
    navigate(path);
    setAllNotifications(
      notifications.map((note, index) => {
        if (indx === index && note.read === false) note.read = true;
        return note;
      })
    );
    filterUnread();
  };

  return (
    <DashboardLayout childPadding="0" mobileChildPadding="0">
      <NotificationPageWrapper>
        <div className="heading">
          <div className="title-cont">
            <H1>Notifications</H1>
            <div className="number">
              <span>{unreadNote}</span>
            </div>
          </div>
        </div>
        <div className="notification-content">
          <span className="today-date">Today 27th June, 2022</span>

          <div className="notifications-wrapper">
            <div className="current">
              {todayNotification.map((note, index) => (
                <NotificationItemCard
                  key={`${note.title}-${index}`}
                  status={note.transactionStatus || "none"}
                  isActive={note.read === false}
                  onClick={() => handleNotificationClick(note.pageUrl, index)}
                >
                  <CircledBackground
                    bgColor={note.read === false ? "#EBE9FB" : "#F8F7FE"}
                  >
                    <NotificationIconSecondary
                      bgcolor={note.read === true ? "#BDBDBD" : ""}
                    />
                  </CircledBackground>
                  <div className="text-cont">
                    <div className="title">
                      <span>{note.title}</span>
                      {note.transactionStatus && (
                        <span className="status">
                          ({note.transactionStatus})
                        </span>
                      )}
                    </div>
                    <span className="description">{note.description}</span>
                  </div>
                </NotificationItemCard>
              ))}
            </div>
            <div className="line-title">
              <HorizontalLinedTitle text="Yesterday" textColor="#828282" />
            </div>
            <div className="previous">
              {yesterdayNotifications.map((note, index) => (
                <NotificationItemCard
                  key={`${note.title}-${index}`}
                  status={note.transactionStatus || "none"}
                  isActive={note.read === false}
                  onClick={() => handleNotificationClick(note.pageUrl, index)}
                >
                  <CircledBackground
                    bgColor={note.read === false ? "#EBE9FB" : "#F8F7FE"}
                  >
                    <NotificationIconSecondary
                      bgcolor={note.read === true ? "#BDBDBD" : ""}
                    />
                  </CircledBackground>
                  <div className="text-cont">
                    <div className="title">
                      <span>{note.title}</span>
                      {note.transactionStatus && (
                        <span className="status">
                          ({note.transactionStatus})
                        </span>
                      )}
                    </div>
                    <span className="description">{note.description}</span>
                  </div>
                </NotificationItemCard>
              ))}
            </div>
          </div>
        </div>
      </NotificationPageWrapper>
    </DashboardLayout>
  );
};

export default Notification;
