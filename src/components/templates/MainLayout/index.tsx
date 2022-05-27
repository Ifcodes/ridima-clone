import React, { ReactNode } from 'react'
import TopNav from '../../molecules/TopNav'
import DashboardSideNav from '../../organisms/DashboardSideNav'
import { LayoutWrapper } from './StyledMainLayout'

const DashboardLayout = ({children}:{children: ReactNode}) => {
  return (
    <LayoutWrapper>
      <DashboardSideNav />
      <main>
        <TopNav />
        <div className='child-cont'>
          {children}
        </div>
      </main>

    </LayoutWrapper>
  )
}

export default DashboardLayout