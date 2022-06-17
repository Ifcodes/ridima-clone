import React from "react";
import styled from "styled-components";
import CopyIcon from "../vectors/CopyIcon";
import CopyIconLg from "../vectors/CopyIconLg";
import TelephoneIconOutline from "../vectors/TelephoneIconOutline";

const Container = styled.div`
  width: 100%;
  height: 8rem;
  display: flex;
  padding: 1rem 2rem;
  flex-direction: column;
  justify-content: center;
  background-color: #f6f6f6;
  border: 1px solid rgba(63, 30, 75, 0.1);
  border-radius: 0.625rem;

  .title {
    color: ${(props) => props.theme.colors.deepPurple};
    font-size: 0.875rem;
  }
  .code-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0.5rem 0;

    .icons-wrapper {
      width: max-content;
      display: flex;
      align-items: center;

      svg {
        margin-left: 1.5rem;
      }
    }
    span {
      color: ${(props) => props.theme.colors.deepPurple};
      font-weight: 500;
      font-size: 1.125rem;
    }
  }
`;

const SelectedBankUssdCard = ({ code }: { code?: string }) => {
  return (
    <Container>
      <span className="title">Your USSD Code</span>
      <div className="code-wrapper">
        <span>{code}</span>
        <div className="icons-wrapper">
          <TelephoneIconOutline />
          <CopyIconLg />
        </div>
      </div>
    </Container>
  );
};

export default SelectedBankUssdCard;
