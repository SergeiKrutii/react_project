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
import {
  useSetUserBalanceMutation,
  useGetUserQuery,
} from "redux/auth/authApiSlice";
import { useMatchMedia } from "helpers/mediaQuery";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const BalanceComponent = () => {
  const [balance, setBalance] = useState("");
  const [setUserBalance] = useSetUserBalanceMutation();
  const { data } = useGetUserQuery();
  const { isMobile, isTablet } = useMatchMedia();
  const location = useLocation();
  const { t } = useTranslation();

  let deviseSize = isMobile || isTablet;
  const isChartPath = location.pathname === "/chart";

  useEffect(() => {
    setBalance(data?.balance);
  }, [data?.balance, setBalance]);

  const handleSetNewBalance = (e) => {
    e.preventDefault();
    setUserBalance({ newBalance: balance.value });
  };

  const handleBalanceChange = (e) => {
    const numericValue = Number(e.currentTarget.value.trim());
    setBalance({ ...balance, value: numericValue });
  };

  const isEmptyStyledChart = location.pathname === "/chart";

  const isEmptyBalance = balance === 0;
  const placeholderText = isEmptyBalance ? "00.00 UAH" : `${balance}`;
  return (
    <StyledBalanceComponent isEmptyStyledChart={isEmptyStyledChart}>
      <StyledParagraph>{t("balanceComponent.balance")}</StyledParagraph>
      <StyledBalanceForm onSubmit={handleSetNewBalance}>
        <StyledBalanceDiv isEmptyStyledChart={isEmptyStyledChart}>
          <StyledBalanceInput
            type="text"
            placeholder={`${placeholderText} `}
            onChange={handleBalanceChange}
            disabled={!isEmptyBalance}
          />
          <StyledBalanceSpan>UAH</StyledBalanceSpan>
        </StyledBalanceDiv>

        {deviseSize && isChartPath ? null : (
          <StyledButtonForm type="submit" disabled={isEmptyBalance}>
            {t("balanceComponent.button")}
          </StyledButtonForm>
        )}
      </StyledBalanceForm>
    </StyledBalanceComponent>
  );
};

BalanceComponent.propTypes = {};

export default BalanceComponent;
