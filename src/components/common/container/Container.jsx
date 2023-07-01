import { StyledContainer } from "./StyledContainer";
import { useSelector } from "react-redux";
import authSelectors from "redux/auth/authSelectors";
import MainBg from "./MainBg/MainBg";
import AuthBg from "./AuthBg/AuthBg";

const Container = ({ children }) => {
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);

  return (
    <>
      {isLoggedIn ? (
        <MainBg>
          <StyledContainer>{children}</StyledContainer>
        </MainBg>
      ) : (
        <AuthBg>
          <StyledContainer>{children}</StyledContainer>
        </AuthBg>
      )}
    </>
  );
};

Container.propTypes = {};

export default Container;
