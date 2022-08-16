import React, { useState } from "react";
import ActivityBar from "../../../components/atoms/ActivityBar";
import PeriodSelector from "../../../components/atoms/PeriodSelector";
import { H1, Paragraph } from "../../../components/atoms/Typography";
import AmazonLogoTiny from "../../../components/atoms/vectors/AmazonLogoTiny";
import ItunesLogoTiny from "../../../components/atoms/vectors/ItunesLogoTiny";
import SteamLogoTiny from "../../../components/atoms/vectors/SteamLogoTiny";
import WalmartLogoTiny from "../../../components/atoms/vectors/WalmartLogoTiny";
import DashboardLayout from "../../../components/templates/MainLayout";
import { transactionData } from "../../../utils/helpers/transactionsData";
import { ActivitiesWrapper } from "./activitiesStyles";
import EmptyTransactionpage from "./emptyTransactionpage";
import TransactionsPage from "./transactionsPage";
import DatefilterModal from "./widgets/datefilterModal";

// const cards = [
//   {
//     icon: AmazonLogoTiny,
//     number: 3,
//     cardHeight: "3.875rem",
//     bgColor:
//       "linear-gradient(162.96deg, #F4C24F 3.01%, #F29F3A 79.55%), #F9D89F",
//   },
//   {
//     icon: WalmartLogoTiny,
//     cardHeight: "7.25rem",
//     number: 3,
//     bgColor:
//       "linear-gradient(161.74deg, #3924CD 6.31%, #6450EF 78.38%), #D8D4F7",
//   },
//   {
//     icon: ItunesLogoTiny,
//     number: 2,
//     cardHeight: "10.75rem",
//     bgColor:
//       "linear-gradient(99.09deg, #EB2525 11.63%, #C0742E 89.01%), #F8DAD3",
//   },
//   {
//     icon: SteamLogoTiny,
//     number: 1,
//     cardHeight: "14.06rem",
//     bgColor:
//       "linear-gradient(338.35deg, #1A293B 23.32%, #183F5A 94.91%), #9AFED3",
//   },
// ];
const Activities = () => {
  const [selectedCategory, setSelectedCategory] = useState("Gift Cards");

  const toggleCategory = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <DashboardLayout childPadding="0" mobileChildPadding="0">
      <ActivitiesWrapper>
        <div className="heading">
          <div className="title-cont">
            <H1>Activities</H1>
            {/* <Paragraph>
              Your frequently traded giftcards will appear here
            </Paragraph> */}
          </div>
          <div className="activity-toggle-wrapper">
            <PeriodSelector
              periods={["Gift Cards", "Bill Payments"]}
              mobileWidth="18rem"
              width="21.43rem"
              height="4.6rem"
              selectorPadding="0.93rem 1.875rem"
              mainPadding="0 1rem"
              selectedPeriod={selectedCategory}
              selectedOption={{
                activeBgColor: "#F5CF48",
                activeTextColor: "#3F1E4B",
                width: "max-content",
                height: "max-content",
              }}
              handleClick={toggleCategory}
            />
          </div>
          {/* <div className="bars-cont">
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
          </div> */}
        </div>
        {transactionData.length === 0 && <EmptyTransactionpage />}
        <TransactionsPage transactionType={selectedCategory} />
      </ActivitiesWrapper>
      <DatefilterModal />
    </DashboardLayout>
  );
};

export default Activities;
