import React from "react";
import Button from "../../../../components/atoms/Buttons";
import ListItemCard from "../../../../components/atoms/ListItemCard";
import { ScrollableModalContent } from "../../../../components/atoms/ScrollableModalContent";
import { TransactionStatusWrapper } from "../../../../components/atoms/TransactionListItemContainer/transactionListItemstyles";
import { H1 } from "../../../../components/atoms/Typography";
import CopyIconLg from "../../../../components/atoms/vectors/CopyIconLg";
import Modal from "../../../../components/molecules/Modal";
import {
  activitiesStates,
  setGiftCardTransactionModal,
  setShowTransactionModal,
} from "../../../../Entity/ActivitieEntities";
import {
  StatusWrapper,
  TransactionDetailModalWrapper,
} from "../activitiesStyles";

const TradeGiftCardTransactionModal = () => {
  const activityState = activitiesStates.use();
  const showModal = activityState.showGiftCardTransactionDetail;
  const selectedTransaction = activityState.selectedTransaction;
  return (
    <Modal
      width="28%"
      showModal={showModal}
      closeModal={() => setGiftCardTransactionModal(false)}
      height={"85%"}
      showModalFooterDesign
    >
      <TransactionDetailModalWrapper>
        <H1>{selectedTransaction.transactionTitle}</H1>
        <ScrollableModalContent>
          <div className="product">
            <ListItemCard
              icon={<img src={selectedTransaction.productIconUrl} alt="" />}
              title={selectedTransaction.productOrigin}
              titleDescription={selectedTransaction.productOriginDesc}
              showMainBorder={false}
              showTextBorder={false}
            />
          </div>
          <div className="transaction-ref">
            <span className="content-title">Transaction reference:</span>
            <div className="ref-content">
              <p className="content-text">
                {selectedTransaction.transactionRefNumber}
              </p>
              <CopyIconLg />
            </div>
          </div>
          <div className="amount-cont">
            <div>
              <span className="content-title">Amount:</span>
              <p className="content-text">
                {selectedTransaction.amount.currency}{" "}
                {selectedTransaction.amount.value.toLocaleString()}
              </p>
            </div>
            <div>
              <span className="content-title">Rate:</span>
              <p className="value content-text">
                ₦{selectedTransaction.transactionRate}/$
              </p>
            </div>
          </div>
          {selectedTransaction.expectedValue && (
            <div className="expected-value">
              <span className="content-title">You would get:</span>
              <p className="content-text">
                ₦{selectedTransaction.expectedValue.toLocaleString()}
              </p>
            </div>
          )}
          <div className="expected-value">
            <span className="content-title">Date:</span>
            <p className="content-text">{selectedTransaction.date}</p>
          </div>
          <div className="expected-value">
            <span className="content-title">Transaction Status:</span>
            <div className="status-wrapper">
              <TransactionStatusWrapper status={selectedTransaction.status}>
                <span>{selectedTransaction.status}</span>
              </TransactionStatusWrapper>
            </div>
          </div>
          {selectedTransaction.errorMessage && (
            <div className="expected-value">
              <span className="content-title">Status Message:</span>
              <p className="error-message">
                {selectedTransaction.errorMessage.toUpperCase()}
              </p>
            </div>
          )}
          {selectedTransaction.status === "Pending" ? (
            ""
          ) : (
            <Button
              btnText="Report Transaction"
              buttonBgType="modal"
              width="100%"
              mt="3rem"
            />
          )}
        </ScrollableModalContent>
      </TransactionDetailModalWrapper>
    </Modal>
  );
};

export default TradeGiftCardTransactionModal;
