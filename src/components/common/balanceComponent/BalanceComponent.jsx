import PropTypes from "prop-types";
import Button from "../button/Button";

import { useState } from "react";
import {
  StyledBalanceComponent,
  StyledBalanceInput,
  StyledBalanceForm,
  StyledParagraph,
  StyledButtonForm,
} from "components/common/balanceComponent/StyledBalanceComponent";

const BalanceComponent = (props) => {
  const [balance, setBalance] = useState("");

  const handleBalanceChange = (e) => {
    setBalance(e.currentTarget.value);
  };

  return (
    <StyledBalanceComponent>
      <StyledParagraph>Баланс:</StyledParagraph>
      <StyledBalanceForm>
        <StyledBalanceInput
          type="text"
          placeholder="00.00 UAH"
          value={balance}
          onChange={handleBalanceChange}
        />
        <StyledButtonForm type="submit">ПОДТВЕРДИТЬ</StyledButtonForm>
      </StyledBalanceForm>
    </StyledBalanceComponent>
  );
};

BalanceComponent.propTypes = {};

export default BalanceComponent;
