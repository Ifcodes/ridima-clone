import React, {
  ChangeEvent,
  Fragment,
  ReactNode,
  useRef,
  useState,
} from "react";
// import Stepper from "react-simple-stepper-component";
import Button from "../../../../components/atoms/Buttons";
import CardTypeCard from "../../../../components/atoms/CardTypeCard";
import Selector from "../../../../components/atoms/Selector";
import HorizontalLinedTitle from "../../../../components/atoms/TitleWithHorizontalLine";
import AmazonCardImage from "../../../../components/atoms/vectors/AmazonCardIllus";
import CashRecieptCardIcon from "../../../../components/atoms/vectors/CashRecieptCardIcon";
import DebitRecieptCardIcon from "../../../../components/atoms/vectors/DebitRecieptCardIcon";
import EcodeCardIcon from "../../../../components/atoms/vectors/EcodeCardIcon";
import NoRecieptCardIcon from "../../../../components/atoms/vectors/NoRecieptCardIcon";
import PhysicalCardTypeIcon from "../../../../components/atoms/vectors/PhysicalCardTypeIcon";
import TickIcon from "../../../../components/atoms/vectors/TickIcon";
import { ActiveGiftCardWrapper } from "../../styledTradeGiftCard";
import SelectCurrencyModal from "../../../../components/molecules/SelectCurrencyModal";
import SelectSubCategory from "./selectSubCategory";
import UploadImage from "./uploadImage";
import TradeSummary from "./tradeSummary";
import { setTradeSummaryData } from "../../../../Entity/TradeSummaryData";
import { tradeValue } from "../../../../Entity/TradeValue";
import AmazonIconCircle from "../../../../components/atoms/vectors/AmazonIconCircle";
import CardTermsModal from "./Widgets/cardTermsModal";
import StepperComponent from "../../../../components/molecules/Stepper";
import { sellGiftCardsStates } from "../../../../Entity/SellGiftCardEntity";
import { scrollToElement } from "../../../../utils/scrollToElement";

const giftCardTypes = [
  {
    cardTitle: "Physical Card",
    cardIcon: PhysicalCardTypeIcon,
    description: "$10 - $10,000",
  },
  {
    cardTitle: "Debit Reciept",
    cardIcon: DebitRecieptCardIcon,
    description: "$10 - $10,000",
  },
  {
    cardTitle: "No Reciept",
    cardIcon: NoRecieptCardIcon,
    description: "$10 - $10,000",
  },
  {
    cardTitle: "Ecode",
    cardIcon: EcodeCardIcon,
    description: "$10 - $10,000",
  },
  {
    cardTitle: "Cash Reciept",
    cardIcon: CashRecieptCardIcon,
    description: "$10 - $10,000",
  },
];

const ActiveGiftCard = ({
  selectedCarditems,
  topScrollId,
}: {
  selectedCarditems?: any;
  topScrollId?: string;
}) => {
  const tradeValues = tradeValue.use();
  const [showCurrencyModal, setShowCurrencyModal] = useState(false);
  const selectedSubCategory = sellGiftCardsStates.use().selectedSubCatecory;
  const [selectedCardType, setSelectedCardType] = useState({
    index: null,
    cardType: "",
  });
  const [selectedCurrency, setSelectedCurrency] = useState({
    currency: "",
    code: "",
  });
  const [currentStage, setCurrentStage] = useState(0);
  const [openCardTermsModal, setOpenCardTermsModal] = useState(false);
  const [imgUploadFormData, setImgUploadFormData] = useState<{
    ecode?: string;
    selectedImages: Array<string>;
    imgSelected?: boolean;
  }>({
    ecode: "",
    selectedImages: [],
    imgSelected: false,
  });

  const [selectedCategory, setSelectedCategory] = useState({
    amount: "",
    quantity: "",
  });

  const steps = ["Card", "Giftcard Type", "Card Value", "Upload Image(s)"];

  const handleStepClick = (step: string, index: number) => {
    if (step === "Card" || step.includes("Type")) setCurrentStage(0);
    // else if (step === "Giftcard Type") setCurrentStage(1);
    else if (step === "Card Value") setCurrentStage(1);
    else if (step.includes("Upload")) setCurrentStage(2);
    else if (step === "mobile" && index <= 1) setCurrentStage(0);
    else if (step === "mobile") setCurrentStage(index - 1);
    else return;
  };

  const categoryFormIsFilled = Object.values(selectedCategory).every(
    (item) => item !== ""
  );

  const imgUploadFormIsFilled =
    imgUploadFormData.selectedImages.length > 0 &&
    Object.values(imgUploadFormData).every((item) => item !== "");

  const handleCardTypeClick = (card: string, index: any) => {
    setSelectedCardType((prev) => ({ ...prev, index: index, cardType: card }));
    // if (card === "Physical Card") {
    //   setShowCurrencyModal(true);
    // }
  };

  const handleSelectCurrency = (currency: any) => {
    setSelectedCurrency(currency);
    setShowCurrencyModal(false);
    scrollToElement("tradeCard-btn");
  };
  const date = new Date();

  const onProceed = () => {
    if (currentStage < 3) {
      scrollToElement(topScrollId);
      setCurrentStage(currentStage + 1);
    }
    if (currentStage === 2) {
      const summaryData = {
        transactionDate: date,
        cardAmount: selectedCategory.amount,
        rate: tradeValues.rate,
        expectedValue: tradeValues.expectedValue,
        cardIcon: <selectedCarditems.miniIcon />,
        cardName: selectedCarditems.cardtitle,
        cardDescription: `${selectedCurrency.code} ${selectedCardType.cardType} (${selectedSubCategory})`,
        images: imgUploadFormData.selectedImages,
      };
      setTradeSummaryData(summaryData);
      scrollToElement(topScrollId);
    }
    if (currentStage === 3) {
      setOpenCardTermsModal(true);
    }
    return;
  };

  const handleSubCategoryFormChange = (
    e: ChangeEvent<HTMLInputElement>,
    val: string
  ) => {
    setSelectedCategory({ ...selectedCategory, [val]: e.target.value });
  };

  const handleImgUploadFormChange = (e: ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files;

    if (!fileList) return;

    const newImages = imgUploadFormData.selectedImages.concat(
      URL.createObjectURL(fileList[0])
    );

    setImgUploadFormData({
      ...imgUploadFormData,
      selectedImages: newImages,
      imgSelected: true,
    });
  };

  const handleEcodeInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setImgUploadFormData({ ...imgUploadFormData, ecode: e.target.value });
  };

  const removeImg = (index: number) => {
    const filteredImgs = imgUploadFormData.selectedImages.filter(
      (img, imgIndx) => index !== imgIndx
    );
    setImgUploadFormData({
      ...imgUploadFormData,
      selectedImages: filteredImgs,
    });
  };

  const mobileSteps = Array(4).fill("");

  const onConfirm = () => {
    scrollToElement(topScrollId);
    setImgUploadFormData({ ecode: "", selectedImages: [], imgSelected: false });
    setCurrentStage(0);
    setSelectedCardType({ index: null, cardType: "" });
    setSelectedCategory({
      amount: "",
      quantity: "",
    });
    setSelectedCurrency({ currency: "", code: "" });
  };

  return (
    <ActiveGiftCardWrapper>
      <div id="active-card" className="active-card-cont-wrap">
        <div className="stepper-wrap">
          <StepperComponent
            steps={steps}
            activeStep={currentStage + 1}
            toggleSteps={handleStepClick}
          />
        </div>
        <div className="stepper-wrap-mobile">
          <StepperComponent
            mobileSteps={mobileSteps}
            activeStep={currentStage + 1}
            toggleSteps={handleStepClick}
          />
        </div>

        {currentStage === 3 && <TradeSummary />}
        {currentStage !== 3 && (
          <div className="card-img-wrap">
            {selectedCarditems.activeCardImg && (
              <selectedCarditems.activeCardImg />
            )}
          </div>
        )}
        {currentStage === 2 && (
          <UploadImage
            handleEcodeInput={handleEcodeInputChange}
            handleFormChange={handleImgUploadFormChange}
            formFields={imgUploadFormData}
            removeImg={removeImg}
          />
        )}
        <div className="selector">
          {currentStage === 1 && (
            <SelectSubCategory
              formField={selectedCategory}
              handleChange={handleSubCategoryFormChange}
            />
          )}

          {currentStage === 0 && (
            <Selector
              selectorTitle={
                selectedCurrency.currency
                  ? `${selectedCurrency.currency} (${selectedCurrency.code})`
                  : "Select currency"
              }
              onClick={() => setShowCurrencyModal(true)}
            />
          )}
        </div>
        {currentStage === 0 && selectedCurrency.currency && (
          <>
            <div className="card-types-heading">
              <HorizontalLinedTitle text="Select GiftCard Type" />
            </div>
            <div className="card-types-cont">
              {giftCardTypes.map((card, index) => (
                <CardTypeCard
                  key={card.cardTitle}
                  icon={<card.cardIcon />}
                  title={card.cardTitle}
                  onCardClick={() => handleCardTypeClick(card.cardTitle, index)}
                  isActive={selectedCardType.index === index}
                />
              ))}
            </div>
          </>
        )}
      </div>
      <div className="tradecard-btn-cont" id="tradeCard-btn">
        <Button
          btnText={currentStage === 3 ? "Sell Giftcard" : "Proceed"}
          disabled={
            currentStage === 1 && !categoryFormIsFilled
              ? true
              : currentStage === 2 && !imgUploadFormIsFilled
              ? true
              : !selectedCurrency
          }
          width="27rem"
          mb="2rem"
          onClick={() => onProceed()}
        />
      </div>
      {showCurrencyModal && (
        <SelectCurrencyModal
          openModal={showCurrencyModal}
          closeModal={() => setShowCurrencyModal(false)}
          selectedCurrency={selectedCurrency}
          selectCurrency={handleSelectCurrency}
        />
      )}
      <CardTermsModal
        openModal={openCardTermsModal}
        closeModal={() => setOpenCardTermsModal(false)}
        handleCloseBtn={() => setOpenCardTermsModal(false)}
        handleConfirm={onConfirm}
        selectedCardTitle={selectedCarditems.cardtitle}
      />
    </ActiveGiftCardWrapper>
  );
};

export default ActiveGiftCard;
