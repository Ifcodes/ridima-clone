import React, { ReactNode } from "react";
import Logout from "../../molecules/LogoutModal";
import TopNav from "../../molecules/TopNav";
import DashboardSideNav from "../../organisms/DashboardSideNav";
import { sideNavState } from "../../organisms/DashboardSideNav/dashboardSideNavEntity";
import MobileBottomNav from "../../organisms/MobileBottomNav";
import { LayoutWrapper } from "./StyledMainLayout";

const DashboardLayout = ({
  children,
  childPadding,
  mobileChildPadding,
}: {
  children: ReactNode;
  childPadding?: string;
  mobileChildPadding?: string;
}) => {
  const isCollapsed = sideNavState.use().isCollapsed;

  return (
    <LayoutWrapper
      padding={childPadding}
      mobilePadding={mobileChildPadding}
      isCollapsed={isCollapsed}
    >
      <DashboardSideNav />
      <main>
        <TopNav />
        <div className="child-cont">{children}</div>
        <MobileBottomNav />
      </main>
      <Logout />
    </LayoutWrapper>
  );
};

export default DashboardLayout;
