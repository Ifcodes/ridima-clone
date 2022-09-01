import React from "react";
import SelectorModal from "../../../../components/molecules/SelectorModal";
import {
  internetWifiStates,
  setSelectedInternetPlan,
  setSelectedInternetPlanAmount,
  setShowInternetPlanModal,
  setShowNetworkProviderModal,
} from "../../../../Entity/InteretAndWifiEntity";
import { internetPlans } from "../../../../utils/helpers/dataPlans";

const SelectInteretPlanModal = () => {
  const showSelectorModal = internetWifiStates.use().showSelectIntertPlanModal;
  const selectedPlan = internetWifiStates.use().selectedInternetPlan;

  const handleSelection = (plan: string, index: any) => {
    setSelectedInternetPlan(plan);
    setSelectedInternetPlanAmount(internetPlans[index].amount);
    setShowInternetPlanModal(false);
  };

  const plans = internetPlans.map((plan) => plan.type);

  return (
    <div>
      <SelectorModal
        openModal={showSelectorModal}
        selectedOption={selectedPlan}
        closeModal={() => setShowInternetPlanModal(false)}
        selectorList={plans}
        onServiceClick={handleSelection}
        title="Select Internet Plan"
        modalHeight="40rem"
        modalWidth="29%"
        modalContentHeight="40rem"
        mobileModalHeight="40rem"
      />
    </div>
  );
};

export default SelectInteretPlanModal;
