import React, { ChangeEvent, Dispatch, FormEvent, FormEventHandler, useState } from 'react'
import Input from '../../../components/atoms/Forms/Input'
import MiniFormCard from '../../../components/molecules/MiniFormCard'
import { generateId } from '../../../utils/generateId';

const ResetPassword = ({handleFormSubmit}: {handleFormSubmit: FormEventHandler<HTMLFormElement>}) => {
  const [formField, setFormField] = useState({
    otp: '',
    newPassword: '',
    confirmPassword: '',
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>, val: any) => {
      setFormField({...formField, [val]: e.target.value})
  }

  return (
    <MiniFormCard
      cardTitle='Reset Password'
      cardTitleDescription='Create your new password. Make sure its sstronger and different from the last one.'
      secondaryCtaText='Resend code'
      btnText='Reset password'
      btnIsDisabled={!formField.confirmPassword}
      handleSubmit={handleFormSubmit}
    >
      <Input 
        id={generateId()}
        label={'Enter OTP code'}
        placeholder='e.g 123456'
        required
        value={formField.otp}
        onChange={e =>handleChange(e, 'otp')}
      />
      <Input 
        id={generateId()}
        label='New password'
        placeholder='********'
        required
        value={formField.newPassword}
        onChange={e =>handleChange(e, 'newPassword')}
        type='password'
      />
      <Input 
        id={generateId()}
        label='Confirm password'
        placeholder='********'
        required
        value={formField.confirmPassword}
        onChange={e =>handleChange(e, 'confirmPassword')}
        type='password'
      />
    </MiniFormCard>
  )
}

export default ResetPassword