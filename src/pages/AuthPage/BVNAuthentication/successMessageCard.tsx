import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import Button from '../../../components/atoms/Buttons'
import MessageCard from '../../../components/molecules/MessageCard'

const BvnVerificationSuccessCard = () => {
  const navigate = useNavigate()
  return (
    <>
      <MessageCard 
        cardIcon={<img src='/vectors/SuccessMessageIconGreen.svg' alt=''/>}
        title={'BVN Verification Successfull'}
        description={"You’ve succcessfully verified your BVN, get started right away!"}
        titleColor='#27AE60'
        closeIcon={true}
        handleClick={() => navigate('/home')}
      />
    </>
  )
}

export default BvnVerificationSuccessCard