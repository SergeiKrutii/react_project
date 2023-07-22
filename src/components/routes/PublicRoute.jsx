import { useSelector } from "react-redux";
import authSelectors from "redux/auth/authSelectors";
import { Navigate, Outlet } from "react-router-dom";
import { useMatchMedia } from "helpers/mediaQuery";

const PublicRoute = () => {
  const { isMobile } = useMatchMedia();

  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);

  return (
    <>
      {isLoggedIn ? (
        <Navigate to={isMobile ? "/home" : "/home/expense"} />
      ) : (
        <Outlet />
      )}
    </>
  );
};

export default PublicRoute;
