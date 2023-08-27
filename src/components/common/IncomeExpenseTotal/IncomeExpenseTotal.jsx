import {
  StyledTotalBox,
  StyledText,
  StyledIncomeText,
  StyledExpenseText,
  StyledDocorationBorder,
  StyledIncomeBlock,
  StyledExpenseBlock,
} from "./StyledIncomeExpenseTotal";

import { useTranslation } from "react-i18next";

const IncomeExpenseTotal = ({ incomeMonth, expenseMonth }) => {
  const { t } = useTranslation();

  if (expenseMonth === undefined) return;
  if (incomeMonth === undefined) return;

  return (
    <StyledTotalBox>
      <StyledExpenseBlock>
        <StyledText>{t("totalExpenseIncome.expense")}:</StyledText>
        <StyledExpenseText>
          {"- " + expenseMonth?.expenseTotal + ".00 грн."}
        </StyledExpenseText>
      </StyledExpenseBlock>

      <StyledDocorationBorder></StyledDocorationBorder>

      <StyledIncomeBlock>
        <StyledText>{t("totalExpenseIncome.income")}:</StyledText>
        <StyledIncomeText>
          {"+ " + incomeMonth?.incomeTotal + ".00 грн."}
        </StyledIncomeText>
      </StyledIncomeBlock>
    </StyledTotalBox>
  );
};

export default IncomeExpenseTotal;
