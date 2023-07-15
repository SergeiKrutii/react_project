import { useSelector } from "react-redux";
import authSelectors from "redux/auth/authSelectors";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = (props) => {
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);

  return <>{!isLoggedIn ? <Navigate to="/auth" /> : <Outlet />}</>;
};

export default PrivateRoute;
