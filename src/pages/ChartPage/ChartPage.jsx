import { useState } from "react";
import { usePeriodDataMutation } from "redux/transactions/transactionsApiSlice";
import SpriteIcon from "components/common/spriteIcon/SpriteIcon";
import { StyledButton } from "components/TransactionAdd/StyledTransactionAdd";
import { useMatchMedia } from "helpers/mediaQuery";
import { useNavigate } from "react-router-dom";
import SliderDate from "components/common/SliderDate/SliderDate";
import ChartBalance from "components/common/ChartBalance/ChartBalance";
import IncomeExpenseTotal from "components/common/IncomeExpenseTotal/IncomeExpenseTotal";
import ChartCategory from "components/common/ChartCategory/ChartCategory";
import Chart from "components/Chart/Chart";
import {
  StyledCharHeader,
  StyledChartBackText,
  StyledChartBackBlock,
  StyledChartContainer,
} from "./StyledChartPage";

const ChartPage = () => {
  const { isMobile } = useMatchMedia();
  const navigate = useNavigate();
  const [periodDate, { data: periodData }] = usePeriodDataMutation();

  const [typeOfTransactions, setTypeOfTransactions] = useState("Расходы");
  const [typeOfCategory, setTypeOfCategory] = useState("");

  const expenseMonth = periodData?.expenses;
  const incomeMonth = periodData?.incomes;

  const arrayForMarkup =
    typeOfTransactions === "Расходы"
      ? expenseMonth?.expensesData
      : incomeMonth?.incomesData;

  const arrayTransactionsMonth = arrayForMarkup
    ? Object.entries(arrayForMarkup)
    : [];

  const findActiveCategory = arrayTransactionsMonth?.find(
    (item) => item[0] === typeOfCategory
  );

  const handleChangeCategory = () => {
    setTypeOfTransactions((prevType) =>
      prevType === "Расходы" ? "Доходы" : "Расходы"
    );
  };

  const toggleActiveCategory = (e) => {
    setTypeOfCategory(e.target.closest("LI").dataset.id);
  };

  const handleGoBack = () => {
    navigate("/home");
  };

  return (
    <div>
      <StyledChartContainer>
        {isMobile ? (
          // Мобильный макет
          <>
            <StyledButton type="button" onClick={handleGoBack}>
              <SpriteIcon
                name={"icon-goback-button"}
                style={{ width: "24px", height: "24px" }}
              />
            </StyledButton>
            <SliderDate periodDate={periodDate} />
            <ChartBalance />
            <IncomeExpenseTotal
              expenseMonth={expenseMonth}
              incomeMonth={incomeMonth}
            />
          </>
        ) : (
          // Макет для планшетов и настольных компьютеров
          <>
            <StyledCharHeader>
              <StyledChartBackBlock>
                <StyledButton
                  style={{ display: "flex", alignItems: "center" }}
                  type="button"
                  onClick={handleGoBack}
                >
                  <SpriteIcon
                    name={"icon-goback-button"}
                    style={{ width: "24px", height: "24px" }}
                  />
                  {!isMobile && (
                    <StyledChartBackText>
                      Вернуться на главную
                    </StyledChartBackText>
                  )}
                </StyledButton>
              </StyledChartBackBlock>
              <ChartBalance />
              <SliderDate periodDate={periodDate} />
            </StyledCharHeader>
            <IncomeExpenseTotal
              expenseMonth={expenseMonth}
              incomeMonth={incomeMonth}
            />
          </>
        )}

        <ChartCategory
          typeOfTransactions={typeOfTransactions}
          typeOfCategory={typeOfCategory}
          arrayTransactionsMonth={arrayTransactionsMonth}
          handleChangeCategory={handleChangeCategory}
          toggleActiveCategory={toggleActiveCategory}
        />
      </StyledChartContainer>
      {findActiveCategory && <Chart chartData={findActiveCategory} />}
    </div>
  );
};

export default ChartPage;
