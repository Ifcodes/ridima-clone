import { ReactNode } from 'react'
import BirdShapeSm from '../../atoms/vectors/BirdShapeSm'
import Logo from '../../atoms/vectors/Logo'
import AuthSideBarShow from '../../organisms/AuthSideBarShow'
import { AuthCard, BirdShapeWrap, LayoutFooter, AuthWrapper } from './AuthStyles'

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
    <AuthWrapper lightBg={light}>
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
              <div className='bird-cont'>
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
    </AuthWrapper>
  )
}

export default AuthLayout