import { StyledHomePageNav, StyledNavLink } from "./StyledHomePageNav";

const HomePageNav = () => {
  return (
    <StyledHomePageNav>
      <StyledNavLink to={"/add-expence"}>РАСХОД</StyledNavLink>
      <StyledNavLink to={"/add-income"}>ДОХОД</StyledNavLink>
    </StyledHomePageNav>
  );
};

export default HomePageNav;
