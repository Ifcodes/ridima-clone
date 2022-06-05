import React, { useEffect, useState } from "react";
import Input from "../../../../components/atoms/Forms/Input";
import Selector from "../../../../components/atoms/Selector";
import { SubCategoryWrapper } from "../../styledTradeGiftCard";
import SelectSubCategoryModal from "./Widgets/selectSubCategoryModal";

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
  const [showModal, setShowModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");

  const [expectedValue, setExpectedValue] = useState(0);
  const rate = 410;

  useEffect(() => {
    setExpectedValue(
      Number(formField?.amount) * rate * Number(formField?.quantity)
    );
  }, [formField?.amount, formField?.quantity]);

  const selectCategory = (category: string) => {
    setSelectedCategory(category);
    setShowModal(false);
  };

  return (
    <SubCategoryWrapper
      isBigInt={expectedValue.toString().length >= 5}
      isActive={expectedValue > 0}
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
          <h1> {expectedValue.toLocaleString()}</h1>
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
