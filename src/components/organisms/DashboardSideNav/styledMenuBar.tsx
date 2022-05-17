import styled from "styled-components";

export const SideNavWrapper = styled.aside<{
  logout?: boolean,
}>`
  background: linear-gradient(0deg, rgba(113, 101, 227, 0.05), rgba(113, 101, 227, 0.05)), #FFFFFF;
  padding: 1.5rem;
  height: 100vh;
  overflow: auto;

  .logo-cont{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .menu{
    width: 100%;
    display: flex;
    align-items: center;
  }

  hr{
    width: 90%;
  }
`