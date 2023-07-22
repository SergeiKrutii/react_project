import { useMatchMedia } from "helpers/mediaQuery";
import {
  StyledHomePageNav,
  StyledMobNavLink,
  StyledTabNavLink,
} from "./StyledHomePageNav";

const HomePageNav = () => {
  const { isDesktop, isTablet, isMobile } = useMatchMedia();
  let deviseSize = isTablet || isDesktop;

  return (
    <>
      {isMobile && (
        <StyledHomePageNav>
          <StyledMobNavLink to={"expense"}>РАСХОД</StyledMobNavLink>
          <StyledMobNavLink to={"income"}>ДОХОД</StyledMobNavLink>
        </StyledHomePageNav>
      )}

      {deviseSize && (
        <StyledHomePageNav>
          <StyledTabNavLink
            to={"expense"}
            className={(navData) => (navData.isActive ? "active" : "link")}
          >
            РАСХОД
          </StyledTabNavLink>
          <StyledTabNavLink
            to={"income"}
            className={(navData) => (navData.isActive ? "active" : "link")}
          >
            ДОХОД
          </StyledTabNavLink>
        </StyledHomePageNav>
      )}
    </>
  );
};

export default HomePageNav;
