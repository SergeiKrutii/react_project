import { useSelector } from "react-redux";
import authSelectors from "redux/auth/authSelectors";
import { Navigate, Outlet } from "react-router-dom";

const PublicRoute = (props) => {
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);

  return <>{isLoggedIn ? <Navigate to="/home" /> : <Outlet />}</>;
};

export default PublicRoute;
