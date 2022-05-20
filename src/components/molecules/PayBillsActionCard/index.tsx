import React from 'react'
import { PayBillsCardWrapper } from './styledPayBillsCard'

const PayBillsActionCard = () => {
  return (
    <PayBillsCardWrapper>
      <div className="card-content">
        <div>
          <h3>Pay Bills</h3>
          <span>2.0% Off</span>
        </div>
      </div>
      <img src='/vectors/PayBillsActionCard.svg' />
    </PayBillsCardWrapper>
  )
}

export default PayBillsActionCard