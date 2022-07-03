import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { primaryMenuList } from "../../../utils/helpers/menuList";
import Button from "../../atoms/Buttons";
import ArrowLeftClosePanel from "../../atoms/vectors/ArrowLeftClosePanel";
import DashboardLogo from "../../atoms/vectors/LogoDashboard";
import LogoIcon from "../../atoms/vectors/LogoIcon";
import { setIsCollapsed, sideNavState } from "./dashboardSideNavEntity";
import { SideNavWrapper } from "./styledMenuBar";

const DashboardSideNav = () => {
  const [activePath] = useState(window.location.pathname);
  const isCollapsed = sideNavState.use().isCollapsed;

  return (
    <SideNavWrapper collapse={isCollapsed}>
      <div className="logo-cont">
        <div>{isCollapsed ? <LogoIcon /> : <DashboardLogo />}</div>
        <div className="arrow">
          <ArrowLeftClosePanel onClick={() => setIsCollapsed(!isCollapsed)} />
        </div>
      </div>
      <div className="menu-items">
        {primaryMenuList.map((item, index) => {
          const isActive = activePath === item.location;
          return (
            <Link to={item.location} key={`${item}-${index}`} className="menu">
              <Button
                buttonBgType={isCollapsed ? "plain" : "small"}
                btnPrefix={isActive ? <item.iconFilled /> : <item.icon />}
                menuBtn={!isCollapsed}
                buttonPosition="left"
                btnText={isCollapsed === true ? "" : item.text}
                bgColor={isActive ? "#7165E3" : "transparent"}
                textColor={isActive ? "white" : "#7165E3"}
                mt="0"
                hideBg={!isActive}
              />
            </Link>
          );
        })}
      </div>
    </SideNavWrapper>
  );
};

export default DashboardSideNav;
