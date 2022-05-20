import React, { useState } from 'react'
import SearchBox from '../../atoms/SearchBox'
import InfoIcon from '../../atoms/vectors/InfoIcon'
import { NavWrapper } from './styledTopNav'

const TopNav = () => {
  const [search, setSearch] = useState<any>()


  return (
    <NavWrapper>
      <SearchBox 
        placeholder='Search activities, giftcards, bills etc.'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <InfoIcon />
    </NavWrapper>
  )
}

export default TopNav