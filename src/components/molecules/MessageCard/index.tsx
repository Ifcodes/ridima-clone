import React, { ReactNode } from 'react'
import { H1, Paragraph } from '../../atoms/Typography';
import { MessageCardWrapper } from './StyledMessageCard'

type MessageCardProp ={
  cardIcon?: ReactNode;
  title?: string;
  description?: string;
  primaryCta?: ReactNode;
  secondaryCta?: ReactNode;
}

const MessageCard = ({
  cardIcon,
  title,
  description,
  primaryCta,
  secondaryCta,
} : MessageCardProp) => {
  return (
    <MessageCardWrapper>
      <div className='icon-cont'>
        {cardIcon}
      </div>
      <div className='title-cont'>
        <H1>{title}</H1>
        <Paragraph>{description}</Paragraph>
      </div>
      {primaryCta && primaryCta}
      {secondaryCta && secondaryCta}
    </MessageCardWrapper>
  )
}

export default MessageCard