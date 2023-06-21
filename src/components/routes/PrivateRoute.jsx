import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import authSelectors from "redux/auth/authSelectors";

export const PrivateRoute = ({ component: Component, redirectTo = "/" }) => {
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
