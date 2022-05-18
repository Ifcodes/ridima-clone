import React, { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { primaryMenuList, secondaryMenuList } from '../../../utils/helpers/menuList'
import Button from '../../atoms/Buttons'
import ArrowLeftClosePanel from '../../atoms/vectors/ArrowLeftClosePanel'
import DashboardLogo from '../../atoms/vectors/LogoDashboard'
import { SideNavWrapper } from './styledMenuBar'

const DashboardSideNav = () => {
  const [activePath] = useState(window.location.pathname)

  return (
    <SideNavWrapper>
      <div className='logo-cont'>
        <DashboardLogo />
        <ArrowLeftClosePanel />
      </div>
      <div className='menu-items'>
        {primaryMenuList.map((item, index) =>{
          const isActive = activePath === item.location
          return(
            <Link
              to={item.location}
              key={`${item}-${index}`}
              className='menu'
            >
              <Button 
                buttonBgType='small'
                btnPrefix={ isActive 
                  ? <item.iconFilled />
                  :<item.icon />
                }
                menuBtn={true}
                btnText={item.text}
                bgColor={isActive 
                  ? '#7165E3'
                  : 'transparent'
                }
                textColor={isActive
                  ? 'white'
                  : '#7165E3'
                }
                mt='0'
                hideBg={!isActive}
              />
            </Link>
          )
        })}
      </div>
        <hr />
      <div className='menu-items secondary'>
        {secondaryMenuList.map((item, index) => (
          <Link
            to={item.location}
            key={`${item}-${index}`}
            className='menu'
          >
            <Button
              buttonBgType='small' 
              btnPrefix={ activePath === item.location 
                  ? <item.iconFilled />
                  :<item.icon />
                }
              menuBtn={true}
              btnText={item.text}
              bgColor={activePath === item.location 
                ? '#7165E3'
                : 'transparent'
              }
              textColor={activePath === item.location
                ? 'white'
                : item.text === "Logout"
                ? 'red'
                : '#7165E3'
              }
              mt='0'
              hideBg={activePath !== item.location}
            />
          </Link> 
        ))}
      </div>
    </SideNavWrapper>
  )
}

export default DashboardSideNav