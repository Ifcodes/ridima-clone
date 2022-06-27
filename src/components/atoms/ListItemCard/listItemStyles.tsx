import styled from "styled-components";

export const ListItemWrapper = styled.div<{
  showTextBorder?: boolean;
  showMainBorder?: boolean;
  alignItems?: string;
  titleFs?: string;
  titleColor?: string;
  padding?: string;
}>`
  width: 100%;
  display: flex;
  align-items: center;
  border-bottom: ${(props) =>
    props.showMainBorder ? "0.5px solid #E0E0E0" : "none"};

  .card-text-content {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: ${(props) => props.alignItems || ""};
    margin-left: 1.5rem;
    padding: ${(props) => props.padding || "1.2rem 1rem 1.2rem 0"};
    border-bottom: ${(props) =>
      props.showTextBorder ? "0.5px solid #E0E0E0" : "none"};
    cursor: pointer;

    .title-text-wrapper {
      display: flex;
      flex-direction: column;

      .title {
        font-size: ${(props) => props.titleFs || "1.5rem"};
        color: ${(props) => props.titleColor || props.theme.colors.deepPurple};
        font-weight: 500;
        margin-bottom: 0.5rem;
      }

      .description {
        font-size: 1.125rem;
        color: ${(props) => props.theme.colors.grey3};
      }
    }

    .value {
      font-size: 1.125rem;
      color: ${(props) => props.theme.colors.deepPurple};
      font-weight: 500;
    }

    .last-icon-cont {
      cursor: pointer;
      margin: 0;
      padding: 0;
    }
  }
`;
