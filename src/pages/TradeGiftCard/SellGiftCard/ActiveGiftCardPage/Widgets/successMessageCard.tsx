import { useNavigate } from "react-router-dom";
import Button from "../../../../../components/atoms/Buttons";
import { Paragraph } from "../../../../../components/atoms/Typography";
import {
  setIsConfirmed,
  setShowConfirmationModal,
} from "../../../../../Entity/BuyGiftCardsEntity";
import { SuccessMessageWrapper } from "../../../styledTradeGiftCard";

const SuccessMessageCard = ({
  handleBtnClick = () => {},
}: {
  handleBtnClick?: Function;
}) => {
  return (
    <SuccessMessageWrapper pl="0" pr="0">
      <div className="img-cont">
        <img
          src="/vectors/SuccessMessageIconGreen2.svg"
          alt=""
          className={"illustration"}
        />
      </div>
      <div className="text-cont">
        <h1>Super Smooth</h1>
        <Paragraph>
          We’ve received your Giftcard trade and it is currently being
          processed. We’ll notify you of your transaction status soon.
        </Paragraph>
      </div>
      <div className="btn-wrapper">
        <Button
          buttonBgType="modalSm"
          btnText="Make another trade"
          width="22rem"
          onClick={() => handleBtnClick("trade")}
        />
        <Button
          bgColor="white"
          lineColor="#F5CF48"
          buttonBgType="reversedModal"
          btnText="See Transaction Status"
          width="22rem"
          mt="0"
          onClick={() => handleBtnClick("transactions")}
        />
      </div>
    </SuccessMessageWrapper>
  );
};

export default SuccessMessageCard;
