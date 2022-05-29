import React, { MouseEventHandler } from 'react'
import Button from '../../atoms/Buttons';
import CardDesigns from '../../atoms/DebitCardDesigns'
import Modal from '../../molecules/Modal'

const ChooseCardDesign = ({
  showModal,
  closeModal,
  handleSelect = () => {},
}: {
  showModal: boolean;
  closeModal: Function;
  handleSelect?: Function;
}) => {
  const cardDesigns = [
    {
      cardType: 'Basic',
      cardBg: 'grey'
    },
    {
      cardType: 'Standard',
      cardBg: 'blue'
    },
    {
      cardType: 'Gold',
      cardBg: 'yellow'
    },
  ]
  return (
    <Modal
      showModal={showModal}
      closeModal={closeModal}
      cardHeight={'95vh'}
      width={'27%'}
    >
      <div className="card-design-content">
        <h1>Choose Card Design</h1>
        <div className='cards-wrapper'>
          {cardDesigns.map((card, index) => (
            <div 
              key={`card-${card.cardBg}-${index}`}
              className='card-cont'
              onClick={() => handleSelect("card", card.cardBg)}
            >
              <CardDesigns 
                cardBgColor={card.cardBg}
              />
              <p>{card.cardType}</p>
            </div>
          ))}
        </div>
        <Button 
          buttonBgType='modal'
          btnText='Select'
          width='350'
          onClick={() => handleSelect("button")}
        />
      </div>
    </Modal>
  )
}

export default ChooseCardDesign