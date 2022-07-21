import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { StepperWrapper } from "./stepperStyles";

type StepperProps = {
  steps?: Array<string>;
  mobileSteps?: Array<string>;
  toggleSteps?: Function;
  activeStep?: number;
};

export default function StepperComponent({
  steps,
  mobileSteps,
  toggleSteps = () => {},
  activeStep,
}: StepperProps) {
  return (
    <StepperWrapper>
      <div className="stepper-cont">
        <Box sx={{ width: "100%" }}>
          <Stepper activeStep={activeStep}>
            {steps &&
              steps.map((label, index) => (
                <Step key={label || index}>
                  <StepLabel onClick={() => toggleSteps(label)}>
                    {label}
                  </StepLabel>
                </Step>
              ))}
          </Stepper>
        </Box>
      </div>
      <div className="stepper-cont-mobile">
        <Box sx={{ width: "100%" }}>
          <Stepper activeStep={activeStep}>
            {mobileSteps &&
              mobileSteps.map((label, index) => (
                <Step key={label || index}>
                  <StepLabel onClick={() => toggleSteps("mobile", index)}>
                    {label}
                  </StepLabel>
                </Step>
              ))}
          </Stepper>
        </Box>
      </div>
    </StepperWrapper>
  );
}
