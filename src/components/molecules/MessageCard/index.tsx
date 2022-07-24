import React, { MouseEventHandler, ReactNode } from "react";
import CloseIcon from "../../atoms/CloseIcon";
import { H1, Paragraph } from "../../atoms/Typography";
import { MessageCardWrapper } from "./StyledMessageCard";

type MessageCardProp = {
  cardIcon?: ReactNode;
  title?: string;
  description?: string;
  primaryCta?: ReactNode;
  secondaryCta?: ReactNode;
  closeIcon?: boolean;
  width?: string;
  imgWidth?: string;
  height?: string;
  titleColor?: string;
  handleClick?: MouseEventHandler<HTMLDivElement>;
};

const MessageCard = ({
  cardIcon,
  title,
  description,
  primaryCta,
  secondaryCta,
  closeIcon,
  width,
  imgWidth,
  height,
  titleColor,
  handleClick,
}: MessageCardProp) => {
  return (
    <MessageCardWrapper imgWidth={imgWidth} width={width} height={height}>
      {closeIcon && (
        <div className="close-Icon" onClick={handleClick}>
          <CloseIcon />
        </div>
      )}
      <div className="msg-content">
        <div className="icon-cont">{cardIcon}</div>
        <div className="title-cont">
          <H1 color={titleColor}>{title}</H1>
          <Paragraph>{description}</Paragraph>
        </div>
      </div>
      {primaryCta && primaryCta}
      {secondaryCta && secondaryCta}
    </MessageCardWrapper>
  );
};

export default MessageCard;
