import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  useSigninMutation,
  useLoginMutation,
  useLogoutMutation,
} from "redux/auth/authApiSlice";
import {
  StyledAuthInput,
  StyledAuthForm,
  StyledLogo,
  StyledAuth,
  StyledTextGoogle,
  StyledGoogleBtn,
  StyledTextInfo,
  StyledTextEmail,
} from "./StyledAuthView";
import LogoMobile from "../../../src/components/images/mainLogoMob.svg";

const AuthView = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [messageRequired, setMessageRequired] = useState(false);

  const [signin] = useSigninMutation();
  const [login] = useLoginMutation();
  const [logout] = useLogoutMutation();

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
    <>
      <StyledLogo src={LogoMobile} alt="Logo" />
      <StyledAuth>
        <StyledAuthForm>
          <StyledTextGoogle>
            Вы можете авторизоваться с помощью Google Account:
          </StyledTextGoogle>
          <StyledGoogleBtn>Google</StyledGoogleBtn>
          <StyledTextInfo>
            Или зайти с помощью e-mail и пароля, предварительно
            зарегистрировавшись:
          </StyledTextInfo>
          <StyledTextEmail>Электронная почта:</StyledTextEmail>
          <StyledAuthInput
            required
            type="email"
            name="email"
            value={email}
            placeholder="your@email.com"
            onChange={handleChange}
            onBlur={validateEmail}
          />
          {emailError && <p>Неправильный формат email</p>}
          {messageRequired && <p>это обязательное поле</p>}
          <StyledTextEmail>Пароль:</StyledTextEmail>
          <StyledAuthInput
            required
            type="password"
            name="password"
            value={password}
            placeholder="Пароль"
            onChange={handleChange}
          />
          {messageRequired && <p>это обязательное поле</p>}
          <button type="button" onClick={handleLogin}>
            Login
          </button>
          <button type="button" onClick={handleRegistration}>
            Registration
          </button>
        </StyledAuthForm>
      </StyledAuth>
    </>
  );
};

export default AuthView;
