import React from "react";
import SelectorModal from "../../../../components/molecules/SelectorModal";
import {
  bettingWalletStates,
  setSelectedPlatform,
  setShowSelectPlaform,
} from "../../../../Entity/BettingWalletEntity";

const SelectPlatformModal = () => {
  const showSelectorModal = bettingWalletStates.use().showSelectPlatFormModal;
  const selectedPlatform = bettingWalletStates.use().selectedPlatform;

  const handleSelection = (platform: string) => {
    setSelectedPlatform(platform);
    setShowSelectPlaform(false);
  };

  const bettingPlatforms = [
    "Bet9ja",
    "Bangbet",
    "Sportybet",
    "Betking",
    "1Xbet",
    "Betway",
    "Merrybet",
    "Melbet",
    "Betlion",
    "Bet9ja Agent",
    "Nairabet",
  ];
  return (
    <div>
      <SelectorModal
        openModal={showSelectorModal}
        selectedOption={selectedPlatform}
        closeModal={() => setShowSelectPlaform(false)}
        selectorList={bettingPlatforms}
        onServiceClick={handleSelection}
        title="Select Platform"
        modalHeight="40rem"
        mobileModalHeight="40rem"
        modalContentHeight="40rem"
        modalWidth="28%"
      />
    </div>
  );
};

export default SelectPlatformModal;
