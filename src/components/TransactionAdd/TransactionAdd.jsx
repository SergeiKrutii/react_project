import PropTypes from "prop-types";
import { useState } from "react";
import {
  StyledForm,
  StyledInput,
  StyledSelect,
  StyledButton,
  StyledBalanceInput,
  StyledCalculateWrap,
  StyledTransactionWraper,
  StyledButtonWraper,
  StyledInputBalanceWrap,
} from "./StyledTransactionAdd";
import SpriteIcon from "components/common/spriteIcon/SpriteIcon";
import Button from "components/common/button/Button";
import { useNavigate } from "react-router-dom";
import { useMatchMedia } from "helpers/mediaQuery";

const TransactionAdd = ({
  descriptionTitle,
  categoryTitle,
  categoryes,
  onAddTransaction,
}) => {
  const [category, setCategory] = useState("");
  const [incomeAmount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const { isDesktop, isTablet, isMobile } = useMatchMedia();

  const date = new Date();

  const formatDate = (date) => {
    let month = "" + (date.getMonth() + 1);
    let day = "" + date.getDate();
    let year = date.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
  };

  const handleInputChange = (e) => {
    setDescription(e.target.value);
  };

  const normalizeDate = formatDate(date);

  const newTransaction = {
    description,
    amount: Number(incomeAmount),
    date: normalizeDate,
    category,
  };

  const handleChange = (e) => {
    setCategory(e.target.value);
  };

  const handleBalanceChange = (e) => {
    setAmount(e.currentTarget.value);
  };

  const handleReset = () => {
    setAmount("");
    setCategory("");
    setDescription("");
  };

  return (
    <StyledTransactionWraper>
      {isMobile && (
        <StyledButton type="button" onClick={() => navigate("/home")}>
          <SpriteIcon
            name={"icon-goback-button"}
            style={{ width: "24px", height: "24px" }}
          />
        </StyledButton>
      )}

      <StyledForm>
        <StyledInput
          type="text"
          name="product"
          placeholder={descriptionTitle}
          maxLength={20}
          minLength={3}
          value={description}
          onChange={handleInputChange}
          size={20}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          required
        />
        <StyledSelect
          onChange={handleChange}
          label="Category"
          defaultValue={categoryTitle}
        >
          <option value={category} style={{ display: "none" }}>
            {categoryTitle}
          </option>
          {categoryes &&
            categoryes.map((elem, idx) => (
              <option key={`${idx}${elem}`} value={`${elem}`}>
                {elem}
              </option>
            ))}
        </StyledSelect>
        <StyledInputBalanceWrap>
          {/* <div> */}
          <StyledBalanceInput
            type="number"
            placeholder={isMobile ? "00.00 UAH" : "00.00"}
            value={incomeAmount}
            onChange={handleBalanceChange}
          />
          {/* </div> */}
          <StyledCalculateWrap>
            <SpriteIcon
              name={"icon-calculator"}
              style={{
                marginLeft: "15px",
                marginRight: "10px",
                fill: isTablet ? "#52555F" : "#1D2E4A",
              }}
            />
          </StyledCalculateWrap>
        </StyledInputBalanceWrap>
      </StyledForm>
      <StyledButtonWraper>
        <Button
          btnText="ВВОД"
          btnAction={() => {
            onAddTransaction(newTransaction);
            handleReset();
          }}
        />
        <Button
          style={{ marginLeft: "15px" }}
          btnText="ОЧИСТИТЬ"
          btnAction={handleReset}
        />
      </StyledButtonWraper>
    </StyledTransactionWraper>
  );
};

TransactionAdd.propTypes = {};

export default TransactionAdd;
