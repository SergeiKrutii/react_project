import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import authSelectors from "redux/auth/authSelectors";
import { useEffect, useState } from "react";
import {
  StyledBalanceComponent,
  StyledBalanceDiv,
  StyledBalanceInput,
  StyledBalanceForm,
  StyledParagraph,
  StyledButtonForm,
  StyledBalanceSpan,
} from "components/common/balanceComponent/StyledBalanceComponent";
import { useSetUserBalanceMutation } from "redux/auth/authApiSlice";

const BalanceComponent = ({ userBalance = "" }) => {
  const [balance, setBalance] = useState({ value: 0, currency: "UAH" });
  const [setUserBalance] = useSetUserBalanceMutation();
  const stateBalance = useSelector(authSelectors.selectBalance);

  useEffect(() => {
    setBalance({ ...balance, value: userBalance });
  }, [setBalance, userBalance]);

  const handleSetNewBalance = (e) => {
    e.preventDefault();
    setUserBalance({ newBalance: balance.value });
  };

  const handleBalanceChange = (e) => {
    const numericValue = Number(e.currentTarget.value.trim());
    setBalance({ ...balance, value: numericValue });
  };

  const isEmptyBalance = stateBalance === 0;

  const placeholderText = isEmptyBalance ? "00.00" : `${balance.value}`;
  return (
    <StyledBalanceComponent>
      <StyledParagraph>Баланс:</StyledParagraph>
      <StyledBalanceForm onSubmit={handleSetNewBalance}>
        <StyledBalanceDiv>
          <StyledBalanceInput
            type="text"
            placeholder={`${placeholderText} `}
            onChange={handleBalanceChange}
            disabled={!isEmptyBalance}
          />
          <StyledBalanceSpan>UAH</StyledBalanceSpan>
        </StyledBalanceDiv>

        <StyledButtonForm type="submit" disabled={!isEmptyBalance}>
          ПОДТВЕРДИТЬ
        </StyledButtonForm>
      </StyledBalanceForm>
    </StyledBalanceComponent>
  );
};

BalanceComponent.propTypes = {};

export default BalanceComponent;
