import React, { MouseEventHandler } from "react";
import TickIcon from "../../atoms/vectors/TickIcon";
import { StepperWrapper, StepWrapper } from "./stepperStyles";
export type StepperProps = {
  steps?: Array<string>;
  currentStep?: number;
  previousStep?: number;
  defaultTitle?: string;
  isDone?: boolean;
  isActive?: boolean;
  defaultIsActive?: boolean;
  onClick?: Function;
};
const Stepper = ({
  steps = [],
  currentStep = 0,
  previousStep = 0,
  defaultIsActive,
  defaultTitle,
  onClick = () => {},
}: StepperProps) => {
  return (
    <StepperWrapper>
      <StepWrapper isActive={defaultIsActive || true} isDone={true}>
        <div className="circle-cont">
          <div className="circle">
            <TickIcon />
          </div>
          {/* <span className="stage-title">{defaultTitle}</span> */}
        </div>
        <hr />
      </StepWrapper>
      {steps.map((step, index) => (
        <StepWrapper
          key={`step-${index}`}
          isActive={currentStep === index}
          isDone={previousStep === index}
          onClick={() => onClick(index)}
        >
          <div className="circle-cont">
            <div className="circle">
              <TickIcon />
            </div>
            {/* <span className="stage-title">{step}</span> */}
          </div>
          <hr />
        </StepWrapper>
      ))}
    </StepperWrapper>
  );
};

export default Stepper;
