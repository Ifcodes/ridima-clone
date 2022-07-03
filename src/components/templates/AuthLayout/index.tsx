import { ReactNode } from "react";
import ArrowLeftButton from "../../atoms/vectors/ArrowLeftButton";
import BirdShapeSm from "../../atoms/vectors/BirdShapeSm";
import Logo from "../../atoms/vectors/Logo";
import LogoMobile from "../../atoms/vectors/LogoMobile";
import AuthSideBarShow from "../../organisms/AuthSideBarShow";
import {
  AuthCard,
  BirdShapeWrap,
  LayoutFooter,
  AuthWrapper,
  LayoutHeader,
} from "./AuthStyles";

type AuthLayoutProps = {
  children: ReactNode;
  light?: Boolean;
  secondaryAuth?: Boolean;
  forPasswordReset?: Boolean;
};

const AuthLayout = ({
  children,
  light = false,
  secondaryAuth = false,
  forPasswordReset = false,
}: AuthLayoutProps) => {
  return (
    <AuthWrapper lightBg={light}>
      <LayoutHeader>
        {/* <div className="back-btn">
          <ArrowLeftButton />
        </div> */}

        <LogoMobile />
      </LayoutHeader>
      {secondaryAuth ? (
        <>{children}</>
      ) : (
        <AuthCard>
          <AuthSideBarShow />
          {children}
          <div className="bird-cont">
            <BirdShapeSm />
          </div>
        </AuthCard>
      )}
      <BirdShapeWrap
        className="bird"
        isVisible={secondaryAuth}
        forgotPassword={forPasswordReset}
      >
        <BirdShapeSm />
      </BirdShapeWrap>
      <LayoutFooter>
        <Logo />
      </LayoutFooter>
    </AuthWrapper>
  );
};

export default AuthLayout;
