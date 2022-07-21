import styled from "styled-components";

export const StepperWrapper = styled.div<{ isActive?: boolean }>`
  width: 100%;

  .MuiStepLabel-label {
    font-family: "cera_promedium";
  }

  .stepper-cont-mobile {
    display: none;
  }

  .stepper-cont {
    width: 100%;
  }

  @media screen and (max-width: 640px) {
    .stepper-cont {
      display: none;
    }

    .stepper-cont-mobile {
      display: block;
    }
  }
`;
