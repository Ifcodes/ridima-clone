import React from 'react'
import Button from '../../../atoms/Buttons'
import { Paragraph } from '../../../atoms/Typography'
import MessageCard from '../../../molecules/MessageCard'

const PinVerificationSuccess = () => {
  return (
    <>
      <div className="success-title-cont">
        <img src='/vectors/SuccessMessageIconGreen2.svg' alt='' className='illustration' />
        <h1 className='success-msg-title'>
          Super Smoooth!
        </h1>
        <Paragraph>
          You’ve successfully created your virtual US Dollar card. You can start paying online.
        </Paragraph>
      </div>
      <div>
        <Button 
          buttonBgType='modal'
          btnText='Go to virtual card'
          width='350'
        />
      </div>
    </>
  )
}

export default PinVerificationSuccess