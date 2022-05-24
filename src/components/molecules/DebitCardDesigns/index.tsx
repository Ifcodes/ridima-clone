import React from 'react'
import { CardDesignWrapper } from './cardDesignsStyles'

type CardDesignsProps = {
  cardBgColor: string,
}
const CardDesigns = ({
  cardBgColor
} : CardDesignsProps) => {
  return (
    <CardDesignWrapper>
      {cardBgColor === "blue" && 
        <img src='/vectors/BlueDebitCardDesign.svg' alt='' />
      }
      {cardBgColor === "yellow" && 
        <img src='/vectors/YellowDebitCardDesign.svg' alt='' />
      }
      {cardBgColor === "grey" && 
        <img src='/vectors/GreyDebitCardDesign.svg' alt='' />
      }
    </CardDesignWrapper>
  )
}

export default CardDesigns