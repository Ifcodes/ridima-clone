import React from "react";
import Selector from "../../../../components/atoms/Selector";
import SelectorModal from "../../../../components/molecules/SelectorModal";
import {
  airtimeDataStates,
  setSelectedService,
  setShowServiceModal,
} from "../../../../Entity/AirtimeAndDataEntity";

const SelectServiceModal = () => {
  const showSelectorModal = airtimeDataStates.use().showServicesModal;
  const selectedService = airtimeDataStates.use().selectedService;

  const handleSelection = (service: string) => {
    setSelectedService(service);
    setShowServiceModal(false);
  };
  return (
    <div>
      <SelectorModal
        openModal={showSelectorModal}
        selectedOption={selectedService}
        closeModal={() => setShowServiceModal(false)}
        selectorList={["Airtime", "Data"]}
        onServiceClick={handleSelection}
        title="Select Service"
        modalHeight="65vh"
      />
    </div>
  );
};

export default SelectServiceModal;
