import React, { useState } from "react";
import Selector from "../../../components/atoms/Selector";
import HorizontalLinedTitle from "../../../components/atoms/TitleWithHorizontalLine";
import TransactionDetailContainer from "../../../components/atoms/TransactionListItemContainer";
import { H1 } from "../../../components/atoms/Typography";

import {
  activitiesStates,
  setGiftCardTransactionModal,
  setSelectedFilterOption,
  setSelectedTransaction,
  setShowDateModal,
  setShowFilterModal,
  setShowTransactionModal,
} from "../../../Entity/ActivitieEntities";
import { setShowDatePicker } from "../../../Entity/DatePickerEntity";
import {
  today,
  transactionData,
  yesterday,
} from "../../../utils/helpers/transactionsData";
import { TransactionsPageWrapper } from "./activitiesStyles";
import DatefilterModal from "./widgets/datefilterModal";
import FilterModal from "./widgets/filterModal";
import TradeGiftCardTransactionModal from "./widgets/giftcardsTransactionDetailModal";
import TransactionDetailsModal from "./widgets/billPaymentTransactionDetailModal";
import GiftCardsTransactionDetailModal from "./widgets/giftcardsTransactionDetailModal";
import BillPaymentTransactionDetailsModal from "./widgets/billPaymentTransactionDetailModal";

const TransactionsPage = ({
  transactionType,
}: {
  transactionType?: string;
}) => {
  const selectedFilterOption = activitiesStates.use().selectedFilterOption;
  const selectedFilterStatus = activitiesStates.use().selectedFilterStatus;
  const [transactions, setTransactions] = useState(transactionData);

  const currentTransactions = transactions
    .filter((transaction) => transaction.date === today.toDateString())
    .filter((transac) => transac.category === transactionType);

  const previousTransactions = transactions
    .filter((transaction) => transaction.date === yesterday.toDateString())
    .filter((transac) => transac.category === transactionType);

  const handleFilter = (type: string) => {
    setShowFilterModal(false);
    if (type === "filter") {
      if (selectedFilterOption === "All") {
        setTransactions(transactionData);
        setSelectedFilterOption("");
      } else if (selectedFilterStatus === "Success") {
        setTransactions(
          transactions.filter(
            (transaction) => transaction.status === "Successfull"
          )
        );
      } else {
        setTransactions(
          transactions.filter(
            (transaction) => transaction.status === selectedFilterStatus
          )
        );
      }
    }
    return;
  };

  const handleFilterButton = () => {
    setTransactions(transactionData);
    setShowFilterModal(true);
  };

  const handleTransactionClick = (selectedTransaction: any) => {
    if (selectedTransaction.category === "Gift Cards") {
      setSelectedTransaction(selectedTransaction);
      setGiftCardTransactionModal(true);
    } else {
      setSelectedTransaction(selectedTransaction);
      setShowTransactionModal(true);
    }

    return;
  };
  return (
    <TransactionsPageWrapper>
      <div className="title-filter-cont">
        <H1 mt="0">Today</H1>
        <div className="filter-selectors">
          <Selector
            selectorTitle="Date"
            className="filter-btn"
            onClick={() => setShowDatePicker(true)}
          />
          <Selector
            selectorTitle="Filter"
            className="filter-btn"
            onClick={() => handleFilterButton()}
          />
        </div>
      </div>
      <div className="transaction-cont">
        {currentTransactions.map((transaction, index) => (
          <TransactionDetailContainer
            key={transaction.id}
            imgUrl={transaction.productIconUrl}
            icon={<transaction.icon />}
            transactionTitle={transaction.transactionTitle}
            transactionType={transaction.type}
            product={transaction.product}
            date={transaction.date}
            amount={transaction.amount.value}
            currency={transaction.amount.currency}
            transactionStatus={transaction.status}
            onTitleClick={() => handleTransactionClick(transaction)}
          />
        ))}
      </div>
      <div className="yesterday-title">
        <HorizontalLinedTitle text="Yesterday" />
      </div>
      <div className="transaction-cont">
        {previousTransactions.map((transaction, index) => (
          <TransactionDetailContainer
            key={transaction.id}
            imgUrl={transaction.productIconUrl}
            icon={<transaction.icon />}
            transactionTitle={transaction.transactionTitle}
            transactionType={transaction.type}
            product={transaction.product}
            date={transaction.date}
            amount={transaction.amount.value}
            currency={transaction.amount.currency}
            transactionStatus={transaction.status}
            onTitleClick={() => handleTransactionClick(transaction)}
          />
        ))}
      </div>
      <FilterModal onFilter={() => handleFilter("filter")} />
      <GiftCardsTransactionDetailModal />
      <BillPaymentTransactionDetailsModal />
    </TransactionsPageWrapper>
  );
};

export default TransactionsPage;
