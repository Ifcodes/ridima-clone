import { useNavigate } from "react-router-dom";
import Button from "../../atoms/Buttons";
import { Paragraph } from "../../atoms/Typography";
import { SuccessMessageWrapper } from "./successMsgStyles";

const SuccessMessageCard = ({
  handleOtherActions = () => {},
}: {
  handleOtherActions?: Function;
}) => {
  const navigate = useNavigate();

  const handleBtnActions = (type: string) => {
    handleOtherActions();
    if (type === "trade") navigate("/trade-giftcards");
    if (type === "transactions") navigate("/activities");
  };
  return (
    <SuccessMessageWrapper>
      <div className="msg-modal-content">
        <div className="img-cont">
          <img
            src="/vectors/SuccessMessageIconGreen2.svg"
            alt=""
            className={"illustration"}
          />
        </div>
        <div className="msg-text-cont">
          <h1>Super Smoooth!</h1>
          <Paragraph>
            We’ve received your Giftcard trade and it is currently being
            processed. We’ll notify you of your transaction status soon.
          </Paragraph>
        </div>
      </div>
      <div className="btn-wrapper">
        <Button
          buttonBgType="modalSm"
          btnText="Make another trade"
          width="100%"
          onClick={() => handleBtnActions("trade")}
        />
        <Button
          bgColor="white"
          lineColor="#F5CF48"
          buttonBgType="reversedModal"
          btnText="See Transaction Status"
          width="100%"
          mt="0"
          onClick={() => handleBtnActions("transactions")}
        />
      </div>
    </SuccessMessageWrapper>
  );
};

export default SuccessMessageCard;
