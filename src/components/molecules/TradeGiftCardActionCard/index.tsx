import React from 'react'
import SemiTriangleCard from '../../atoms/vectors/SemiTriangleCard'
import TradeGiftCardIcon from '../../atoms/vectors/TradeGiftCardIcon'
import { TradeCardWrapper } from './styledTradeCard'

const TradeGiftcardActionCard = () => {
  return (
    <TradeCardWrapper>
      <div className='card-content'>
        <h3>Trade Gift Cards</h3>
      </div>
      <img src='/vectors/SemiTriangleCard.svg' alt='' />
    </TradeCardWrapper>
  )
}

export default TradeGiftcardActionCard