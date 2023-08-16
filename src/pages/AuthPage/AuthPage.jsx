import { useState } from "react";
import { useSigninMutation, useLoginMutation } from "redux/auth/authApiSlice";
import SpriteIcon from "components/common/spriteIcon/SpriteIcon";

import { toast } from "react-toastify";
import Button from "components/common/button/Button";

import {
  StyledAuthInput,
  StyledAuthForm,
  StyledLogo,
  StyledAuth,
  StyledTextGoogle,
  StyledGoogleBtn,
  StyledTextInfo,
  StyledTextInput,
  StyledButtonBox,
  StyledErrorText,
} from "./StyledAuthView";

import LogoMobile from "../../../src/components/images/mainLogoMob.svg";

const AuthView = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");
  const [googleError, setGoogleError] = useState(false);

  const [signin] = useSigninMutation();
  const [login] = useLoginMutation();

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
    !validateEmail(email)
      ? setEmailErrorMessage("Некорректно введен e-mail.")
      : setEmailErrorMessage("");

    !validatePassword(password)
      ? setPasswordErrorMessage("Пароль должен быть от 4 до 16 символов.")
      : setPasswordErrorMessage("");

    if (validateEmail(email) && validatePassword(password)) {
      login({ email, password });
    }
  };

  const handleRegistration = async () => {
    !validateEmail(email)
      ? setEmailErrorMessage("Некорректно введен e-mail.")
      : setEmailErrorMessage("");

    !validatePassword(password)
      ? setPasswordErrorMessage("Пароль должен быть от 4 до 16 символов.")
      : setPasswordErrorMessage("");

    if (validateEmail(email) && validatePassword(password)) {
      await signin({ email, password });
      toast.success("Вы успешно зарегистрировались!");
      setTimeout(() => {
        login({ email, password });
      }, 500);
    }
  };

  const validateEmail = () => {
    const pattern =
      /^(([^<>()[\]\\.,;:\s@']+(\.[^<>()[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return pattern.test(email);
  };

  const validatePassword = (password) => {
    return Boolean(password.length > 3 && password.length < 17);
  };

  return (
    <>
      <StyledAuth>
        <StyledLogo src={LogoMobile} alt="Logo" />
        <StyledAuthForm>
          <StyledTextGoogle>
            Вы можете авторизоваться с помощью <br /> Google Account:
          </StyledTextGoogle>
          <StyledGoogleBtn type="button" onClick={() => setGoogleError(true)}>
            <SpriteIcon
              name={"icon-google-symbol"}
              style={{ marginRight: 9 }}
            />
            Google
          </StyledGoogleBtn>
          {googleError && (
            <StyledErrorText>Сервис, временно не доступен!</StyledErrorText>
          )}
          <StyledTextInfo>
            Или зайти с помощью e-mail и пароля, предварительно
            зарегистрировавшись:
          </StyledTextInfo>
          <StyledTextInput>Электронная почта:</StyledTextInput>
          <StyledAuthInput
            required
            type="email"
            name="email"
            value={email}
            placeholder="your@email.com"
            autoComplete="on"
            onChange={handleChange}
            onBlur={validateEmail}
          />
          <StyledErrorText>{emailErrorMessage}</StyledErrorText>
          <StyledTextInput>Пароль:</StyledTextInput>
          <StyledAuthInput
            required
            type="password"
            name="password"
            value={password}
            placeholder="Пароль"
            autoComplete="on"
            onChange={handleChange}
          />
          <StyledErrorText>{passwordErrorMessage}</StyledErrorText>
          <StyledButtonBox>
            <Button btnText="Login" btnAction={handleLogin} />
            <Button btnText="Registration" btnAction={handleRegistration} />
          </StyledButtonBox>
        </StyledAuthForm>
      </StyledAuth>
    </>
  );
};

export default AuthView;
