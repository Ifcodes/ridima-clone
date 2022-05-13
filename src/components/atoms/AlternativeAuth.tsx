import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const AlternativeAuthWrapper = styled.div`
  display: flex;
  font-size: 1.125rem;
  color: ${props => props.theme.colors.grey2};

  .location{
    margin-left: 0.5rem;
    color: ${props => props.theme.colors.blue};
    font-weight: 700;
  }
`

const AlternativeAuth = ({
  text,
  cta,
  location
}: {text: string, cta: string, location: string}) => {
  return (
    <AlternativeAuthWrapper>
      <span>{text}</span>
      <Link to={`${location}`} className='location'>
        {cta}
      </Link>
    </AlternativeAuthWrapper>
  )
}

export default AlternativeAuth