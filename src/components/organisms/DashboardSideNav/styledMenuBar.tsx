import styled from "styled-components";

export const SideNavWrapper = styled.aside<{
  logout?: boolean,
}>`
  background: linear-gradient(0deg, rgba(113, 101, 227, 0.05), rgba(113, 101, 227, 0.05)), #FFFFFF;
  padding: 1rem 1.5rem;
  height: 100vh;
  overflow: auto;
  position: relative;

  .logo-cont{
    width: 100%;
    background: linear-gradient(0deg, rgba(113, 101, 227, 0.05), rgba(113, 101, 227, 0.05)), #FFFFFF;
    z-index: 20;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    position: sticky;
    top: -1rem;
    left: 0;
  }

  .menu-items{
    width: 100%;
    margin-top: 2rem;

    .menu{
      width: 100%;
      display: flex;
      align-items: center;
    }
  }

  .secondary{
    margin-top: 0;
  }

  hr{
    width: 65%;
    border: 1px solid #7165E3;
    margin: 1.5rem 0;
    opacity: 0.1;
  }
`