import React, { MouseEventHandler, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../../components/atoms/Buttons'
import { H1, Paragraph } from '../../../components/atoms/Typography'
import Modal from '../../../components/molecules/Modal'
import PayBillsActionCard from '../../../components/molecules/PayBillsActionCard'
import ProfileStatusCard from '../../../components/molecules/ProfileStatusCard'
import TradeGiftcardActionCard from '../../../components/molecules/TradeGiftCardActionCard'
import VirtualDollarMastercard from '../../../components/molecules/VirtualDollaMastercard.tsx'
import WalletBalanceCard from '../../../components/molecules/WalletBalanceCard';
import { HomeWrapper } from './styledHomepage';
import { profileComplete } from '../../../Entity/ProfileComplete'

const DefaultHomeScreen = ({toggleActiveScreen}:{toggleActiveScreen?: MouseEventHandler<HTMLButtonElement>} ) => {
  const profileIsComplete = profileComplete.use()
  const [currentUser, setCurrentUser] = useState('Toyosil')
  const [showModal, setShowModal] = useState(false)
 
  const navigate = useNavigate()

  return (
    <HomeWrapper>
      <div className='salutation'>
        <span>Hello, </span>
        <span className='user'>{currentUser}</span>
      </div>
      <div className='statCard-wrapper'>
        <WalletBalanceCard 
          title='Naira Wallet Balance'
          value='30,500'
          btnText='Withdraw'
          currency='NGN'
        />
        {profileIsComplete
          ? <VirtualDollarMastercard 
              onClick={() => setShowModal(true)}
            />
          : <ProfileStatusCard 
              onClick={() => navigate('/bvn-authentication')}
            />
        }
      </div>
      <div className='quick-action'>
        <span>Quick actions</span>
        <hr />
      </div>
      <div className='quick-actions-cont'>
        <TradeGiftcardActionCard />
        <PayBillsActionCard />
      </div>
      <Modal
        showModal={showModal}
        closeModal={() => setShowModal(false)}
        width={'28%'}
        cardHeight={'95vh'}
      >
        <div className="modal-content">
          <div>
            <H1>
              Create a Virtual US Dollar Card
            </H1>
            <Paragraph>
              Create your new 4-digit transaction PIN. Make sure its stronger and different from the last one.
            </Paragraph>
          </div>
          <img src='/vectors/DoubleDebitCardIcon.svg' alt=''/>
          <div>
            <span className='creation-fee'>$2 creation Fee</span>
            <Button 
              buttonBgType='modal'
              btnText='Create'
              mt='0'
              mb='1.5rem'
              width={'350'}
              onClick={toggleActiveScreen}
            />
          </div>
        </div>
      </Modal>
    </HomeWrapper>
  )
}

export default DefaultHomeScreen