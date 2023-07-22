import {
  StyledNotFoundView,
  StyledNotMessage,
  StyledNotText,
  StyledNavLink,
} from "./StyledNotFoundView";

const NotFoundView = (props) => {
  return (
    <StyledNotFoundView>
      <StyledNotMessage>
        <StyledNotText>Такой страницы не существует!</StyledNotText>
        <StyledNavLink to="/">Вернуться на Главную</StyledNavLink>
      </StyledNotMessage>
    </StyledNotFoundView>
  );
};

export default NotFoundView;
