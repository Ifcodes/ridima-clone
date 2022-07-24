import {
  DetailedHTMLProps,
  InputHTMLAttributes,
  MouseEventHandler,
  useState,
} from "react";
import { generateId } from "../../../../utils/generateId";
import CheckIcon from "../../vectors/CheckIcon";
import ClosedEyeIconFilled from "../../vectors/CloseEyeIconFilled";
import PasswordEye from "../../vectors/PasswordEye";
import { InputWrapper } from "./inputStyles";

export type InputProps = {
  id?: string;
  label?: string;
  value?: string | number;
  type?: string;
  placeholder?: string;
  mt?: string;
  mb?: string;
  ml?: string;
  mr?: string;
  width?: string;
  bgColor?: string;
  required?: boolean;
  symbol?: string;
  padding?: string;
  mobileMt?: string;
  errorShown?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  onChange?: Function;
  showCheckIcon?: boolean;
  inputClassName?: string;
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

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
  mobileMt,
  padding,
  width,
  bgColor,
  required = false,
  onChange,
  className,
  inputClassName,
  symbol,
  errorShown,
  showCheckIcon,
  ...props
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  return (
    <InputWrapper
      width={width}
      label={label}
      mt={mt}
      mb={mb}
      ml={ml}
      mr={mr}
      mobileMt={mobileMt}
      padding={padding}
      bgColor={bgColor}
      isFocused={isFocused || value}
      shownError={errorShown}
      className={className && className}
    >
      <div className="input-cont">
        <label htmlFor={id}>{label}</label>
        <div className="symbol-cont">
          {symbol && <span className="symbol">{symbol}</span>}
          <input
            id={id}
            required={required}
            value={value}
            placeholder={placeholder}
            type={type === "password" && showPassword ? "text" : type}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onChange={onChange}
            className={inputClassName}
            {...props}
          />
        </div>
      </div>
      {type === "password" && (
        <>
          {showPassword === false ? (
            <PasswordEye onClick={() => setShowPassword(!showPassword)} />
          ) : (
            <ClosedEyeIconFilled
              onClick={() => setShowPassword(!showPassword)}
            />
          )}
        </>
      )}
      {showCheckIcon && <CheckIcon />}
    </InputWrapper>
  );
};

export default Input;
