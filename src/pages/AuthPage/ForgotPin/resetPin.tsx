import React, { ChangeEvent, Dispatch, FormEvent, FormEventHandler, useState } from 'react'
import Input from '../../../components/atoms/Forms/Input'
import MiniFormCard from '../../../components/molecules/MiniFormCard'
import { generateId } from '../../../utils/generateId';

const ResetPin = ({handleFormSubmit}: {handleFormSubmit: FormEventHandler<HTMLFormElement>}) => {
  const [formField, setFormField] = useState({
    otp: '',
    newPin: '',
    confirmPin: '',
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>, val: any) => {
      setFormField({...formField, [val]: e.target.value})
  }

  return (
    <MiniFormCard
      cardTitle='Reset Pin'
      cardTitleDescription='Create your new 4-digit transaction PIN. Make sure its stronger and different from the last one.'
      secondaryCtaText='Resend code'
      btnText='Reset pin'
      btnIsDisabled={!formField.confirmPin}
      handleSubmit={handleFormSubmit}
    >
      <Input 
        id={generateId()}
        label={'Enter OTP code'}
        placeholder='e.g 123456'
        required
        value={formField.otp}
        onChange={e => handleChange(e, 'otp')}
      />
      <Input 
        id={generateId()}
        label='New pin'
        placeholder='******'
        maxLength={6}
        minLength={6}
        required
        value={formField.newPin}
        onChange={e =>handleChange(e, 'newPin')}
        type='password'
      />
      <Input 
        id={generateId()}
        label='Confirm pin'
        placeholder='******'
        maxLength={6}
        minLength={6}
        required
        value={formField.confirmPin}
        onChange={e =>handleChange(e, 'confirmPin')}
        type='password'
      />
    </MiniFormCard>
  )
}

export default ResetPin;