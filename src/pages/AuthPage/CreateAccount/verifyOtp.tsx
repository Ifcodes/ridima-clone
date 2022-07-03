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
        <H1 mt="2">Email Verification</H1>
        <Paragraph>
          Enter the 6-digit code sent to your email to verify your account.
        </Paragraph>
        <form onSubmit={handleSubmit}>
          <div className="verify-input">
            <Input
              id={generateId()}
              value={otp}
              maxLength={6}
              minLength={6}
              onChange={(e) => handleChange(e)}
              placeholder="259-527"
            />
          </div>
          <div className="btn-cont">
            <Button btnText="Verify Email" disabled={!otp} type="submit" />
          </div>
        </form>
      </div>
    </VerifyOtpWrapper>
  );
};

export default VerifyOtp;
