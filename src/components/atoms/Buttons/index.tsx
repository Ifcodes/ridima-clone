import React, { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react'
import { ButtonWrapper } from './buttonStyles';
import disabledBtn from '../../../../public/vectors/PrimaryDisabledBtn.svg'
import defaultBtn from '../../../../public/vectors/PrimaryDefaultBtn.svg'

export type ButtonProps = {
  width?: string;
  disabled?: boolean;
  btnText?: string;
  mt?: string;
  mb?: string;
  suffix?: ReactNode;
  btnType?: "submit" | "reset" | "button";
} & DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

const Button = ({  
  width,
  disabled,
  btnText,
  btnType,
  mt,
  mb,
  suffix,
} : ButtonProps) => {
  return (
    <ButtonWrapper
      width={width}
      disabled={disabled}
      mt={mt}
      mb={mb}
      type={btnType}
    >
      <div className='text-cont'>
        <span>{btnText}</span>
        <span>{suffix && suffix}</span>
      </div>
      {disabled
        ? <img src={`${disabledBtn}`} alt='Create account' />
        : <img src={`${defaultBtn}`} alt='Create account'/>
      }
    </ButtonWrapper>
  )
}

export default Button