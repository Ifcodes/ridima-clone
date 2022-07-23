import styled from "styled-components";

export const BillCardWrapper = styled.div<{
  bgColor?: string;
  isActive?: boolean;
  isHorizontal?: boolean;
}>`
  width: ${(props) => (props.isHorizontal ? "15.8rem" : "10rem")};
  height: ${(props) => (props.isHorizontal ? "7rem" : "15rem")};
  border-radius: 1.75rem;
  background-color: ${(props) => props.bgColor || "#EBE9FB"};
  border: ${(props) => (props.isActive ? "1px solid #7165E3" : "none")};
  display: flex;
  flex-direction: ${(props) => (props.isHorizontal ? "row" : "column")};
  align-items: center;
  justify-content: space-between;
  padding: ${(props) => (props.isHorizontal ? "0 2.5rem" : "2.5rem 0")};
  cursor: pointer;

  span {
    color: ${(props) => props.theme.colors.deepPurple};
    width: 5rem;
    font-weight: 500;
    font-size: 1.18rem;
    text-align: center;
  }

  @media screen and (max-width: 640px) {
    width: ${(props) => (props.isHorizontal ? "80%" : "100%")};
    height: ${(props) => (props.isHorizontal ? "9rem" : "15rem")};
  }
`;
