import React, { FormEvent, useEffect, useState } from 'react'
import { generateId } from '../../../utils/generateId'
import Button from '../../atoms/Buttons'
import Input from '../../atoms/Forms/Input'
import { Paragraph } from '../../atoms/Typography'
import VirtualCard from '../../atoms/VirtualCard'
import Modal from '../../molecules/Modal'
import ConfirmFunding from './CardWidgets/confirmFunding'
import PinVerification from './CardWidgets/PinVerification'
import PinVerificationSuccess from './CardWidgets/PinVerificationSuccess'
import { FundYourCardWrapper } from './createVirtualCardStyles'

const FundYourCard = ({
  selectedCard
}:{
  selectedCard: string;
}) => {
  const [fundAmount, setFundAmount] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [pin, setPin] = useState('')
  const [currentExchangeRate] = useState(550)
  const [userDetails, setUserDetails] = useState({
    profileImage: '',
    userName: 'Toyosil',
  })
  const [modalStage, setModalStage] = useState(0)
  const nairaAmount = currentExchangeRate * Number(fundAmount)

  const handlePinChange = (val: string) => {
    setPin(val)
  }

  useEffect(() => {
    if(pin.length === 4){
      setModalStage(modalStage + 1)
      console.log(pin)
    }
  }, [pin])

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setShowModal(true)
  }

  return (
    <FundYourCardWrapper>
      <div className='form-cont'>
        <h1>
          Fund your Card
        </h1>
        <Paragraph>
          You will be charged <b>(USD2) NGN1100</b> to create your virtual dollar card.
        </Paragraph>
        <form onSubmit={handleFormSubmit}>
          <Input 
            id={generateId()}
            placeholder='0'
            symbol='$'
            value={fundAmount}
            onChange={(e) => setFundAmount(e.target.value)}
          />
          <div className='exchange-rate-text'>
            <span>NGN{currentExchangeRate} ≈ $1</span>
          </div>
          <Button 
            disabled={!fundAmount}
            btnText='Proceed'
            mt='4.5rem'
          />
        </form>
      </div>
      <div className='virtual-card-cont'>
        <VirtualCard 
          cardBgColor={selectedCard}
          cardName='Hetikal'
          cardFund=''
          cardOwnerName='Lawal Omotoyosi'
          cardNumber=''
          cardExpiry='01/02'
        />
      </div>
      <Modal
        width='30%'
        cardHeight='95vh'
        showModal={showModal}
        showCloseBtn
        closeModal={() => setShowModal(false)}
      >
        <div className="modal-content">
          {modalStage === 1
            ? <PinVerification 
                imgUrl={userDetails.profileImage}
                user={userDetails.userName}
                handlePinInput={(val: string) => handlePinChange(val)}
                pin={pin}
              />
            : modalStage === 2
            ? <PinVerificationSuccess />
            : <ConfirmFunding 
                nairaAmount={nairaAmount}
                currentExchangeRate={currentExchangeRate}
                setModalStage={() => setModalStage(modalStage + 1)}
              />
          }
        </div>
      </Modal>
    </FundYourCardWrapper>
  )
}

export default FundYourCard