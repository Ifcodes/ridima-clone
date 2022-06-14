import React, { ChangeEvent, useState } from "react";
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
import Stepper from "../../../../components/molecules/Stepper";

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

const steps = [
  {
    title: "Card",
    icon: <img src="/vectors/TickIcon.svg" alt="" />,
  },
  {
    title: "Currency & Giftcard type",
  },
  {
    title: "Card Value",
  },
  {
    title: "Upload Images",
  },
];

const ActiveGiftCard = () => {
  const tradeValues = tradeValue.use();
  const [showCurrencyModal, setShowCurrencyModal] = useState(false);
  const [selectedCard, setSelectedCard] = useState<number | undefined>();
  const [selectedCurrency, setSelectedCurrency] = useState("");
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

  const steps = ["Giftcard Type", "Card Value", "Upload Image(s)"];

  const categoryFormIsFilled = Object.values(selectedCategory).every(
    (item) => item !== ""
  );

  const imgUploadFormIsFilled =
    imgUploadFormData.selectedImages.length > 0 &&
    Object.values(imgUploadFormData).every((item) => item !== "");

  const handleCardTypeClick = (card: string, index: number) => {
    setSelectedCard(index);
    // if (card === "Physical Card") {
    //   setShowCurrencyModal(true);
    // }
  };

  const handleSelectCurrency = (currency: string) => {
    setSelectedCurrency(currency);
    setShowCurrencyModal(false);
  };
  const date = new Date();

  const onProceed = () => {
    if (currentStage < 3) setCurrentStage(currentStage + 1);
    if (currentStage === 2) {
      const summaryData = {
        transactionDate: date,
        cardAmount: selectedCategory.amount,
        rate: tradeValues.rate,
        expectedValue: tradeValues.expectedValue,
        cardIcon: <AmazonIconCircle />,
        cardName: "Amazon",
        cardDescription: "USA No Receipt ($25)",
        images: imgUploadFormData.selectedImages,
      };
      setTradeSummaryData(summaryData);
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

  const handleStepClick = (index: number) => {
    steps.map((step, stepIndex) => {
      if (index === stepIndex) setCurrentStage(index);
    });
  };

  return (
    <ActiveGiftCardWrapper>
      <Stepper
        defaultTitle="Card"
        steps={steps}
        currentStep={currentStage}
        previousStep={currentStage - 1}
        onClick={handleStepClick}
      />
      {currentStage === 3 && <TradeSummary />}
      {currentStage !== 3 && <AmazonCardImage />}
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
            selectorTitle={selectedCurrency || "Select currency"}
            onClick={() => setShowCurrencyModal(true)}
          />
        )}
      </div>
      {currentStage < 2 && (
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
                titleDescription={card.description}
                onCardClick={() => handleCardTypeClick(card.cardTitle, index)}
                isActive={selectedCard === index}
              />
            ))}
          </div>
        </>
      )}
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
        mt="5rem"
        mb="5rem"
        onClick={() => onProceed()}
      />
      <SelectCurrencyModal
        openModal={showCurrencyModal}
        closeModal={() => setShowCurrencyModal(false)}
        selectedCurrency={selectedCurrency}
        selectCurrency={handleSelectCurrency}
      />
      <CardTermsModal
        openModal={openCardTermsModal}
        closeModal={() => setOpenCardTermsModal(false)}
      />
    </ActiveGiftCardWrapper>
  );
};

export default ActiveGiftCard;