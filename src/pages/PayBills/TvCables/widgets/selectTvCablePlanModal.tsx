import React from "react";
import SelectorModal from "../../../../components/molecules/SelectorModal";
import {
  setSelectedTvCableAmount,
  setSelectedTvCablePlan,
  setShowTvCablePlanModal,
  tvCableStates,
} from "../../../../Entity/TvCablesEntity";
import { tvPlans } from "../../../../utils/helpers/dataPlans";

const SelectTvCablePlanModal = () => {
  const showSelectorModal = tvCableStates.use().showSelectTvCableModal;
  const selectedPlan = tvCableStates.use().selectedTvCablePlan;

  const handleSelection = (plan: string, index: any) => {
    setSelectedTvCablePlan(plan);
    setSelectedTvCableAmount(tvPlans[index].amount);
    setShowTvCablePlanModal(false);
  };

  const planList = tvPlans.map((plan) => plan.type);

  return (
    <div>
      <SelectorModal
        openModal={showSelectorModal}
        selectedOption={selectedPlan}
        closeModal={() => setShowTvCablePlanModal(false)}
        selectorList={planList}
        onServiceClick={handleSelection}
        title="Select Tv Cable Plan"
        modalHeight="40rem"
        mobileModalHeight="40rem"
        modalContentHeight="40rem"
        modalWidth="28%"
      />
    </div>
  );
};

export default SelectTvCablePlanModal;
