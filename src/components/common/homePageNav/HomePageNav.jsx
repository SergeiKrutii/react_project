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
          <StyledMobNavLink to={"expence"}>РАСХОД</StyledMobNavLink>
          <StyledMobNavLink to={"income"}>ДОХОД</StyledMobNavLink>
        </StyledHomePageNav>
      )}

      {isTablet && (
        <StyledHomePageNav>
          <StyledTabNavLink to={"expence"} className={"active"}>
            РАСХОД
          </StyledTabNavLink>
          <StyledTabNavLink to={"income"} className={"active"}>
            ДОХОД
          </StyledTabNavLink>
        </StyledHomePageNav>
      )}
    </>
  );
};

export default HomePageNav;
