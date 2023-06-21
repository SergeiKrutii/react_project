import PropTypes from "prop-types";
import Button from "../button/Button";

const BalanceComponent = ({ balance, btnAction }) => {
  return (
    <div>
      <p>Баланс:</p>
      <div>
        <span>{balance}</span>
        <Button btnText={"ПОДТВЕРДИТЬ"} btnAction={() => {}} />
      </div>
    </div>
  );
};

BalanceComponent.propTypes = {
  balance: PropTypes.string.isRequired,
};

export default BalanceComponent;
