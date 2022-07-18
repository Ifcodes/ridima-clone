import React, { useState } from "react";
import CustomRadioButton from "../../atoms/CustomRadioButton";
import { ScrollableModalContent } from "../../atoms/ScrollableModalContent";
import { H1 } from "../../atoms/Typography";
import Modal from "../Modal";
import { SubCategoryModalWrapper } from "./styledSubCategory";

const SelectSubCategoryModal = ({
  openModal,
  closeModal = () => {},
  selectCategory = () => {},
  handleCloseBtn = () => {},
  selectedCategory,
}: {
  openModal: boolean;
  closeModal?: Function;
  selectCategory?: Function;
  selectedCategory?: string;
  handleCloseBtn?: Function;
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
    <Modal
      showModal={openModal}
      closeModal={closeModal}
      width="28%"
      maxWidth="30%"
      handleCloseBtn={() => handleCloseBtn()}
      showCloseBtn
    >
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
