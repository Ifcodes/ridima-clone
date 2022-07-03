import { ReactNode } from "react";
import CloseIcon from "../../atoms/CloseIcon";
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
  showCloseIcon?: boolean;
  showArrowLeftBtn?: boolean;
  showLogo?: boolean;
  handleCloseIcon?: Function;
};

const AuthLayout = ({
  children,
  light = false,
  secondaryAuth = false,
  forPasswordReset = false,
  showArrowLeftBtn,
  showCloseIcon,
  showLogo,
  handleCloseIcon = () => {},
}: AuthLayoutProps) => {
  return (
    <AuthWrapper lightBg={light}>
      <LayoutHeader>
        <div className="back-btn">
          {showCloseIcon && (
            <CloseIcon onClick={() => handleCloseIcon("close")} />
          )}
          {showArrowLeftBtn && (
            <ArrowLeftButton onClick={() => handleCloseIcon("back")} />
          )}
        </div>

        {showLogo && <LogoMobile />}
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
