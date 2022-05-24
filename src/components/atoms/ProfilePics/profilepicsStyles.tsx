import styled from "styled-components";

export const ProfilePicsWrapper = styled.div<{
  width?: string;
  height?: string;
}>`
  width: ${props => props.width || '6.25rem'};
  height: ${props => props.height || '6.25rem'};
  border-radius: 100%;

  img{
    max-width: 100%;
    height: 100%;
  }
`