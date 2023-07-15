import { StyledHomePageNav, StyledNavLink } from "./StyledHomePageNav";

const HomePageNav = () => {
  return (
    <StyledHomePageNav>
      <StyledNavLink to={"/home/add-expence"}>РАСХОД</StyledNavLink>
      <StyledNavLink to={"/home/add-income"}>ДОХОД</StyledNavLink>
    </StyledHomePageNav>
  );
};

export default HomePageNav;
