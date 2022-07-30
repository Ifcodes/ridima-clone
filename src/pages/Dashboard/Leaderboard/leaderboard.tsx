import React, { useState } from "react";
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

const LeaderboardMain = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("Daily");

  const topThree = leadersList.slice(0, 4);

  const leaders = [
    "/vectors/LeaderboardHeadingImg2.svg",
    "/vectors/CenterLeaderBoardImg.svg",
    "/vectors/LeaderboardHeadingImg3.svg",
  ];

  const otherLeaders = [
    "/vectors/leader4.svg",
    "/vectors/Leader5.svg",
    "/vectors/Leader6.svg",
    "/vectors/Leader7.svg",
    "/vectors/leader8.svg",
  ];

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
              <Paragraph>Monitor user level with ridima</Paragraph>
            </div>
            <PeriodSelector
              selectedPeriod={selectedPeriod}
              handleClick={handleSelectPeriod}
            />
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
              amount={topThree[1].amount}
              username={topThree[1].username}
            />
            <TopThreeCard
              isNumberOne
              imgUrl={topThree[0].imgUrl}
              arrowIndicator={<StarIcon />}
              avatar={topThree[0].avatar}
              amount={topThree[0].amount}
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
              amount={topThree[2].amount}
              username={topThree[2].username}
            />
          </div>
        </div>
        <div className="main-content">
          <div className="line-title">
            <HorizontalLinedTitle text="Other Top Traders" />
          </div>
          {otherLeaders.map((leader, index) => (
            <div className="other-leader" key={leader}>
              <img src={leader} alt="" />
            </div>
          ))}
        </div>
      </LeaderBoardWrapper>
    </DashboardLayout>
  );
};

export default LeaderboardMain;
