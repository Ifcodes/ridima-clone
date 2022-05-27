import styled, { css } from "styled-components";

export const MessageCardWrapper = styled.div<{height?: string, width?: string}>`
  width: ${props => props.width || '28%'};
  height: ${props => props.height || '75vh'};
  max-width: 35rem;
  max-height: 42rem;
  background-color: white;
  border-radius: 2.5rem;
  padding: 0 2rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  
  .close-Icon{
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding-right: 1rem;
    position: absolute;
    left: 0;
    top: 1rem;
    cursor: pointer;
  }
  .icon-cont{
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 4rem auto;
  }
  .title-cont{
    text-align: center;
    margin-bottom: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    p{
      width: 20rem;
    }
  }
`