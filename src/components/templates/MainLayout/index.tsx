import React, { ReactNode } from "react";
import TopNav from "../../molecules/TopNav";
import DashboardSideNav from "../../organisms/DashboardSideNav";
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
      </main>
    </LayoutWrapper>
  );
};

export default DashboardLayout;
