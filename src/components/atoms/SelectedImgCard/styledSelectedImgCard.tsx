import styled from "styled-components";

export const SelectedImgCardWrapper = styled.div<{
  width?: string;
  height?: string;
  borderRadius?: string;
}>`
  width: ${(props) => props.width || "10rem"};
  height: ${(props) => props.height || "10rem"};
  border-radius: ${(props) => props.borderRadius || "8px"};
  margin-left: 1.5rem;
  display: flex;
  justify-content: center;
  object-fit: contain;
  border: 1px solid ${(props) => props.theme.colors.grey1};
  position: relative;

  .remove-img {
    color: red;
    position: absolute;
    right: -1rem;
    top: -1rem;
    width: 2rem;
    height: 2rem;
    border-radius: 100%;
    background-color: ${(props) => props.theme.colors.grey6};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    cursor: pointer;
  }

  img {
    max-width: 100%;
    max-height: 100%;
    border-radius: 8px;
  }
`;
