import { StyledPopUp } from "./StyledPopUp";

const PopUp = () => {
  return (
    <StyledPopUp>
      <p className="textField">
        Привет! Для начала работы внеси текущий баланс своего счета!
      </p>
      <p>Ты не можешь тратить деньги пока их у тебя нет :)</p>
    </StyledPopUp>
  );
};

export default PopUp;
