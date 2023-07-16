import { useSelector } from "react-redux";
import authSelectors from "redux/auth/authSelectors";
import { Navigate, Outlet } from "react-router-dom";
import { useMatchMedia } from "helpers/mediaQuery";

const PublicRoute = () => {
  const { isMobile } = useMatchMedia();

  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);
  console.log("Public", isLoggedIn);

  return <>{isLoggedIn ? <Navigate to="/home/expence" /> : <Outlet />}</>;
};

export default PublicRoute;
