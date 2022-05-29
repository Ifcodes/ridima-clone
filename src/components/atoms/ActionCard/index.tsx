import React, { DetailedHTMLProps, HTMLAttributes, MouseEventHandler, ReactNode } from 'react'
import { ActionCardWrapper } from './styledActionCard'

export type ActionCardProps = {
  cardBg?: string;
  cardIcon?: ReactNode;
  cardTitle?: string;
  actionCardBg?: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

const ActionCard = (props: ActionCardProps) => {
  return (
    <ActionCardWrapper
      actionCardBg={props.cardBg}
      onClick={props.onClick}
    >
      {props.cardIcon}
      <p>{props.cardTitle}</p>
    </ActionCardWrapper>
  )
}

export default ActionCard