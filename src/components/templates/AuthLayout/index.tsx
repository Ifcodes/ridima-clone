import { ReactNode } from 'react'
import BirdShapeSm from '../../atoms/vectors/BirdShapeSm'
import Logo from '../../atoms/vectors/Logo'
import AuthSideBarShow from '../../organisms/AuthSideBarShow'
import { AuthCard, BirdShapeWrap, LayoutFooter, PrimaryAuthWrapper } from './AuthStyles'

type AuthLayoutProps = {
  children: ReactNode;
  light?: Boolean;
  secondaryAuth?: Boolean;
}

const AuthLayout = ({
  children, 
  light = false,
  secondaryAuth = false,
}: AuthLayoutProps) => {
  return (
    <PrimaryAuthWrapper lightBg={light}>
      <div className="auth-cont">
        {secondaryAuth
          ? (
              <>
                {children}
              </>
            )
          : (
              <AuthCard>
                <AuthSideBarShow />
                  {children}
                <div className="bird-cont">
                  <BirdShapeSm />
                </div>
              </AuthCard>
            )
        }
        <BirdShapeWrap className="bird" isVisible={secondaryAuth}>
          <BirdShapeSm />
        </BirdShapeWrap>
        <LayoutFooter>
          <Logo />
        </LayoutFooter>
      </div>
    </PrimaryAuthWrapper>
  )
}

export default AuthLayout