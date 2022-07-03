import React, {
  ChangeEvent,
  FormEventHandler,
  MouseEventHandler,
  useState,
} from "react";
import Button from "../../../components/atoms/Buttons";
import Input from "../../../components/atoms/Forms/Input";
import { H1, Paragraph } from "../../../components/atoms/Typography";
import GroupedEnvelopImg from "../../../components/atoms/vectors/GroupedEnvelop";
import { generateId } from "../../../utils/generateId";
import { VerifyOtpWrapper } from "./createAccountStyles";
import envelope from "../../../../public/vectors/GroupedEnvelopImg.svg";

type OtpProps = {
  handleSubmit?: FormEventHandler<HTMLFormElement>;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
};

const VerifyOtp = ({ handleSubmit, handleClick }: OtpProps) => {
  const [otp, setOtp] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setOtp(e.target.value);
  };

  return (
    <VerifyOtpWrapper>
      <div className="form-cont">
        <div className="img-cont">
          <img src={`${envelope}`} alt="icon" />
        </div>
        <H1 mt="0">Email Verification</H1>
        <Paragraph>
          Enter the 6-digit code sent to your email to verify your account.
        </Paragraph>
        <form onSubmit={handleSubmit}>
          <Input
            id={generateId()}
            value={otp}
            maxLength={6}
            minLength={6}
            onChange={(e) => handleChange(e)}
            placeholder="259-527"
          />
          <Button
            btnText="Create Account"
            disabled={!otp}
            type="submit"
            mt="5rem"
          />
        </form>
      </div>
    </VerifyOtpWrapper>
  );
};

export default VerifyOtp;
