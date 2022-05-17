import React, { ChangeEventHandler } from 'react'
import SearchIcon from '../vectors/SearchIcon';
import { SearchBoxWrapper } from './styledSearchBox'

type SearchBoxProps = {
  placeholder?: string;
  value?: any;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}
const SearchBox = ({
  placeholder,
  value,
  onChange,
}: SearchBoxProps) => {
  return (
    <SearchBoxWrapper>
      <SearchIcon />
      <input 
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </SearchBoxWrapper>
  )
}

export default SearchBox