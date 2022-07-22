import React from "react";
import Selector from "../../../../components/atoms/Selector";
import SelectorModal from "../../../../components/molecules/SelectorModal";
import {
  airtimeDataStates,
  setSelectedDataPlan,
  setShowSelectDataPlan,
} from "../../../../Entity/AirtimeAndDataEntity";

const SelectDataPlanModal = () => {
  const showSelectorModal = airtimeDataStates.use().showSelectDataPlanModal;
  const selectedData = airtimeDataStates.use().selectedDataPlan;

  const handleSelection = (plan: string) => {
    setSelectedDataPlan(plan);
    setShowSelectDataPlan(false);
  };

  const dataPlans = [
    "Airtel 25MB Data Bundle",
    "Airtel 75MB Data Bundle",
    "Airtel 200MB Data Bundle",
    "Airtel 750MB Data Bundle",
    "Airtel 1GB Data Bundle",
    "Airtel 2GB Data Bundle",
    "Airtel 3GB Data Bundle",
    "Airtel 4.5GB Data Bundle",
    "Airtel 6GB Data Bundle",
    "Airtel 8GB Data Bundle",
    "Airtel 24GB Data Bundle",
  ];

  return (
    <div>
      <SelectorModal
        openModal={showSelectorModal}
        selectedOption={selectedData}
        closeModal={() => setShowSelectDataPlan(false)}
        selectorList={dataPlans}
        onServiceClick={handleSelection}
        title="Select Data Plan"
      />
    </div>
  );
};

export default SelectDataPlanModal;
