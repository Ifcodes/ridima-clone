import React, { MouseEventHandler } from 'react'
import { CardProps } from '../../../types'
import Button from '../../atoms/Buttons'
import MasterCardLogo from '../../atoms/vectors/MasterCardLogo'
import { VirtualDollarCardWrapper } from './styledCard'

const VirtualDollarMastercard = ({
  onClick
}: CardProps) => {
  return (
    <VirtualDollarCardWrapper>
      <div className='card-content'>
        <div>
          <div className='title-cont'>
            <h3 className='title'>
              Virtual US Dollar Mastercard
            </h3>
            <MasterCardLogo />
          </div>
          <span className='description'>
            $2 Creation Fee
          </span>
        </div>
        <Button 
          width='18rem'
          buttonBgType='small'
          bgColor='#3F1E4B'
          textColor='white'
          btnText='Create card'
          buttonPosition='left'
          onClick={onClick}
        />
      </div>

      <img src='/vectors/YellowCardRectangle.svg' alt='' />
    </VirtualDollarCardWrapper>
  )
}

export default VirtualDollarMastercard