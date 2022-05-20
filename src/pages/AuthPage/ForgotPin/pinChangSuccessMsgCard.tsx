import React from 'react'
import { useNavigate } from 'react-router-dom'
import SuccessMessageIconBlue from '../../../components/atoms/vectors/SuccessMessageIconBlue'
import MessageCard from '../../../components/molecules/MessageCard'

const SuccessMessageCard = () => {
  const navigate = useNavigate()
  return (
    <>
      <MessageCard 
        cardIcon={<SuccessMessageIconBlue />}
        title={'Pin Reset Successful'}
        description={"You’ve successfully reset your PIN. Please keep your PIN known to you only."}
      />
    </>
  )
}

export default SuccessMessageCard