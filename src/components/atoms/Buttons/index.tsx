import React, {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  ReactNode,
} from "react";
import { ButtonWrapper } from "./buttonStyles";
import disabledBtn from "../../../../public/vectors/PrimaryDisabledBtn.svg";
import defaultBtn from "../../../../public/vectors/PrimaryDefaultBtn.svg";
import PrimaryButtonBg from "../vectors/PrimaryButtonBg";
import SmallButtonBg from "../vectors/SmallButtonBg";
import MediumButtonBg from "../vectors/MediumButtonBg";
import ModalButtonBg from "../vectors/ModalButtonBg";
import ReversedModalBg from "../vectors/ReversedModalBg";
import ModalButtonSm from "../vectors/ModalButtonSm";
import IconBtnBg from "../vectors/IconBtnBg";
import MobileBtnBg from "../vectors/MobileBtnBg";
import ReverseMobileBtnBg from "../vectors/ReverseMobileBtnBg";

export type ButtonProps = {
  width?: string;
  height?: string;
  disabled?: boolean;
  btnText?: string;
  mt?: string;
  mb?: string;
  suffix?: ReactNode;
  btnPrefix?: ReactNode;
  btnType?: "submit" | "reset" | "button";
  hideBg?: boolean;
  textColor?: string;
  bgColor?: string;
  menuBtn?: boolean;
  lineColor?: string;
  isPlainBtn?: boolean;
  plainBgColor?: string;
  buttonBgType?:
    | "small"
    | "medium"
    | "modal"
    | "reversedModal"
    | "modalSm"
    | "plain"
    | "mobile"
    | "mobileReverse";
  buttonPosition?: "center" | "left" | "right";
  mobileWidth?: string;
} & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const Button = ({
  width,
  disabled,
  btnText,
  btnType,
  mt,
  mb,
  suffix,
  btnPrefix,
  hideBg = false,
  textColor,
  bgColor,
  lineColor,
  buttonBgType,
  menuBtn = false,
  buttonPosition,
  isPlainBtn,
  plainBgColor,
  mobileWidth,
  onClick,
}: ButtonProps) => {
  return (
    <ButtonWrapper
      width={width}
      mobileWidth={mobileWidth}
      disabled={disabled}
      mt={mt}
      mb={mb}
      type={btnType}
      hideBg={hideBg}
      textColor={textColor}
      onClick={onClick}
      menuBtn={menuBtn}
      buttonPosition={buttonPosition}
      isPlainBtn={isPlainBtn}
      plainBgColor={plainBgColor}
    >
      <div className="text-cont">
        {btnPrefix && <span>{btnPrefix}</span>}
        <span>{btnText}</span>
        {suffix && <span>{suffix}</span>}
      </div>
      {buttonBgType === "plain" ? (
        <IconBtnBg bgColor={bgColor} />
      ) : buttonBgType === "mobile" ? (
        <MobileBtnBg
          bgColor={bgColor ? `${bgColor}` : disabled ? "#FCF2CF" : "#F5CF48"}
          className="button-Bg"
        />
      ) : buttonBgType === "mobileReverse" ? (
        <ReverseMobileBtnBg
          bgColor={bgColor ? `${bgColor}` : disabled ? "#FCF2CF" : "#F5CF48"}
          className="button-Bg"
        />
      ) : buttonBgType === "small" ? (
        <SmallButtonBg
          bgColor={bgColor ? `${bgColor}` : disabled ? "#FCF2CF" : "#F5CF48"}
          className="button-Bg"
        />
      ) : buttonBgType === "medium" ? (
        <MediumButtonBg
          bgColor={bgColor ? `${bgColor}` : disabled ? "#FCF2CF" : "#F5CF48"}
          className="button-Bg"
        />
      ) : buttonBgType === "modal" ? (
        <ModalButtonBg
          bgColor={bgColor ? `${bgColor}` : disabled ? "#FCF2CF" : "#F5CF48"}
          width={width}
        />
      ) : buttonBgType === "modalSm" ? (
        <ModalButtonSm
          bgColor={bgColor ? `${bgColor}` : disabled ? "#FCF2CF" : "#F5CF48"}
        />
      ) : buttonBgType === "reversedModal" ? (
        <ReversedModalBg
          bgColor={bgColor ? `${bgColor}` : disabled ? "#FCF2CF" : "#F5CF48"}
          lineColor={lineColor}
        />
      ) : (
        <PrimaryButtonBg
          bgColor={bgColor ? `${bgColor}` : disabled ? "#FCF2CF" : "#F5CF48"}
          className="button-Bg"
        />
      )}
    </ButtonWrapper>
  );
};

export default Button;
