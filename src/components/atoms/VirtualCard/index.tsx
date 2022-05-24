import React from 'react'
import { VirtualCardWrapper } from './virtualCardStyles'

type CardDesignsProps = {
  cardBgColor: string,
  cardName?: string,
  cardFund?: string,
  cardOwnerName?: string,
  cardNumber?: string,
  cardExpiry?: string,
  isActive?: boolean,
}

const VirtualCard = ({
  cardBgColor,
  cardName,
  cardFund,
  cardOwnerName,
  cardNumber,
  cardExpiry,
  isActive,
} : CardDesignsProps) => {
  return (
    <VirtualCardWrapper
      cardBg={cardBgColor}
      isActive={isActive}
    >
      <div className="card-content">
        <div className="card-name-cont">
          <span className='card-name'>{cardName}</span>
          <span className='fund'>
            {cardFund === ''
              ? '$0.00'
              : cardFund
            }
          </span>
        </div>
        <div className="card-user-name">
          <span className='description'>Name on card</span>
          <span className='owner-name'>{cardOwnerName}</span>
          <span className='card-number'>    {cardNumber === ''
            ? '**** **** **** ****'
            : cardNumber
          }
          </span>
        </div>
        <div className='card-exp-cont'>
          <span className='exp-title'>Valid till: </span>
          <span className='card-exp'>{cardExpiry}</span>
        </div>
      </div>
      {cardBgColor === "blue" && 
        <img src='/vectors/BlueDebitCard.svg' alt='' />
      }
      {cardBgColor === "yellow" && 
        <img src='/vectors/YellowDebitCard.svg' alt='' />
      }
      {cardBgColor === "grey" && 
        <img src='/vectors/GreyDebitCard.svg' alt='' />
      }
    </VirtualCardWrapper>
  )
}

export default VirtualCard