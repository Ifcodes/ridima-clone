import React, { MouseEvent, MouseEventHandler, useEffect, useState } from 'react'
import OtpInput from 'react-otp-input';
import { Link } from 'react-router-dom';
import ProfilePics from '../../atoms/ProfilePics';
import PinVerificationSuccess from './PinVerificationSuccessCard';
import { PinVerificationWrapper } from './styledPinVerification';



type PinVerificationProps = {
  imgUrl?: string;
  user?: string;
  handlePinInput?: Function;
  handlePinSubmit: Function;
  pin: string;
  pvMessageTitle?: string;
  pvMessage?: string;
  pvMessageBtnText?: string;
  pinModalStage?: number;
  pvBtnAction?: MouseEventHandler<HTMLButtonElement>;
}

const PinVerificationCard = ({
  imgUrl,
  user,
  handlePinInput,
  handlePinSubmit,
  pin,
  pvMessageTitle,
  pvMessage,
  pvMessageBtnText,
  pinModalStage,
  pvBtnAction
}: PinVerificationProps) => {

  const pinInputStyle = {
    width: "4rem",
    height: "4rem",
    border: "none",
    borderRadius: '100%',
    backgroundColor: '#6a5ee114',
    color: '#7165E3',
    fontWeight: '700',
    fontSize: '1.3rem',
    outline: "none",
  }

  const focusStyle ={
    border: "none",
  }

  useEffect(() => {
    if(pin.length === 4){
      handlePinSubmit()
    }
  }, [pin])

  return (
    <PinVerificationWrapper>
      {pinModalStage === 1 
        ? <PinVerificationSuccess 
            messageTitle={pvMessageTitle}
            message={pvMessage}
            btnText={pvMessageBtnText}
            onClick={pvBtnAction}
          />
        : (
            <>
              <div className="modal-title-cont">
                <div className='profile-pics'>
                  <ProfilePics 
                    imgUrl={imgUrl || '/vectors/Avatar.svg'}
                  />
                </div>
                <p className='user'>{user}</p>
                <p className='enter-pin'>
                  Enter PIN
                </p>
                <OtpInput 
                  numInputs={4}
                  onChange={handlePinInput}
                  value={pin}
                  separator={<span className='seperator'></span>}
                  containerStyle='pin-input-cont'
                  inputStyle={pinInputStyle}
                  focusStyle={focusStyle}
                  shouldAutoFocus={true}
                  isInputNum={true}
                  isInputSecure={true}
                />
              </div>
              <Link to={'/forgot-pin'}>
                Forgot PIN
              </Link>
            </>
          )
      }
    </PinVerificationWrapper>
  )
}

export default PinVerificationCard