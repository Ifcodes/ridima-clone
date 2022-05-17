import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { primaryMenuList, secondaryMenuList } from '../../../utils/helpers/menuList'
import Button from '../../atoms/Buttons'
import ArrowLeftClosePanel from '../../atoms/vectors/ArrowLeftClosePanel'
import DashboardLogo from '../../atoms/vectors/LogoDashboard'
import { SideNavWrapper } from './styledMenuBar'

const DashboardSideNav = () => {
  const [isActive, setIsActive] = useState(1)
  const navigate = useNavigate()

  const handleMenuClick = (type: string, menuId: number) => {
    if(type === "primaryMenu") {
      primaryMenuList.map((i, _index) => {
        if(menuId === i.id) setIsActive(menuId)

        return i
      })
    }

     if(type === "secondaryMenu") {
      secondaryMenuList.map((i, _index) => {
        if(menuId === i.id) setIsActive(menuId)

        return i
      })
    }
  }
  return (
    <SideNavWrapper>
      <div className='logo-cont'>
        <DashboardLogo />
        <ArrowLeftClosePanel />
      </div>
      {primaryMenuList.map((item, index) => (
        <div
          key={`${item}-${index}`}
          className='menu'
        >
          <Button 
            buttonBgType='small'
            btnPrefix={<item.icon active={isActive === item.id}/>}
            menuBtn={true}
            btnText={item.text}
            bgColor={isActive === item.id 
              ? '#7165E3'
              : 'transparent'
            }
            textColor={isActive === item.id
              ? 'white'
              : '#7165E3'
            }
            hideBg={isActive !== item.id}
            onClick={() => handleMenuClick('primaryMenu', item.id)}
          />
        </div>
      ))}
      <hr />
      {secondaryMenuList.map((item, index) => (
        <div
          key={`${item}-${index}`}
          className='menu'
        >
          <Button
            buttonBgType='small' 
            btnPrefix={<item.icon active={isActive === item.id}/>}
            menuBtn={true}
            btnText={item.text}
            bgColor={isActive === item.id 
              ? '#7165E3'
              : 'transparent'
            }
            textColor={isActive === item.id
              ? 'white'
              : item.text === "Logout"
              ? 'red'
              : '#7165E3'
            }
            hideBg={isActive !== item.id}
            onClick={() => handleMenuClick('secondaryMenu', item.id)}
          />
        </div> 
      ))}
    </SideNavWrapper>
  )
}

export default DashboardSideNav