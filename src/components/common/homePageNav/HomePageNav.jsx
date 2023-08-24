import { useMatchMedia } from "helpers/mediaQuery";
import {
  StyledHomePageNav,
  StyledMobNavLink,
  StyledTabNavLink,
} from "./StyledHomePageNav";
import { useTranslation } from "react-i18next";

const HomePageNav = () => {
  const { isDesktop, isTablet, isMobile } = useMatchMedia();
  let deviseSize = isTablet || isDesktop;
  const { t } = useTranslation();

  return (
    <>
      {isMobile && (
        <StyledHomePageNav>
          <StyledMobNavLink to={"/expense"}>{t("expense")}</StyledMobNavLink>
          <StyledMobNavLink to={"/income"}>{t("income")}</StyledMobNavLink>
        </StyledHomePageNav>
      )}

      {deviseSize && (
        <StyledHomePageNav>
          <StyledTabNavLink
            to={"expense"}
            className={(navData) => (navData.isActive ? "active" : "link")}
          >
            {t("expense")}
          </StyledTabNavLink>
          <StyledTabNavLink
            to={"income"}
            className={(navData) => (navData.isActive ? "active" : "link")}
          >
            {t("income")}
          </StyledTabNavLink>
        </StyledHomePageNav>
      )}
    </>
  );
};

export default HomePageNav;
