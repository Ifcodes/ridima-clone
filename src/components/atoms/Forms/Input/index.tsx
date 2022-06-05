import {
  DetailedHTMLProps,
  InputHTMLAttributes,
  MouseEventHandler,
  useState,
} from "react";
import { generateId } from "../../../../utils/generateId";
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
  onClick?: MouseEventHandler<HTMLButtonElement>;
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
  padding,
  width,
  bgColor,
  required = false,
  className,
  symbol,
  ...props
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [errorShown, setErrorShown] = useState(false);

  return (
    <InputWrapper
      width={width}
      mt={mt}
      mb={mb}
      ml={ml}
      mr={mr}
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
            {...props}
          />
        </div>
      </div>
      {type === "password" && (
        <PasswordEye onClick={() => setShowPassword(!showPassword)} />
      )}
    </InputWrapper>
  );
};

export default Input;
