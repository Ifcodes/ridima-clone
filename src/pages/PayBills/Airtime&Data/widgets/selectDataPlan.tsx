import React from "react";
import Selector from "../../../../components/atoms/Selector";
import SelectorModal from "../../../../components/molecules/SelectorModal";
import {
  airtimeDataStates,
  setSelectedDataAmount,
  setSelectedDataPlan,
  setShowSelectDataPlan,
} from "../../../../Entity/AirtimeAndDataEntity";
import { dataPlans } from "../../../../utils/helpers/dataPlans";

const SelectDataPlanModal = () => {
  const showSelectorModal = airtimeDataStates.use().showSelectDataPlanModal;
  const selectedData = airtimeDataStates.use().selectedDataPlan;
  const selectedDataAmount = airtimeDataStates.use().selectedDataAmount;

  const handleSelection = (plan: string, index: any) => {
    setSelectedDataPlan(plan);
    setSelectedDataAmount(dataPlans[index].amount);
    setShowSelectDataPlan(false);
  };

  const list = dataPlans.map((plan) => plan.type);

  return (
    <div>
      <SelectorModal
        openModal={showSelectorModal}
        selectedOption={selectedData}
        closeModal={() => setShowSelectDataPlan(false)}
        selectorList={list}
        onServiceClick={handleSelection}
        title="Select Data Plan"
        modalContentHeight="38rem"
        modalHeight="38rem"
        mobileModalHeight="38rem"
      />
    </div>
  );
};

export default SelectDataPlanModal;
