import styled from "styled-components";

export const SelectButtonWrapper = styled.div<{
  isActive?: boolean;
  mt?: string;
  showDropdown?: boolean;
  width?: string;
  mobileWidth?: string;
}>`
  width: ${(props) => props.width || "27rem"};
  height: 4.3rem;
  background-color: #f6f6f6;
  border-radius: 3.125rem;
  border-bottom-left-radius: ${(props) =>
    props.showDropdown ? "0" : "3.125rem"};
  border-bottom-right-radius: ${(props) =>
    props.showDropdown ? "0" : "3.125rem"};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  cursor: pointer;
  margin-top: ${(props) => props.mt || ""};
  position: relative;

  .title {
    color: ${(props) =>
      props.isActive ? props.theme.colors.grey1 : props.theme.colors.grey3};
  }

  .dropdown-content {
    width: 100%;
    min-height: 20%;
    max-height: 17rem;
    overflow-y: auto;
    background-color: rgba(246, 246, 246, 1);
    border-bottom-left-radius: 2rem;
    border-bottom-right-radius: 2rem;
    padding: 1rem 1.5rem;
    position: absolute;
    left: 0;
    top: 100%;
    transition: transform 0.3s ease;
    z-index: 10;
    transform: ${(props) => (props.showDropdown ? "scale(1)" : "scale(0)")};

    ::-webkit-scrollbar {
      width: 12px;
      border-radius: 24px;
    }
    ::-webkit-scrollbar-track {
      background-color: #f2f2f2;
      border-radius: 24px;
      margin-top: 2rem;
      margin-bottom: 4rem;
    }
    ::-webkit-scrollbar-thumb {
      background-color: #bdbdbd;
      border-radius: 24px;
    }
  }

  @media screen and (max-width: 640px) {
    padding: 1rem 0 1rem 1.5rem;

    width: ${(props) => props.mobileWidth || "100%"};
    max-width: 27rem;
  }
`;
