import React, { ChangeEvent, useState } from 'react'
import { Link } from 'react-router-dom'
import AlternativeAuth from '../../../components/atoms/AlternativeAuth'
import Button from '../../../components/atoms/Buttons'
import Input from '../../../components/atoms/Forms/Input'
import { H1 } from '../../../components/atoms/Typography'
import LeftLineVector from '../../../components/atoms/vectors/LeftLineVector'
import RightLineVector from '../../../components/atoms/vectors/RightLineVector'
import AlternativeAuthOptions from '../../../components/molecules/AlternativeAuthOptions'
import AuthLayout from '../../../components/templates/AuthLayout'
import { generateId } from '../../../utils/generateId'
import { LoginWrapper } from './styledLogin'

const Loginpage = () => {
  const [disableButton, setDisableButton] = useState(true)
  const [formField, setFormField] = useState({
    username: '',
    password: '',
  })

  const handleChange = (val : string, e: ChangeEvent<HTMLInputElement>) => {
    const fieldsCheck = Object.values(formField).every(val => val.trim() !== "")
    if(fieldsCheck) setDisableButton(false)
    else setDisableButton(true)

    setFormField({...formField, [val]: e.target.value})
  }

  return (
    <AuthLayout>
      <LoginWrapper>
        <div className='form-cont'>
          <H1 mb='1rem'>Login</H1>
          <Input 
            id={generateId()}
            label='Username, phone, email'
            placeholder='e.g. Johndoe'
            required
            value={formField.username}
            onChange={(e) => handleChange('username', e)}
          />
          <Input 
            id={generateId()}
            label='Password'
            placeholder='*******'
            required
            value={formField.password}
            onChange={(e) => handleChange('password', e)}
            type='password'
          />
          <div className='alternative'>
            <LeftLineVector />
            <span>Or Login with</span>
            <div className='right-vec'>
              <RightLineVector />
            </div>
          </div>

          <AlternativeAuthOptions />
        </div>
        <div className='btn-cont'>
          <Link to={'/forgot-password'} className='forgot-password'>
            Forgot password?
          </Link>

          <Button 
            btnText='Login'
            disabled={disableButton}
            mt="1rem"
          />

          <div className='alternative-nav-cont'>
            <AlternativeAuth 
              text="Don't have an account?"
              cta='Create account'
              location='/'
            />
          </div>
        </div>
      </LoginWrapper>
    </AuthLayout>
  )
}

export default Loginpage