import React from 'react'
import TransactionTypeBadge from '../../atoms/TransactionTypeBadge'
import { DetailsCardWrapper } from './styledTransactionDetailsCard'

type TransactionDetailsProps = {
  transactionType?: string,
  title?: string,
  amount?: number,
  currencySymbol?: string,
  transactionDate?: string,
  transactionTime?: string,
}

const TransactionDetailsCard = ({
  transactionType,
  title,
  amount,
  currencySymbol,
  transactionDate,
  transactionTime
}:TransactionDetailsProps) => {
  return (
    <DetailsCardWrapper>
      <div className="icon-title-cont">
        <TransactionTypeBadge transactionType={transactionType} />
        <div className='title-cont'>
          <p>{title}</p>
          <span className='time'>{transactionDate}, {transactionTime}</span>
        </div>
      </div>
      <span className='amount'>
        {transactionType === "debit" ? "-" : "+"}
        {currencySymbol}{amount}
      </span>
    </DetailsCardWrapper>
  )
}

export default TransactionDetailsCard