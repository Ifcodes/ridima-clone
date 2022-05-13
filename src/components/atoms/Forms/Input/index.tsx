import { DetailedHTMLProps, InputHTMLAttributes, useState } from 'react'
import { generateId } from '../../../../utils/generateId';
import PasswordEye from '../../vectors/PasswordEye';
import { InputWrapper } from './inputStyles';

type InputProps = {
  id: string,
  label?: string,
  value?: string,
  type?: string;
  placeholder?: string;
  handleChange?: Function;
  mt?: string;
  mb?: string;
  ml?: string;
  mr?: string;
  width?: string;
  bgColor?: string;
  required?: boolean;
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

const Input = ({
  id = generateId(),
  label,
  value,
  type,
  placeholder,
  mt,
  mb,
  ml,
  mr,
  width,
  bgColor,
  required = false,
  className,
  ...props
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false)
  const [errorShown, setErrorShown] = useState(false)

  return (
    <InputWrapper
      width={width}
      mt={mt}
      mb={mb}
      ml={ml}
      mr={mr}
      bgColor={bgColor}
      isFocused={isFocused || value}
      shownError={errorShown}
      className={className && className}
    >
      <div className='input-cont'>
        <label htmlFor={id}>
          {label}
        </label>
        <input 
          id={id}
          required={required}
          value={value}
          placeholder={placeholder}
          type={type === "password" && showPassword ? "text" : type}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...props}
        />
      </div>
        {type === 'password' 
          && <PasswordEye onClick={() => setShowPassword(!showPassword)}/>
        }
    </InputWrapper>
  )
}

export default Input