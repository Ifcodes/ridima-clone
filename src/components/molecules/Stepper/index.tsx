import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { StepperWrapper } from "./stepperStyles";

type StepperProps = {
  steps?: Array<string>;
  toggleSteps?: Function;
  activeStep?: number;
};

export default function StepperComponent({
  steps,
  toggleSteps = () => {},
  activeStep,
}: StepperProps) {
  return (
    <StepperWrapper>
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
    </StepperWrapper>
  );
}
