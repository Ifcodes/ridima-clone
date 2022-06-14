import React from "react";
import Selector from "../../../../components/atoms/Selector";
import SelectorModal from "../../../../components/molecules/SelectorModal";
import {
  internetWifiStates,
  setSelectedNetworkProvider,
  setShowNetworkProviderModal,
} from "../../../../Entity/InteretAndWifiEntity";

const SelectNetworkProviderModal = () => {
  const showSelectorModal = internetWifiStates.use().showNetworkProviderModal;
  const selectedNetwork = internetWifiStates.use().selectedNetworkProvider;

  const handleProviderSelection = (provider: string) => {
    setSelectedNetworkProvider(provider);
    setShowNetworkProviderModal(false);
  };

  return (
    <div>
      <SelectorModal
        openModal={showSelectorModal}
        selectedOption={selectedNetwork}
        closeModal={() => setShowNetworkProviderModal(false)}
        selectorList={["Spectranet", "Smile 4G LTE", "Ntel Network"]}
        onServiceClick={handleProviderSelection}
        title="Select Network"
        modalHeight="65vh"
      />
    </div>
  );
};

export default SelectNetworkProviderModal;
