import React, { useState } from "react";
import CustomRadioButton from "../../../../../components/atoms/CustomRadioButton";
import { H1 } from "../../../../../components/atoms/Typography";
import Modal from "../../../../../components/molecules/Modal";
import {
  SelectedCurrencyModalWrapper,
  SubCategoryModalWrapper,
} from "../../../styledTradeGiftCard";

const SelectSubCategoryModal = ({
  openModal,
  closeModal = () => {},
  selectCategory = () => {},
  selectedCategory,
}: {
  openModal: boolean;
  closeModal?: Function;
  selectCategory?: Function;
  selectedCategory?: string;
}) => {
  const categoryList = [
    "$25 - $50",
    "$50 - $100",
    "$101 - $200",
    "$201 - $300",
    "$301 - $500",
    "$20 - $501",
    "$25 - $250",
    "$101 - $500",
    "$50 - $200",
  ];
  return (
    <Modal showModal={openModal} closeModal={closeModal} showCloseBtn>
      <SubCategoryModalWrapper>
        <H1 mt="0">Select sub-category</H1>
        <div className="category-list-cont">
          {categoryList.map((cat, index) => (
            <div
              key={cat}
              className="category-cont"
              onClick={() => selectCategory(cat)}
            >
              <span className="category">{cat}</span>
              <CustomRadioButton
                isChecked={selectedCategory === cat}
                checkedColor={"#7165E3"}
              />
            </div>
          ))}
        </div>
      </SubCategoryModalWrapper>
    </Modal>
  );
};

export default SelectSubCategoryModal;
