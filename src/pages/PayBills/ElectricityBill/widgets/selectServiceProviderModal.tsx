import React from "react";
import SelectorModal from "../../../../components/molecules/SelectorModal";
import {
  bettingWalletStates,
  setSelectedPlatform,
  setShowSelectPlaform,
} from "../../../../Entity/BettingWalletEntity";
import {
  electricityBillStates,
  setSelectedProvider,
  setShowSelectProvider,
} from "../../../../Entity/ElectricityBillEntity";

const SelectServiceProviderModal = () => {
  const showSelectorModal = electricityBillStates.use().showSelectProviderModal;
  const selectedProvider = electricityBillStates.use().selectedProvider;

  const handleSelection = (provider: string) => {
    setSelectedProvider(provider);
    setShowSelectProvider(false);
  };

  const serviceProviders = [
    "BEDC",
    "EKEDC",
    "EEDC",
    "IBEDC",
    "IKEDC",
    "JEDC",
    "KEDC",
    "ABEDC",
    "Melbet",
    "IBEDC",
    "IKEDC",
    "IKEDC",
  ];
  return (
    <div>
      <SelectorModal
        openModal={showSelectorModal}
        selectedOption={selectedProvider}
        closeModal={() => setShowSelectProvider(false)}
        selectorList={serviceProviders}
        onServiceClick={handleSelection}
        title="Select Service Provider"
        modalHeight="90vh"
        modalWidth="34%"
      />
    </div>
  );
};

export default SelectServiceProviderModal;
