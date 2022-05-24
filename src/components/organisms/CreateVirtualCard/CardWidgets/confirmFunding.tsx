import React, { MouseEventHandler } from 'react'
import Button from '../../../atoms/Buttons'
import { Paragraph } from '../../../atoms/Typography'

type ConfirmFundingProps = {
  nairaAmount?: number,
  currentExchangeRate?: number;
  setModalStage?: MouseEventHandler<HTMLButtonElement>
}
const ConfirmFunding = ({
  nairaAmount,
  currentExchangeRate,
  setModalStage = () => {},
}: ConfirmFundingProps) => {

  return (
    <>
      <div className="modal-title-cont">
        <h1 className='modal-title'>
          Confrim
        </h1>
        <Paragraph>
          You will be debited a total of <b>NGN{nairaAmount}</b> for this transaction at today’s exchange rate of <b>NGN{currentExchangeRate} ≈$1.</b> Would you like to continue?
        </Paragraph>
      </div>
      <Button 
        buttonBgType='modal'
        btnText='Proceed'
        onClick={setModalStage}
        width='350'
      /> 
    </>
  )
}

export default ConfirmFunding