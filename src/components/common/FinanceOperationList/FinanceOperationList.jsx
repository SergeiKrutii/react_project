import PropTypes from "prop-types";
import SpriteIcon from "../spriteIcon/SpriteIcon";
import { ReactComponent as UnderLine } from "components/images/listItemUnderline.svg";
import {
  StyledFinanceOperationList,
  StyledFinanceItem,
  StyledFinanceTitle,
  StyledFinanceInfo,
  StyledFinanceSumm,
  StyledFinanceButton,
  StyledFinanceDiv,
  StyledHeaderListItem,
  StyledHeaderList,
  StyledFinanceItemWrap,
  StyledFinanceInfoWraper,
  StyledEmptyItem,
} from "./StyledFinanceOperationList";
import { useDeleteTransactionMutation } from "redux/transactions/transactionsApiSlice";
import { Fragment } from "react";
import { useMatchMedia } from "helpers/mediaQuery";
import { useTranslation } from "react-i18next";

const FinanceOperationList = ({ transactions = [] }) => {
  const [deleteTransaction] = useDeleteTransactionMutation();
  const { isDesktop, isTablet, isMobile } = useMatchMedia();
  const { t } = useTranslation();
  let deviseSize = isTablet || isDesktop;
  const emptyCount = 7;

  return (
    <div style={{ marginTop: isMobile ? "20px" : "" }}>
      {deviseSize && (
        <StyledHeaderList>
          <StyledHeaderListItem>
            {t("transactionHeader.date")}
          </StyledHeaderListItem>
          <StyledHeaderListItem>
            {t("transactionHeader.description")}
          </StyledHeaderListItem>
          <StyledHeaderListItem>
            {t("transactionHeader.category")}
          </StyledHeaderListItem>
          <StyledHeaderListItem>
            {t("transactionHeader.sum")}
          </StyledHeaderListItem>
        </StyledHeaderList>
      )}
      <StyledFinanceOperationList>
        {transactions?.length !== 0 ? (
          transactions?.map((transaction) => (
            <Fragment key={transaction?._id}>
              <StyledFinanceItem>
                <StyledFinanceItemWrap>
                  <StyledFinanceTitle>
                    {isMobile ? transaction?.description : transaction?.date}
                  </StyledFinanceTitle>
                  <StyledFinanceInfoWraper>
                    <StyledFinanceInfo>
                      {isMobile ? transaction?.date : transaction?.description}
                    </StyledFinanceInfo>
                    <StyledFinanceInfo>
                      {transaction?.category}
                    </StyledFinanceInfo>
                  </StyledFinanceInfoWraper>
                </StyledFinanceItemWrap>
                <StyledFinanceDiv>
                  <StyledFinanceSumm transactionType={transaction?.category}>
                    {transaction.category === "З/П" ||
                    transaction.category === "Доп. доход"
                      ? `${transaction?.amount}.00 грн.`
                      : `-${transaction?.amount}.00 грн.`}
                  </StyledFinanceSumm>
                  <StyledFinanceButton
                    onClick={() => deleteTransaction(transaction._id)}
                  >
                    <SpriteIcon
                      name={"icon-delete"}
                      style={{ width: "18px", height: "18px" }}
                    />
                  </StyledFinanceButton>
                </StyledFinanceDiv>
              </StyledFinanceItem>
              {isMobile && <UnderLine style={{ marginBottom: "10px" }} />}
            </Fragment>
          ))
        ) : (
          <>
            {deviseSize &&
              Array.from({ length: emptyCount }, (_, idx) => (
                <StyledEmptyItem key={idx}></StyledEmptyItem>
              ))}
          </>
        )}
      </StyledFinanceOperationList>
    </div>
  );
};

FinanceOperationList.propTypes = {};

export default FinanceOperationList;
