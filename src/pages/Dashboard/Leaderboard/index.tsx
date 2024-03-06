import React, { useState } from "react";
import OtherLeaderCard from "../../../components/atoms/LeadeboardCards/otherLeaderCard";
import TopThreeCard from "../../../components/atoms/LeadeboardCards/TopThreeCard";
import PeriodSelector from "../../../components/atoms/PeriodSelector";
import HorizontalLinedTitle from "../../../components/atoms/TitleWithHorizontalLine";
import { H1, Paragraph } from "../../../components/atoms/Typography";
import StarIcon from "../../../components/atoms/vectors/StarIcon";
import TriangleDownIcon from "../../../components/atoms/vectors/TriangleDown";
import TriangleUpIcon from "../../../components/atoms/vectors/TriangleUpIcon";
import DashboardLayout from "../../../components/templates/MainLayout";
import { leadersList } from "../../../utils/helpers/leadersList";
import { LeaderBoardWrapper } from "./leaderboardStyles";
import { useDocumentTitle } from "../../../hooks/useDocumentTitle";

const Leaderboard = () => {
  useDocumentTitle("Leaderboard");

  const [selectedPeriod, setSelectedPeriod] = useState("Daily");

  const topThree = leadersList.slice(0, 4);

  const otherLeaders = leadersList.slice(3);

  const handleSelectPeriod = (period: string) => {
    setSelectedPeriod(period);
  };
  return (
    <DashboardLayout childPadding="0" mobileChildPadding="0">
      <LeaderBoardWrapper>
        <div className="heading">
          <div className="title-cont">
            <div>
              <H1>Leaderboard</H1>
            </div>
            <div className="period-wrapper">
              <PeriodSelector
                periods={["Daily", "Monthly", "Yearly"]}
                selectorPadding="0.93rem 1.5rem"
                mainPadding="0 .5rem"
                selectedPeriod={selectedPeriod}
                handleClick={handleSelectPeriod}
                selectedOption={{
                  activeBgColor: "white",
                  activeTextColor: "#7165E3",
                }}
              />
            </div>
          </div>
          <div className="leaders">
            <TopThreeCard
              position={2}
              imgUrl={topThree[1].imgUrl}
              arrowIndicator={
                topThree[1].isPositive ? (
                  <TriangleUpIcon />
                ) : (
                  <TriangleDownIcon />
                )
              }
              avatar={topThree[1].avatar}
              username={topThree[1].username}
            />
            <TopThreeCard
              isNumberOne
              imgUrl={topThree[0].imgUrl}
              arrowIndicator={<StarIcon />}
              avatar={topThree[0].avatar}
              username={topThree[0].username}
            />
            <TopThreeCard
              position={3}
              imgUrl={topThree[2].imgUrl}
              arrowIndicator={
                topThree[2].isPositive ? (
                  <TriangleUpIcon />
                ) : (
                  <TriangleDownIcon />
                )
              }
              avatar={topThree[2].avatar}
              username={topThree[2].username}
            />
          </div>
          <div className="desc">
            <span>Yesterday's Winners</span>
          </div>
        </div>
        <div className="main-content">
          <div className="line-title">
            <HorizontalLinedTitle text="Other Top Traders" />
          </div>
          <div className="other-leaders-wrapper">
            {otherLeaders.map(
              (
                { username, date, amount, avatar, imgUrl, isPositive },
                index
              ) => (
                <OtherLeaderCard
                  key={`${username}-${index}`}
                  arrowIndicator={
                    isPositive ? <TriangleUpIcon /> : <TriangleDownIcon />
                  }
                  imgUrl={imgUrl}
                  avatar={avatar}
                  amount={amount}
                  date={date}
                  username={username}
                  position={index + 4}
                />
              )
            )}
          </div>
        </div>
      </LeaderBoardWrapper>
    </DashboardLayout>
  );
};

export default Leaderboard;
