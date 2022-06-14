import React, { useEffect, useState } from "react";
import Input from "../../../../components/atoms/Forms/Input";
import Selector from "../../../../components/atoms/Selector";
import { setExpectedValue, tradeValue } from "../../../../Entity/TradeValue";
import { SubCategoryWrapper } from "../../styledTradeGiftCard";
import SelectSubCategoryModal from "../../../../components/molecules/SelectGiftCardSubCategoryModal";
import CardTermsModal from "./Widgets/cardTermsModal";
import {
  hotGiftCardsStates,
  setSelectedSubCategory,
} from "../../../../Entity/HotGiftCardsEntity";

type SubCategoryProps = {
  formField?: {
    amount?: string;
    quantity?: string;
  };
  handleChange?: Function;
};

const SelectSubCategory = ({
  formField,
  handleChange = () => {},
}: SubCategoryProps) => {
  const tradeValues = tradeValue.use();
  const [showModal, setShowModal] = useState(false);
  const selectedCategory = hotGiftCardsStates.use().selectedSubCategory;

  const rate = 410;

  useEffect(() => {
    setExpectedValue(
      Number(formField?.amount),
      Number(formField?.quantity),
      rate
    );
  }, [formField?.amount, formField?.quantity]);

  const selectCategory = (category: string) => {
    setSelectedSubCategory(category);
    setShowModal(false);
  };

  return (
    <SubCategoryWrapper
      isBigInt={tradeValues.expectedValue.toString().length >= 5}
      isActive={tradeValues.expectedValue > 0}
    >
      <div className="subcat-cont">
        <Selector
          selectorTitle={selectedCategory || "Select sub-category"}
          onClick={() => setShowModal(true)}
        />
      </div>
      <div className="amount-field-cont">
        <Input
          label="Enter Card Amount"
          placeholder="e.g $100"
          symbol="$"
          value={formField?.amount}
          onChange={(e) => handleChange(e, "amount")}
          required
        />
        <Input
          placeholder="0"
          symbol="x"
          value={formField?.quantity}
          onChange={(e) => handleChange(e, "quantity")}
          padding={"1.5rem 1.2rem"}
          required
        />
      </div>
      <div className="value-display-cont">
        <span>You will get:</span>
        <div className="value-cont">
          <span className="symbol">₦</span>
          <h1> {tradeValues.expectedValue.toLocaleString()}</h1>
        </div>
        <span>≠{rate}</span>
      </div>
      <SelectSubCategoryModal
        openModal={showModal}
        closeModal={() => setShowModal(false)}
        selectedCategory={selectedCategory}
        selectCategory={selectCategory}
      />
    </SubCategoryWrapper>
  );
};

export default SelectSubCategory;
