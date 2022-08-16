import React, { MouseEventHandler } from "react";
import Button from "../../../../components/atoms/Buttons";
import ListItemWithRadio from "../../../../components/atoms/ListItemWithRadio";
import { ScrollableModalContent } from "../../../../components/atoms/ScrollableModalContent";
import { H1 } from "../../../../components/atoms/Typography";
import Modal from "../../../../components/molecules/Modal";
import {
  activitiesStates,
  setSelectedFilterOption,
  setSelectedFilterStatus,
  setShowFilterModal,
} from "../../../../Entity/ActivitieEntities";
import { FilterModalContentWrapper, StatusWrapper } from "../activitiesStyles";

const FilterModal = ({
  onFilter,
}: {
  onFilter?: MouseEventHandler<HTMLButtonElement>;
}) => {
  const showModal = activitiesStates.use().showFilterModal;
  const selectedOption = activitiesStates.use().selectedFilterOption;
  const selectedStatus = activitiesStates.use().selectedFilterStatus;

  const statuses = ["Pending", "Success", "Rejected"];

  return (
    <Modal
      width="28%"
      showModal={showModal}
      closeModal={() => setShowFilterModal(false)}
      cardHeight={"65%"}
    >
      <FilterModalContentWrapper>
        <H1>Filter</H1>
        <ScrollableModalContent>
          <div className="options-cont">
            <ListItemWithRadio
              text={"All"}
              isChecked={selectedOption === "All"}
              onClick={() => setSelectedFilterOption("All")}
            />
          </div>
          <div className="statuses-cont">
            <p>Status</p>
            <div className="statuses">
              {statuses.map((status, index) => (
                <StatusWrapper
                  key={`${status}-of-${index}`}
                  className="status"
                  status={status}
                  isActive={selectedStatus === status}
                  onClick={() => setSelectedFilterStatus(status)}
                >
                  {status}
                </StatusWrapper>
              ))}
            </div>
          </div>
          <Button
            btnText="Apply Filter"
            disabled={selectedOption === "" && selectedStatus === ""}
            mt="5rem"
            width="100%"
            buttonBgType="modal"
            onClick={onFilter}
          />
        </ScrollableModalContent>
      </FilterModalContentWrapper>
    </Modal>
  );
};

export default FilterModal;
