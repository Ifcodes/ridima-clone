import React from "react";
import Selector from "../../../../components/atoms/Selector";
import SelectorModal from "../../../../components/molecules/SelectorModal";
import {
  airtimeDataStates,
  setSelectedNetwork,
  setShowNetworksModal,
  setShowServiceModal,
} from "../../../../Entity/AirtimeAndDataEntity";

const SelectNetworkModal = () => {
  const showSelectorModal = airtimeDataStates.use().showSelectNetworkModal;
  const selectedNetwork = airtimeDataStates.use().selectedNetwork;

  const handleSelection = (network: string) => {
    console.log("selected network");
    setSelectedNetwork(network);
    setShowNetworksModal(false);
  };

  return (
    <div>
      <SelectorModal
        openModal={showSelectorModal}
        selectedOption={selectedNetwork}
        closeModal={() => setShowNetworksModal(false)}
        selectorList={["Airtel", "Glo", "MTN", "9Mobile"]}
        onServiceClick={handleSelection}
        title="Select Network"
        modalWidth="26%"
        modalHeight="55%"
        mobileModalHeight="50%"
      />
    </div>
  );
};

export default SelectNetworkModal;
