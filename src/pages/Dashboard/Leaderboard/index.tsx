import React, { useState } from "react";
import PeriodSelector from "../../../components/atoms/PeriodSelector";
import HorizontalLinedTitle from "../../../components/atoms/TitleWithHorizontalLine";
import { H1, Paragraph } from "../../../components/atoms/Typography";
import DashboardLayout from "../../../components/templates/MainLayout";
import { LeaderBoardWrapper } from "./leaderboardStyles";

const Leaderboard = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("Daily");

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
    <DashboardLayout childPadding="0">
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
            {leaders.map((leader, index) => (
              <div className="leader">
                <div className="ranking"></div>
                <img src={leader} alt="" key={leader} />
              </div>
            ))}
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

export default Leaderboard;
