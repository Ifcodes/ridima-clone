import React from "react";
import SelectorModal from "../../../../components/molecules/SelectorModal";
import {
  internetWifiStates,
  setSelectedInternetPlan,
  setShowInternetPlanModal,
  setShowNetworkProviderModal,
} from "../../../../Entity/InteretAndWifiEntity";

const SelectInteretPlanModal = () => {
  const showSelectorModal = internetWifiStates.use().showSelectIntertPlanModal;
  const selectedPlan = internetWifiStates.use().selectedInternetPlan;

  const handleSelection = (plan: string) => {
    setSelectedInternetPlan(plan);
    setShowInternetPlanModal(false);
  };

  const internetPlans = [
    "REFILL ACCOUNT",
    "RENEW ACCOUNT",
    "CHANGE IMMEDIATELY TO PHC UNIFIED VALUE 4GB",
    "CHANGE IMMEDIATELY TO IBADAN UNIFIED VALUE 4GB",
    "CHANGE IMMEDIATELY TO LAGOS UNIFIED VALUE 4GB",
    "CHANGE IMMEDIATELY TO ABUJA UNIFIED VALUE 4GB",
    "CHANGE IMMEDIATELY TO ABUJA VALUE PACK 4GB",
    "CHANGE IMMEDIATELY TO ABUJA VALUE PACK 6GB",
    "CHANGE IMMEDIATELY TO LAGOS VALUE PACK 6GB",
    "CHANGE IMMEDIATELY TO IBADAN VALUE PACK 6GB",
    "CHANGE IMMEDIATELY TO IBADAN VALUE PACK 6GB",
  ];
  return (
    <div>
      <SelectorModal
        openModal={showSelectorModal}
        selectedOption={selectedPlan}
        closeModal={() => setShowInternetPlanModal(false)}
        selectorList={internetPlans}
        onServiceClick={handleSelection}
        title="Select Internet Plan"
        modalHeight="90vh"
        modalWidth="34%"
      />
    </div>
  );
};

export default SelectInteretPlanModal;
