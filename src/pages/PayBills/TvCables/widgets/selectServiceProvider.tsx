import SelectorModal from "../../../../components/molecules/SelectorModal";
import {
  setSelectedServiceProvider,
  setShowServiceProviderModal,
  tvCableStates,
} from "../../../../Entity/TvCablesEntity";

const SelectCableServiceProviderModal = () => {
  const showSelectorModal = tvCableStates.use().showServiceProviderModal;
  const selectedProvider = tvCableStates.use().selectedServiceProvider;

  const handleProviderSelection = (provider: string) => {
    setSelectedServiceProvider(provider);
    setShowServiceProviderModal(false);
  };

  return (
    <div>
      <SelectorModal
        openModal={showSelectorModal}
        selectedOption={selectedProvider}
        closeModal={() => setShowServiceProviderModal(false)}
        selectorList={["Startimes", "GoTv", "DSTV"]}
        onServiceClick={handleProviderSelection}
        title="Select Service Provider"
        modalHeight="25rem"
        mobileModalHeight="25rem"
        modalContentHeight="25rem"
      />
    </div>
  );
};

export default SelectCableServiceProviderModal;
