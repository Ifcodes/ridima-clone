import React, { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react'
import { ButtonWrapper } from './buttonStyles';
import disabledBtn from '../../../../public/vectors/PrimaryDisabledBtn.svg'
import defaultBtn from '../../../../public/vectors/PrimaryDefaultBtn.svg'
import PrimaryButtonBg from '../vectors/PrimaryButtonBg';
import SmallButtonBg from '../vectors/SmallButtonBg';
import MediumButtonBg from '../vectors/MediumButtonBg';

export type ButtonProps = {
  width?: string;
  disabled?: boolean;
  btnText?: string;
  mt?: string;
  mb?: string;
  suffix?: ReactNode;
  btnPrefix?: ReactNode;
  btnType?: "submit" | "reset" | "button";
  hideBg?: boolean;
  textColor?: string;
  bgColor?: string;
  menuBtn?: boolean;
  buttonBgType?: 'small' | 'medium'
} & DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

const Button = ({  
  width,
  disabled,
  btnText,
  btnType,
  mt,
  mb,
  suffix,
  btnPrefix,
  hideBg = false,
  textColor,
  bgColor,
  buttonBgType,
  menuBtn = false,
  onClick,
} : ButtonProps) => {
  return (
    <ButtonWrapper
      width={width}
      disabled={disabled}
      mt={mt}
      mb={mb}
      type={btnType}
      hideBg={hideBg}
      textColor={textColor}
      onClick={onClick}
      menuBtn={menuBtn}
    >
      <div className='text-cont'>
        {btnPrefix && <span>{btnPrefix}</span>}
        <span>{btnText}</span>
        {suffix && <span>{suffix}</span>}
      </div>
      {buttonBgType === 'small'
        ? <SmallButtonBg 
            bgColor={bgColor}
            className='button-Bg'
          />
        : buttonBgType === 'medium'
        ? <MediumButtonBg 
            bgColor={bgColor}
            className='button-Bg'
          />
        : <PrimaryButtonBg
            bgColor={bgColor 
              ? `${bgColor}` 
              : disabled 
              ? '#FCF2CF'
              : '#F5CF48'
            }
            className='button-Bg'
          />
      }
      {/* {disabled
        ? <img src={`${disabledBtn}`} alt='Create account' />
        : <img src={`${defaultBtn}`} alt='Create account'/>
      } */}
    </ButtonWrapper>
  )
}

export default Button