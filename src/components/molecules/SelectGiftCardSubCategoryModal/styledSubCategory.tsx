import styled from "styled-components";

export const SubCategoryModalWrapper = styled.div`
  width: 100%;
  height: 40rem;
  padding: 1rem 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;

  h1 {
    color: ${(props) => props.theme.colors.deepPurple};
  }

  .category-list-cont {
    width: 100%;
    margin-top: 1rem;

    .category-cont {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-top: 1px solid #f2f2f2;
      padding: 1rem;
      cursor: pointer;

      .category {
        color: ${(props) => props.theme.colors.grey2};
      }
    }
  }

  @media screen and (max-width: 640px) {
    padding: 1rem;
  }
`;
