import React, { ReactNode } from 'react'
import { H1, Paragraph } from '../../atoms/Typography';
import { bgType, SlideCardWrapper } from './SlideCardStyles';

type SlideCardProps = {
  illustration: ReactNode;
  title: string;
  description: string;
  bgColorType?: bgType | string;
  setBg?: Function
}

const SlideCard = ({
  illustration,
  title,
  description,
  bgColorType
}: SlideCardProps) => {
  return (
    <SlideCardWrapper bgColor={bgColorType}>
      <div className='illustration'>{illustration}</div>
      <div className='description-cont'>
        <H1>{title}</H1>
        <Paragraph>
        {description}
        </Paragraph>
      </div>
    </SlideCardWrapper>
  )
}

export default SlideCard