import logoMob from "components/images/mobile_logo.svg";
import { Outlet } from "react-router-dom";
import { StyledContainer } from "./StyledContainer";

const Container = ({ children }) => {
  return (
    <StyledContainer>
      <header>
        <img src={logoMob} alt="logo" />
      </header>
      {children}
      <Outlet />
    </StyledContainer>
  );
};

Container.propTypes = {};

export default Container;
