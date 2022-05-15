import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../../components/atoms/Buttons'
import SuccessMessageIconBlue from '../../../components/atoms/vectors/SuccessMessageIconBlue'
import MessageCard from '../../../components/molecules/MessageCard'

const SuccessMessageCard = () => {
  const navigate = useNavigate()
  return (
    <>
      <MessageCard 
        cardIcon={<SuccessMessageIconBlue />}
        title={'Password Reset Successful'}
        description={"You’ve successfully reset your Password. Please keep your password known to you only."}
        primaryCta={
          <Button 
            btnText='Login'
            onClick={() => navigate('/login')}
          />
        }
      />
    </>
  )
}

export default SuccessMessageCard