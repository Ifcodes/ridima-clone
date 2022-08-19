import React from "react";
import SelectorModal from "../../../../components/molecules/SelectorModal";
import {
  setSelectedTvCablePlan,
  setShowTvCablePlanModal,
  tvCableStates,
} from "../../../../Entity/TvCablesEntity";

const SelectTvCablePlanModal = () => {
  const showSelectorModal = tvCableStates.use().showSelectTvCableModal;
  const selectedPlan = tvCableStates.use().selectedTvCablePlan;

  const handleSelection = (plan: string) => {
    setSelectedTvCablePlan(plan);
    setShowTvCablePlanModal(false);
  };

  const internetPlans = [
    "Basic One Day",
    "Smart One Day",
    "Nova One Week",
    "Classic One Day",
    "Super One Day",
    "Basic One Week",
    "Smart One Week",
    "Nova One Month",
    "Classic One Week",
    "Super One Week",
    "Super Two Week",
  ];
  return (
    <div>
      <SelectorModal
        openModal={showSelectorModal}
        selectedOption={selectedPlan}
        closeModal={() => setShowTvCablePlanModal(false)}
        selectorList={internetPlans}
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
