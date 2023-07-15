import { StyledContainer, StyledContainerAuth } from "./StyledContainer";
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
          <StyledContainerAuth>{children}</StyledContainerAuth>
        </AuthBg>
      )}
    </>
  );
};

export default Container;
