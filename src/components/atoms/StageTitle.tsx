import styled from "styled-components";

export const PrimaryStageTitleWrapper = styled.div`
  display: flex;
  /* align-items: center; */

  .home {
    color: ${(props) => props.theme.colors.grey4};
    font-weight: 700;
    cursor: pointer;
  }
`;
