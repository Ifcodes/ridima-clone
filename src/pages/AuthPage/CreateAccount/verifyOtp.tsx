import React, { ChangeEvent, useState } from 'react'
import Button from '../../../components/atoms/Buttons'
import Input from '../../../components/atoms/Forms/Input'
import { H1, Paragraph } from '../../../components/atoms/Typography'
import GroupedEnvelopImg from '../../../components/atoms/vectors/GroupedEnvelop'
import { generateId } from '../../../utils/generateId'
import { VerifyOtpWrapper } from './createAccountStyles'

const VerifyOtp = () => {
  const [otp, setOtp] = useState('');
  const [disableButton, setDisableButton] = useState(true)

  const handleChange = (e:  ChangeEvent<HTMLInputElement>) => {
    if(otp) setDisableButton(false)
    else setDisableButton(true)

    setOtp(e.target.value)
  }
  return (
    <VerifyOtpWrapper>
      <div>
        <GroupedEnvelopImg />
      </div>
      <H1>Email Verification</H1>
      <Paragraph>
        Enter the 6-digit code sent to your email to verify your account.
      </Paragraph>
      <Input 
        id={generateId()}
        value={otp}
        onChange={(e) => handleChange(e)}
        placeholder='259-527'
      />
      <Button 
        btnText='Create Account'
        disabled={disableButton}
        mt="2.5rem"
      />
    </VerifyOtpWrapper>
  )
}

export default VerifyOtp