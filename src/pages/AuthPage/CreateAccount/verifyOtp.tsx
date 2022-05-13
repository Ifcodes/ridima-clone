import React, { ChangeEvent, useState } from 'react'
import Button from '../../../components/atoms/Buttons'
import Input from '../../../components/atoms/Forms/Input'
import { H1, Paragraph } from '../../../components/atoms/Typography'
import GroupedEnvelopImg from '../../../components/atoms/vectors/GroupedEnvelop'
import { generateId } from '../../../utils/generateId'
import { VerifyOtpWrapper } from './createAccountStyles'
import envelope from '../../../../public/vectors/GroupedEnvelopImg.svg';

const VerifyOtp = () => {
  const [otp, setOtp] = useState('');
  const [disableButton, setDisableButton] = useState(true)

  const handleChange = (e:  ChangeEvent<HTMLInputElement>) => {
    setOtp(e.target.value)
  }

  return (
    <VerifyOtpWrapper>
      <div className="form-cont">
        <div className='img-cont'>
          <img src={`${envelope}`} alt="icon" />
        </div>
        <H1 mt='0'>Email Verification</H1>
        <Paragraph>
          Enter the 6-digit code sent to your email to verify your account.
        </Paragraph>
        <Input 
          id={generateId()}
          value={otp}
          onChange={(e) => handleChange(e)}
          placeholder='259-527'
        />
      </div>
      <Button 
        btnText='Create Account'
        disabled={!otp}
      />
    </VerifyOtpWrapper>
  )
}

export default VerifyOtp