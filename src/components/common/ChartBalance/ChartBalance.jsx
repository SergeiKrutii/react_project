import { useEffect, useState } from "react";
import {
  useSetUserBalanceMutation,
  useGetUserQuery,
} from "redux/auth/authApiSlice";
import {
  StyledChartBalanceComponent,
  StyledChartBalanceInput,
  StyledChartBalanceForm,
  StyledChartParagraph,
  StyledChartButtonForm,
} from "../../common/ChartBalance/StyledChartBalance";

import { useMatchMedia } from "helpers/mediaQuery";

const ChartBalance = () => {
  const [balance, setBalance] = useState("");
  const [setUserBalance] = useSetUserBalanceMutation();
  const { data } = useGetUserQuery();
  const { isDesktop } = useMatchMedia();

  useEffect(() => {
    setBalance(data?.balance);
  }, [data?.balance, setBalance]);

  const handleSetNewBalance = (e) => {
    e.preventDefault();
    setUserBalance({ newBalance: balance });
  };

  const isEmptyBalance = balance === 0;
  const placeholderText = isEmptyBalance ? "00.00 UAH" : `${balance}.00 UAH`;

  return (
    <StyledChartBalanceComponent>
      <StyledChartParagraph>Баланс:</StyledChartParagraph>
      <StyledChartBalanceForm onSubmit={handleSetNewBalance}>
        <StyledChartBalanceInput
          type="text"
          placeholder={placeholderText}
          onChange={(e) => setBalance(e.currentTarget.value)}
        />
        {isDesktop && (
          <StyledChartButtonForm type="submit" disabled={isEmptyBalance}>
            ПОДТВЕРДИТЬ
          </StyledChartButtonForm>
        )}
      </StyledChartBalanceForm>
    </StyledChartBalanceComponent>
  );
};

export default ChartBalance;
