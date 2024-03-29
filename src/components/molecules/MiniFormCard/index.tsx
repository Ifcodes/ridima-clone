import React, {
  Children,
  FormEventHandler,
  MouseEventHandler,
  ReactNode,
} from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../atoms/Buttons";
import { H1, Paragraph } from "../../atoms/Typography";
import { MiniFormCardWrapper } from "./StyledMiniCard";

type CardProps = {
  children: ReactNode;
  cardTitle?: string;
  cardTitleDescription?: string;
  btnText?: string;
  secondaryCtaText?: string;
  secondaryCtaUrl?: string;
  btnType?: "submit" | "reset" | "button";
  btnIsDisabled?: boolean;
  btnSuffix?: ReactNode;
  btnPrefix?: ReactNode;
  btnTextColor?: string;
  cardHeight?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  handleSubmit?: FormEventHandler<HTMLFormElement>;
};
const MiniFormCard = ({
  children,
  cardTitle,
  cardTitleDescription,
  btnText,
  secondaryCtaText,
  secondaryCtaUrl,
  btnType,
  btnIsDisabled,
  btnPrefix,
  btnSuffix,
  btnTextColor,
  cardHeight,
  handleClick,
  handleSubmit,
}: CardProps) => {
  const navigate = useNavigate();
  return (
    <MiniFormCardWrapper height={cardHeight}>
      <div className="title-cont">
        <H1>{cardTitle}</H1>
        <Paragraph>{cardTitleDescription}</Paragraph>
      </div>
      <form onSubmit={handleSubmit}>
        {children}

        <div className="secondary-cta">
          {secondaryCtaText && (
            <span onClick={() => navigate(`${secondaryCtaUrl}`)}>
              {secondaryCtaText}
            </span>
          )}
          <Button
            suffix={btnSuffix}
            btnPrefix={btnPrefix}
            btnText={btnText}
            btnType={btnType}
            disabled={btnIsDisabled}
            textColor={btnTextColor}
            onClick={handleClick}
            mb={"1rem"}
          />
        </div>
      </form>
    </MiniFormCardWrapper>
  );
};

export default MiniFormCard;
