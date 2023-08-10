import {
  StyledTotalBox,
  StyledText,
  StyledIncomeText,
  StyledExpenseText,
  StyledDocorationBorder,
  StyledIncomeBlock,
  StyledExpenseBlock,
} from "./StyledIncomeExpenseTotal";

const IncomeExpenseTotal = ({ incomeMonth, expenseMonth }) => {
  if (expenseMonth === undefined) return;
  if (incomeMonth === undefined) return;

  return (
    <StyledTotalBox>
      <StyledExpenseBlock>
        <StyledText>Расходы:</StyledText>
        <StyledExpenseText>
          {"- " + expenseMonth?.expenseTotal + ".00 грн."}
        </StyledExpenseText>
      </StyledExpenseBlock>

      <StyledDocorationBorder></StyledDocorationBorder>

      <StyledIncomeBlock>
        <StyledText>Доходы:</StyledText>
        <StyledIncomeText>
          {"+ " + incomeMonth?.incomeTotal + ".00 грн."}
        </StyledIncomeText>
      </StyledIncomeBlock>
    </StyledTotalBox>
  );
};

export default IncomeExpenseTotal;
