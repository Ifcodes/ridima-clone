import React from "react";
import ActivityBar from "../../../components/atoms/ActivityBar";
import { H1, Paragraph } from "../../../components/atoms/Typography";
import AmazonLogoTiny from "../../../components/atoms/vectors/AmazonLogoTiny";
import ItunesLogoTiny from "../../../components/atoms/vectors/ItunesLogoTiny";
import SteamLogoTiny from "../../../components/atoms/vectors/SteamLogoTiny";
import WalmartLogoTiny from "../../../components/atoms/vectors/WalmartLogoTiny";
import DashboardLayout from "../../../components/templates/MainLayout";
import { ActivitiesWrapper } from "./activitiesStyles";
import EmptyTransactionpage from "./emptyTransactionpage";
import TransactionsPage from "./transactionsPage";

const Activities = () => {
  const cards = [
    {
      icon: AmazonLogoTiny,
      number: 0,
      cardHeight: "3.875rem",
      bgColor:
        "linear-gradient(162.96deg, #F4C24F 3.01%, #F29F3A 79.55%), #F9D89F",
    },
    {
      icon: WalmartLogoTiny,
      cardHeight: "7.25rem",
      number: 0,
      bgColor:
        "linear-gradient(161.74deg, #3924CD 6.31%, #6450EF 78.38%), #D8D4F7",
    },
    {
      icon: ItunesLogoTiny,
      number: 0,
      cardHeight: "10.75rem",
      bgColor:
        "linear-gradient(99.09deg, #EB2525 11.63%, #C0742E 89.01%), #F8DAD3",
    },
    {
      icon: SteamLogoTiny,
      number: 0,
      cardHeight: "14.06rem",
      bgColor:
        "linear-gradient(338.35deg, #1A293B 23.32%, #183F5A 94.91%), #9AFED3",
    },
  ];
  return (
    <DashboardLayout childPadding="0">
      <ActivitiesWrapper>
        <div className="heading">
          <div className="title-cont">
            <H1>Activities</H1>
            <Paragraph>
              You’re frequently traded giftcards will appear here
            </Paragraph>
          </div>
          <div className="bars-cont">
            {cards.map((card, index) => (
              <div key={`card-${index}`} className="bar">
                <ActivityBar
                  logo={<card.icon />}
                  number={card.number}
                  bgColor={card.bgColor}
                  height={card.cardHeight}
                />
              </div>
            ))}
          </div>
        </div>
        {/* <EmptyTransactionpage /> */}
        <TransactionsPage />
      </ActivitiesWrapper>
    </DashboardLayout>
  );
};

export default Activities;
