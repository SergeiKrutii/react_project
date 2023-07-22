import { StyledPopUp, StyledPopUpText } from "./StyledPopUp";

const PopUp = () => {
  return (
    <StyledPopUp>
      <StyledPopUpText className="textField">
        Привет! Для начала работы внеси текущий баланс своего счета!
      </StyledPopUpText>
      <StyledPopUpText>
        Ты не можешь тратить деньги пока их у тебя нет :)
      </StyledPopUpText>
    </StyledPopUp>
  );
};

export default PopUp;
