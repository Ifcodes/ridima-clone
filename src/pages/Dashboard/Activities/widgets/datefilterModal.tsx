import React, { useState } from "react";
import { ScrollableModalContent } from "../../../../components/atoms/ScrollableModalContent";
import Selector from "../../../../components/atoms/Selector";
import { H1 } from "../../../../components/atoms/Typography";
import Modal from "../../../../components/molecules/Modal";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import {
  datePickerStates,
  setShowDatePicker,
} from "../../../../Entity/DatePickerEntity";
import { DateRangePicker } from "react-date-range";
import { addDays } from "date-fns";
import { DateFilterWrapper } from "../activitiesStyles";

const DatefilterModal = () => {
  const selectedDate = datePickerStates.use().selectedDate;
  const showModal = datePickerStates.use().showDatePicker;
  const [dateSelected, setDateSelected] = useState({
    selection: {
      startDate: new Date(),
      endDate: undefined,
      key: "selection",
    },
    compare: {
      startDate: new Date(),
      endDate: addDays(new Date(), 3),
      key: "compare",
    },
  });

  const handleRangeSelection = (ranges: any) => {
    console.log(ranges);
  };
  return (
    <Modal
      showModal={showModal}
      closeModal={() => setShowDatePicker(false)}
      width={"50vw"}
      maxWidth={"70vw"}
    >
      <DateFilterWrapper>
        <H1>Filter Date</H1>
        <Selector
          selectorTitle={selectedDate || "Choose date below"}
          titleIsActive={selectedDate !== ""}
          mt="1rem"
          showCalendarIcon
        />

        <ScrollableModalContent mt="1.7rem">
          <DateRangePicker
            onChange={(item) => setDateSelected({ ...dateSelected, ...item })}
            months={1}
            minDate={addDays(new Date(), -300)}
            maxDate={addDays(new Date(), 900)}
            direction="vertical"
            scroll={{ enabled: true }}
            ranges={[dateSelected.selection, dateSelected.compare]}
          />
        </ScrollableModalContent>
      </DateFilterWrapper>
    </Modal>
  );
};

export default DatefilterModal;
