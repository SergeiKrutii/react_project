import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import {
  useSigninMutation,
  useLoginMutation,
  useLogoutMutation,
  useRefreshMutation,
} from "redux/auth/authApiSlice";
import {
  selectSid,
  selectRefresh,
  selectEmail,
} from "redux/auth/authSelectors";

const App = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [messageRequired, setMessageRequired] = useState(false);
  const sid = useSelector(selectSid);
  const refreshToken = useSelector(selectRefresh);

  // const userEmail = useSelector(selectEmail);

  const [signin] = useSigninMutation();
  const [login] = useLoginMutation();
  const [logout] = useLogoutMutation();
  const [refresh] = useRefreshMutation();

  // useEffect(() => {

  //     refresh();
  //
  // }, [refresh]);

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        return;
    }
  };
  const handleLogin = () => {
    if (email === "") {
      setMessageRequired(true);
      return;
    }
    login({ email, password });
    setMessageRequired(false);
  };
  const handleRegistration = () => {
    if (password === "") {
      setMessageRequired(true);
      return;
    }
    signin({ email, password });
    setMessageRequired(false);
  };
  const validateEmail = () => {
    const pattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    const isValid = pattern.test(email);
    setEmailError(!isValid);
  };

  return (
    <div>
      <h1>Auth-Form</h1>
      <input
        required
        type="email"
        name="email"
        value={email}
        onChange={handleChange}
        onBlur={validateEmail}
      />
      {emailError && <p>Неправильный формат email</p>}
      {messageRequired && <p>это обязательное поле</p>}
      <input
        required
        type="password"
        name="password"
        value={password}
        onChange={handleChange}
      />
      {messageRequired && <p>это обязательное поле</p>}
      <button type="button" onClick={handleLogin}>
        Login
      </button>
      <button type="button" onClick={handleRegistration}>
        Registration
      </button>
      <button type="button" onClick={logout}>
        LogOut
      </button>
    </div>
  );
};

App.propTypes = {};

export default App;
