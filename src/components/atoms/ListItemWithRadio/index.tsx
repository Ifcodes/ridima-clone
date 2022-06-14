import { MouseEventHandler } from "react";
import styled from "styled-components";
import CustomRadioButton from "../CustomRadioButton";

const ItemWrapper = styled.div<{ mt?: string }>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #f2f2f2;
  padding: 2rem 1rem 1rem;
  /* margin-top: ${(props) => props.mt || "1rem"}; */
  cursor: pointer;

  :hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  .text {
    color: ${(props) => props.theme.colors.grey2};
  }
`;

const ListItemWithRadio = ({
  text,
  isChecked,
  onClick,
}: {
  text?: string;
  isChecked?: boolean;
  onClick?: MouseEventHandler<HTMLDivElement>;
}) => {
  return (
    <ItemWrapper onClick={onClick}>
      <span className="text">{text}</span>
      <CustomRadioButton isChecked={isChecked} checkedColor={"#7165E3"} />
    </ItemWrapper>
  );
};

export default ListItemWithRadio;
