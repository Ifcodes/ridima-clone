import React from 'react'
import { CardProps } from '../../../types'
import Button from '../../atoms/Buttons'
import { H1 } from '../../atoms/Typography'
import BlueCardRectangle from '../../atoms/vectors/BlueCardRectangle'
import cardRactangle from '/vectors/BlueCardRectangle.svg'
import { WalletCardWrapper } from './styledWalletBalance'

const WalletBalanceCard = ({
  title,
  value,
  btnText,
  btnColor,
  currency,
  onClick,
}: CardProps) => {
  return (
    <WalletCardWrapper>
      <div className='card-content'>
        <div>
          <span className='title'>{title}</span>
          <H1
            color='white'
            fontSize='3rem'
          >
            {value}
            <sup className='currency'>
              {currency}
            </sup>
          </H1>
        </div>
        <Button 
          width='18rem'
          buttonBgType='small'
          bgColor={btnColor || '#F5CF48'}
          btnText={btnText}
          buttonPosition='left'
          onClick={onClick}
        />
      </div>
      <img src={`${cardRactangle}`} alt='' />
    </WalletCardWrapper>
  )
}

export default WalletBalanceCard