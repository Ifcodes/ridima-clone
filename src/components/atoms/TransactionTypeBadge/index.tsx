import React from 'react'
import styled from 'styled-components';
import { DetailsCardWrapper } from '../../molecules/TransactionDetailsCard/styledTransactionDetailsCard'
import LeftDownArrow from '../vectors/LeftDownArrow';
import RightUpArrow from '../vectors/RightUpArrow';

export type BadgeProp = {
  transactionType?: string;
}

const BadgeWrapper = styled.div<BadgeProp>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3rem;
  height: 3rem;
  border-radius: 0.625rem;
  background-color: ${props => props.transactionType === "debit"
    ? '#FBD0D0'
    : '#D5F6E3'
  };
`
const TransactionTypeBadge = ({transactionType}: BadgeProp) => {
  return (
    <BadgeWrapper
      transactionType={transactionType}
    >
      {transactionType === "debit"
        ? <RightUpArrow />
        : <LeftDownArrow />
      }
    </BadgeWrapper>
  )
}

export default TransactionTypeBadge