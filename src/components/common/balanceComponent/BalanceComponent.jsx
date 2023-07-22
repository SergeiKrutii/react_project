import PropTypes from "prop-types";
import Button from "../button/Button";
import { useEffect, useState } from "react";
import {
  StyledBalanceComponent,
  StyledBalanceInput,
  StyledBalanceForm,
  StyledParagraph,
  StyledButtonForm,
} from "components/common/balanceComponent/StyledBalanceComponent";
import { useSetUserBalanceMutation } from "redux/auth/authApiSlice";
import authSelectors from "redux/auth/authSelectors";
import { useSelector } from "react-redux";
import transactionSelectors from "redux/transactions/transactionsSelectors";

const BalanceComponent = ({ userBalance }) => {
  const [balance, setBalance] = useState("");
  const [setUserBalance] = useSetUserBalanceMutation();

  useEffect(() => {
    setBalance(userBalance);
  }, [setBalance, userBalance]);

  const handleSetNewBalance = (e) => {
    e.preventDefault();
    setUserBalance({ newBalance: balance });
  };

  const handleBalanceChange = (e) => {
    setBalance(e.currentTarget.value);
  };

  const isEmptyBalance = balance === 0;
  const placeholderText = isEmptyBalance ? "00.00 UAH" : `${balance}`;
  return (
    <StyledBalanceComponent>
      <StyledParagraph>Баланс:</StyledParagraph>
      <StyledBalanceForm onSubmit={handleSetNewBalance}>
        <StyledBalanceInput
          type="number"
          placeholder={placeholderText}
          onChange={handleBalanceChange}
        />
        <StyledButtonForm type="submit" disabled={isEmptyBalance}>
          ПОДТВЕРДИТЬ
        </StyledButtonForm>
      </StyledBalanceForm>
    </StyledBalanceComponent>
  );
};

BalanceComponent.propTypes = {};

export default BalanceComponent;
