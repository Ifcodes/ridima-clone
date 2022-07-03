import React, { ReactNode } from "react";
import TopNav from "../../molecules/TopNav";
import DashboardSideNav from "../../organisms/DashboardSideNav";
import MobileBottomNav from "../../organisms/MobileBottomNav";
import { LayoutWrapper } from "./StyledMainLayout";

const DashboardLayout = ({
  children,
  childPadding,
}: {
  children: ReactNode;
  childPadding?: string;
}) => {
  return (
    <LayoutWrapper padding={childPadding}>
      <DashboardSideNav />
      <main>
        <TopNav />
        <div className="child-cont">{children}</div>
        <MobileBottomNav />
      </main>
    </LayoutWrapper>
  );
};

export default DashboardLayout;
