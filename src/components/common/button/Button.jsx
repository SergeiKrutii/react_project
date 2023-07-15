import PropTypes from "prop-types";
import { SyledButton } from "./StyledButton";

const Button = ({ btnText, btnAction, ...props }) => {
  return (
    <SyledButton {...props} type="button" onClick={btnAction}>
      {btnText}
    </SyledButton>
  );
};

Button.propTypes = {
  btnText: PropTypes.string.isRequired,
  btnAction: PropTypes.func.isRequired,
};

export default Button;
