import React, { useState } from "react";
import { Link } from "react-router-dom";
import { mobileMenuTabs } from "../../../utils/helpers/menuList";
import { MobileBottomNavWrapper } from "./mobileBottomNavStyles";

const MobileBottomNav = () => {
  const [activePath] = useState(window.location.pathname);

  return (
    <MobileBottomNavWrapper>
      {mobileMenuTabs.map((tab, index) => {
        const isActive = activePath === tab.location;
        return (
          <Link to={`${tab.location}`} key={`${tab.id}`}>
            <div className="tab">
              {isActive ? (
                <div className="text-cont">
                  <span>{tab.text}</span>
                </div>
              ) : (
                <tab.icon />
              )}
            </div>
          </Link>
        );
      })}
    </MobileBottomNavWrapper>
  );
};

export default MobileBottomNav;
