import React, { ChangeEvent, FormEvent, useState } from 'react'
import Input from '../../../components/atoms/Forms/Input'
import MiniFormCard from '../../../components/molecules/MiniFormCard'
import AuthLayout from '../../../components/templates/AuthLayout'
import { generateId } from '../../../utils/generateId'
import ResetPin from './resetPin'
import SuccessMessageCard from './pinChangSuccessMsgCard'

const ForgotPin = () => {
  const [currentStage, setCurrentStage] = useState(0)
  const [emailField, setEmailField] = useState('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setCurrentStage(currentStage + 1)
  }

  return (
    <AuthLayout
      light={true}
      secondaryAuth={true}
      forPasswordReset={true}
    >
        {currentStage === 1 
          ? <ResetPin 
              handleFormSubmit={(e) => handleSubmit(e)}
            />
          : currentStage === 2 
          ? <SuccessMessageCard />
          : (
            <MiniFormCard
              cardTitle='Forgot Pin'
              cardTitleDescription= 'Enter your registered email. If we find your email in our system, you would receive a PIN reset code.'
              btnText='Send code'
              btnIsDisabled={!emailField}
              handleSubmit={(e) => handleSubmit(e)}
            >
              <Input 
                id={generateId()}
                label='Email address'
                placeholder='e.g you@email.com'
                type='email'
                required
                value={emailField}
                onChange={e => setEmailField(e.target.value)}
              />
            </MiniFormCard>
          )
        }
    </AuthLayout>
  )
}

export default ForgotPin