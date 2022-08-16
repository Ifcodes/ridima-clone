import React from "react";
import InfoIconFilled from "../../atoms/vectors/InfoIconFilled";
import { DisabledWraper } from "./pageMaskStyle";

const PageMask = () => {
  return (
    <DisabledWraper>
      <div className="header-container">
        <InfoIconFilled />
        <span>
          All transactions have been paused. Please wait few minutes. We’ll be
          back shortly
        </span>
      </div>
    </DisabledWraper>
  );
};

export default PageMask;
