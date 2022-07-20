import React, { useState } from "react";
import { DateRange } from "react-date-range";
import Button from "../../../../components/atoms/Buttons";
import { H1 } from "../../../../components/atoms/Typography";
import Modal from "../../../../components/molecules/Modal";
import {
  datePickerStates,
  setShowDatePicker,
} from "../../../../Entity/DatePickerEntity";
import { DateFilterWrapper } from "../activitiesStyles";

const DatefilterModal = () => {
  const selectedDate = datePickerStates.use().selectedDate;
  const showModal = datePickerStates.use().showDatePicker;
  const [dateSelected, setDateSelected] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  const handleRangeSelection = (ranges: any) => {
    setDateSelected(ranges.selection);
  };

  const applyDateFilter = () => {
    console.log(dateSelected);
    setShowDatePicker(false);
  };
  return (
    <Modal
      showModal={showModal}
      closeModal={() => setShowDatePicker(false)}
      width="28%"
      mobileCardHeight="70%"
    >
      <DateFilterWrapper>
        <div className="calendar-cont">
          <H1>Filter Date</H1>
          <DateRange
            ranges={[dateSelected]}
            onChange={handleRangeSelection}
            showMonthAndYearPickers={false}
          />
        </div>
        <Button
          buttonBgType="modal"
          width="100%"
          btnText="Apply Dates"
          onClick={() => applyDateFilter()}
        />
      </DateFilterWrapper>
    </Modal>
  );
};

export default DatefilterModal;
