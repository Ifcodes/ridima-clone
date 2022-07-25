import React, { ReactNode } from "react";
import styled from "styled-components";

const Container = styled.div<{ height?: string; bgColor?: string }>`
  width: 10rem;
  height: ${(props) => props.height};
  background: ${(props) => props.bgColor};
  border-radius: 10px 10px 0px 0px;
  padding: 0.5rem 1rem;

  .content-cont {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .activity-bar-logo {
      svg {
        width: 80%;
      }
    }

    .number {
      width: max-content;
      height: max-content;
      padding: 0.5rem 0.8rem;
      border-radius: 10px;
      background-color: rgba(255, 255, 255, 0.1);
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      color: white;
      font-size: 1.125;
    }
  }
`;

const ActivityBar = ({
  logo,
  number,
  bgColor,
  height,
}: {
  logo?: ReactNode;
  number?: number;
  bgColor?: string;
  height?: string;
}) => {
  return (
    <Container bgColor={bgColor} height={height}>
      <div className="content-cont">
        <div className="activity-bar-logo">{logo}</div>
        <div className="number">
          <span>{number}</span>
        </div>
      </div>
    </Container>
  );
};

export default ActivityBar;
