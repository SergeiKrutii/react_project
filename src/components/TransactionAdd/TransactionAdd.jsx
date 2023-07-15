import PropTypes from "prop-types";
import { useState } from "react";
import {
  StyledForm,
  StyledInput,
  StyledSelect,
  StyledButton,
  StyledBalanceInput,
  StyledCalculateWrap,
} from "./StyledTransactionAdd";
import Container from "components/common/container/Container";
import SpriteIcon from "components/common/spriteIcon/SpriteIcon";
import Button from "components/common/button/Button";
import { usePeriodDataQuery } from "redux/transactions/transactionsApiSlice";

const TransactionAdd = ({ description, category }) => {
  const [categoryes, setCategoryes] = useState("");
  const [balance, setBalance] = useState("");
  //////////////////////////////////////////////////////////////////
  //ПРИМЕР ОБЪЕКТА ДЛЯ ДОБАВЛЕНИЯ ДЕНЕГ И РАСХОДА (ОДИНАКОВО)
  // const cred = {
  //   description: "Аванс",
  //   amount: 1001,
  //   date: "2023-07-01",
  //   category: "З/П",
  // };

  // const [addIncome, { data }] = useAddIncomeMutation();
  // console.log("🚀 ~ data:", data);
  //////////////////////////////////////////////////////////////////

  const handleChange = (event) => {
    setCategoryes(event.target.value);
  };

  const handleBalanceChange = (e) => {
    setBalance(e.currentTarget.value);
  };

  return (
    <div>
      <Container>
        <StyledButton type="button">
          <SpriteIcon
            name={"icon-goback-button"}
            style={{ width: "24px", height: "24px" }}
          />
        </StyledButton>
        <StyledForm>
          <StyledInput
            type="text"
            name="product"
            placeholder={description}
            maxLength={20}
            minLength={3}
            size={20}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            required
          />
          <StyledSelect label="Category" defaultValue={category}>
            <option value={""} style={{ display: "none" }}>
              {category}
            </option>
          </StyledSelect>
          <div
            style={{ display: "flex", alignItems: "center", marginTop: "30px" }}
          >
            <div>
              <StyledBalanceInput
                type="text"
                placeholder="00.00 UAH"
                value={balance}
                onChange={handleBalanceChange}
              />
            </div>
            <StyledCalculateWrap>
              <SpriteIcon
                name={"icon-calculator"}
                style={{ width: "20px", height: "20px" }}
              />
            </StyledCalculateWrap>
          </div>
        </StyledForm>
      </Container>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "83px" }}
      >
        <Button btnText="ВВОД" btnAction={() => {}} />
        <Button btnText="ОЧИСТИТЬ" btnAction={() => {}} />
      </div>
    </div>
  );
};

TransactionAdd.propTypes = {};

export default TransactionAdd;
