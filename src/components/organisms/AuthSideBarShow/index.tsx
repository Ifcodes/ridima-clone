import React, { useEffect, useRef, useState } from 'react'
import SlideCard from '../../molecules/AuthSideBarSlideCard'
import { SideBarShowWrapper } from './sideBarShowStyle'
import Slider from 'react-slick';

const AuthSideBarShow = () => {
  const [activeSlide, setActiveSlide] = useState(false)
  const slideShowContent = [
    {
      illustration: <img src='/vectors/DarkHairMaleIllus.svg' alt='illustration' />,
      title: 'Convert your Giftcards to Cash',
      description: 'Ridima gives you the power to sell your giftcards for instant Cash.',
      bgType: 'light'
    },
    {
      illustration: <img src='/vectors/LadyYellowTopIllus.svg' alt='illustration' />,
      title: 'Buy your preferred Giftcards easily',
      description: 'Ridima can help you get your subscriptions back up by buying giftcards.',
      bgType: 'light'
    },
    {
      illustration: <img src='/vectors/LadyBlueTopIllus.svg' alt='illustration' />,
      title: 'Get access to Virtual Dollar Cards.',
      description: 'Virtual dollar cards that can be used for online payments on any platform.',
      bgType: 'light'
    },
    {
      illustration: <img src='/vectors/BlueHairMaleIllus.svg' alt='illustration' />,
      title: 'Buy airtime and pay bills',
      description: 'Buy airtime, pay for cable TV, electricity, water, education and more on RIdima',
      bgType: 'light'
    },
    {
      illustration: <img src='/vectors/JetIcon.svg' alt='illustration' />,
      title: 'Get Started on Ridima today',
      description: 'Create your account and start trading giftcards, anytime, anywhere',
      bgType: 'light'
    },
  ]

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000,
  };

  setTimeout(() => {
    if (activeSlide === false) setActiveSlide(true)
    setActiveSlide(false)
  }, 3000)

  return (
    <SideBarShowWrapper>
      {/* <div className="slide-show-cont"> */}
        <Slider {...settings}>  
          {slideShowContent.map((slide, index) => (
              <SlideCard 
                key={`slide-key-${index}`}
                illustration={slide.illustration}
                title={slide.title}
                description={slide.description}
                bgColorType={slide.bgType}
              />
          ))}
        </Slider>
      {/* </div> */}
      
    </SideBarShowWrapper>
  )
}

export default AuthSideBarShow