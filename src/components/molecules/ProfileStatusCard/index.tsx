import React from 'react'
import { CardProps } from '../../../types'
import Button from '../../atoms/Buttons'
import { H1, Paragraph } from '../../atoms/Typography'
import IncompleteProfileAvatar from '../../atoms/vectors/IncompletProfileAvatar'
import MasterCardLogo from '../../atoms/vectors/MasterCardLogo'
import { VirtualDollarCardWrapper } from '../VirtualDollaMastercard.tsx/styledCard'

const ProfileStatusCard = ({
  onClick
}: CardProps) => {
  return (
    <VirtualDollarCardWrapper>
      <div className='card-content'>
        <div className='title-cont'>
          <div>
            <H1
              color='#3F1E4B'
            >
              70%
            </H1>
            <Paragraph
              color='#3F1E4B'
            >
              Profile Complete
            </Paragraph>
          </div>
          <div className='img-cont'>
            <img src='/vectors/IncompleteProfileAvatar.svg' alt='' />
          </div>
        </div>
        <Button 
          width='18rem'
          buttonBgType='small'
          bgColor='#3F1E4B'
          textColor='white'
          btnText='Complete profile'
          buttonPosition='left'
          onClick={onClick}
        />
      </div>

      <img src='/vectors/YellowCardRectangle.svg' alt='' />
    </VirtualDollarCardWrapper>
  )
}

export default ProfileStatusCard