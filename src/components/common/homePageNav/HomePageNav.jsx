import { useMatchMedia } from "helpers/mediaQuery";
import {
  StyledHomePageNav,
  StyledMobNavLink,
  StyledTabNavLink,
} from "./StyledHomePageNav";

const HomePageNav = () => {
  const { isDesktop, isTablet, isMobile } = useMatchMedia();

  return (
    <>
      {isMobile && (
        <StyledHomePageNav>
          <StyledMobNavLink to={"/add-expence"}>РАСХОД</StyledMobNavLink>
          <StyledMobNavLink to={"/add-income"}>ДОХОД</StyledMobNavLink>
        </StyledHomePageNav>
      )}

      {isTablet && (
        <StyledHomePageNav>
          <StyledTabNavLink to={"/add-expence"} className={"active"}>
            РАСХОД
          </StyledTabNavLink>
          <StyledTabNavLink to={"/add-income"} className={"active"}>
            ДОХОД
          </StyledTabNavLink>
        </StyledHomePageNav>
      )}
    </>
  );
};

export default HomePageNav;
