import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ActionCard from '../../../components/atoms/ActionCard'
import { H1 } from '../../../components/atoms/Typography'
import TransactionDetailsCard from '../../../components/molecules/TransactionDetailsCard'
import VirtualCard from '../../../components/molecules/VirtualCard'
import { StageTitleWrapper } from '../../../components/organisms/CreateVirtualCard/createVirtualCardStyles'
import DashboardLayout from '../../../components/templates/MainLayout'
import { setProfileComplete } from '../../../Entity/ProfileComplete'
import { selectedVirtualCardData, setSelectedVirtualCardData } from '../../../Entity/SelectedVirtualCardData'
import { cardDataProps } from '../../../types'
import { cardActions } from '../../../utils/helpers/cardActions.'
import { cardDataList } from '../../../utils/helpers/cardsData'
import FundActiveCard from './FundActiveCard'
import { CardDetailsWrapper } from './styledVirtualCards'
import Withdraw from './withdraw'

const CardDetails = () => {
  const navigate = useNavigate()
  const cardData = selectedVirtualCardData.use()
  const params = useParams()
  console.log("params:", params)
  const [activeAction, setActiveAction] = useState('')
  const [tabs, setTabs] = useState([
    "Virtual cards",
  ])
  const [activeTab, setActiveTab] = useState(0)
  const [list] = useState(cardDataList)  

  useEffect(() => {
    const selectedCard = list.find((card) => card.id === params.id) as cardDataProps
    setSelectedVirtualCardData(selectedCard)
    setTabs(tabs.concat(selectedCard.cardName))
    setActiveTab(activeTab + 1)
  }, [])
  
  const toggleActiveScreen = () => {
    navigate('/home')
    setProfileComplete(true)
  }

  const handleTabClick = (type: string, index: number) => {
    if(type === "Virtual cards"){
      navigate('/virtual-cards')
    }else{
      setTabs(tabs.slice(0, index + 1))
      setActiveAction('')
      setActiveTab(activeTab - 1)
    }
    return
  }

  const handleActionClick = (actionType: string) => {
    setActiveAction(actionType)
    setTabs(tabs.concat(actionType))
    setActiveTab(activeTab + 1)
  }

  return (
    <DashboardLayout>
      <CardDetailsWrapper>
        <div className="stage-title-cont">
          <span 
            className='home'
            onClick={() => toggleActiveScreen()}
          >
            Home
          </span>
          {tabs.map((tab, index) => (
            <StageTitleWrapper 
              key={`key-${tab}-of-${index}`}
              onClick={() => handleTabClick(tab, index)}
              isActive={index === activeTab}
            >
              <span className='arrow'> {' > '} </span>
              <span className='title'> {tab} </span>
            </StageTitleWrapper>
          ))}
        </div>
        {activeAction === "Fund" 
          ? <FundActiveCard />
          : activeAction === "Withdraw"
          ? <Withdraw />
          : (
              <>
                <div className="card-display">
                  <VirtualCard 
                    cardBgColor={cardData.cardDesign}
                    cardName={cardData.cardName}
                    cardNumber={cardData.cardNumber}
                    cardOwnerName={cardData.cardOwnerName}
                    cardExpiry={cardData.cardExpiry}
                    isActive={true}
                    currencyInitial={cardData.currency.initial}
                    currencySymbol={cardData.currency.symbol}
                    cardFund={cardData.cardFund}
                  />
                </div>
                <H1 mt='3rem'>Card Actions</H1>
                <div className="card-actions-cont">
                  {cardActions.map((action, index) => (
                    <ActionCard 
                      key={action.actionType}
                      cardBg={action.cardBg}
                      cardIcon={<action.actionIcon />}
                      cardTitle={action.actionType}
                      onClick={() => handleActionClick(action.actionType)}
                    />
                  ))

                  }
                </div>
                <div className="card-transaction-heading">
                  <H1 mt='0'>Card Transactions</H1>
                  <hr />
                </div>
                <div className="transactions">
                  {cardData.transactions.map((transaction, index) => (
                    <TransactionDetailsCard 
                      transactionType={transaction.transactionType}
                      title={transaction.transactionTitle}
                      amount={transaction.transactionAmount.amount}
                      currencySymbol={transaction.transactionAmount.currency}
                      transactionDate={transaction.transactionDate}
                      transactionTime={transaction.transactionTime}
                    />
                  ))}
                </div>
              </>
          )
        }
      </CardDetailsWrapper>
    </DashboardLayout>
  )
}

export default CardDetails