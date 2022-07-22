import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchBox from "../../atoms/SearchBox";
import InfoIcon from "../../atoms/vectors/InfoIcon";
import { NavWrapper } from "./styledTopNav";

const TopNav = () => {
  const [search, setSearch] = useState<any>();
  const navigate = useNavigate();

  return (
    <NavWrapper>
      <SearchBox
        placeholder="Search activities, giftcards, bills etc."
        placeholderColor="rgba(130, 130, 130, 0.4)"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="info-icon" onClick={() => navigate("/support")}>
        <InfoIcon />
      </div>
    </NavWrapper>
  );
};

export default TopNav;
