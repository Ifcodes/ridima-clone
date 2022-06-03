import React from 'react'
import { SelectedGiftCardWrapper } from './styledSelectedGiftCard'
import Stepper from 'react-simple-stepper-component'

const SelectedGiftCardPage = () => {

  const steps = [
    {
      title: "Card"
    },
    {
      title: "Currency & Giftcard type"
    },
    {
      title: "Card Value"
    },
    {
      title: "Upload Images"
    },
  ]
  return (
    <SelectedGiftCardWrapper>
      <div className='stepper-cont'>
        <Stepper steps={steps} activeStep={1}/>
      </div>
    </SelectedGiftCardWrapper>
  )
}

export default SelectedGiftCardPage