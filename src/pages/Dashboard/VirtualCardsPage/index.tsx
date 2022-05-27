import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../../components/atoms/Buttons'
import VirtualCard from '../../../components/atoms/VirtualCard'
import { MainWrapper, StageTitleWrapper } from '../../../components/organisms/CreateVirtualCard/createVirtualCardStyles'
import DashboardLayout from '../../../components/templates/MainLayout'
import { setProfileComplete } from '../../../Entity/ProfileComplete'
import { VirtualCardsWrapper } from './styledVirtualCards'

const VirtualCardsPage = () => {
  const [stageTitles, setStageTitles] = useState([
    "Virtual cards",
  ])
  const [stage, setStage] = useState(0)
  const navigate = useNavigate()

  const toggleActiveScreen = () => {
    navigate('/home')
    setProfileComplete(true)
  }

  const handleStageTagClick = (stageIndex: number) => {
    stageTitles.map((stg, index) => {
      if(index === stageIndex){
        if(stageIndex >= 0 && stage > 0){
          setStage(stage - 1)
          setStageTitles(stageTitles.slice(0, stageIndex + 1))
        }else{
          return
        }
      }

      return stg
    })
  }
  
  const cards = [
    {
      cardDesign: 'blue',
      cardName: 'Hetikal',
      currency: {
        symbol: '$',
        initial: 'USD'
      },
      cardFund: '5.76',
      cardOwnerName: 'Lawal Omotoyosi',
      cardNumber: '5399  4412  3426  4412',
      cardExpiry: '01/02'
    },
    {
      cardDesign: 'yellow',
      cardName: 'Hetikal',
      currency: {
        symbol: 'N',
        initial: 'NGN'
      },
      cardFund: '5.76',
      cardOwnerName: 'Lawal Omotoyosi',
      cardNumber: '5399  4412  3426  4412',
      cardExpiry: '01/02'
    },
    {
      cardDesign: 'grey',
      cardName: 'Hetikal',
      currency: {
        symbol: 'N',
        initial: 'NGN'
      },
      cardFund: '5.76',
      cardOwnerName: 'Lawal Omotoyosi',
      cardNumber: '5399  4412  3426  4412',
      cardExpiry: '01/02'
    },
    {
      cardDesign: 'yellow',
      cardName: 'Hetikal',
      currency: {
        symbol: 'N',
        initial: 'NGN'
      },
      cardFund: '5.76',
      cardOwnerName: 'Lawal Omotoyosi',
      cardNumber: '5399  4412  3426  4412',
      cardExpiry: '01/02'
    },
     {
      cardDesign: 'grey',
      cardName: 'Hetikal',
      currency: {
        symbol: '$',
        initial: 'USD'
      },
      cardFund: '5.76',
      cardOwnerName: 'Lawal Omotoyosi',
      cardNumber: '5399  4412  3426  4412',
      cardExpiry: '01/02'
    },
    {
      cardDesign: 'blue',
      cardName: 'Hetikal',
      currency: {
        symbol: 'N',
        initial: 'NGN'
      },
      cardFund: '5.76',
      cardOwnerName: 'Lawal Omotoyosi',
      cardNumber: '5399  4412  3426  4412',
      cardExpiry: '01/02'
    },
  ]
  return (
    <DashboardLayout>
      <VirtualCardsWrapper>
        <div>
          <div className="stage-title-cont">
            <span 
              className='home'
              onClick={() => toggleActiveScreen()}
            >
              Home
            </span>
            {stageTitles.map((stageText, index) => (
              <StageTitleWrapper 
                key={`key-${stageText}-of-${index}`}
                onClick={() => handleStageTagClick(index)}
                isActive={index === stage}
              >
                <span className='arrow'> {' > '} </span>
                <span className='title'> {stageText} </span>
              </StageTitleWrapper>
            ))}
          </div>
          <Button 
            btnText='Create card'
            buttonBgType='small'
            bgColor='#F5CF48'
            width='350'
            mt='0'
          />
        </div>

        <div className="cards-wrapper">
          {cards.map((card, index) => (
            <div key={`card-${card.cardDesign}-${index}`}>
              <VirtualCard 
                cardBgColor={card.cardDesign}
                cardName={card.cardName}
                cardFund={card.cardFund}
                cardNumber={card.cardNumber}
                cardOwnerName={card.cardOwnerName}
                cardExpiry={card.cardExpiry}
                isActive={true}
                currencyInitial={card.currency.initial}
                currencySymbol={card.currency.symbol}
              />
            </div>
          ))

          }
        </div>
      </VirtualCardsWrapper>
    </DashboardLayout>
  )
}

export default VirtualCardsPage