import PropTypes from "prop-types";

const Button = ({ btnText, btnAction }) => {
  return (
    <button type="button" onClick={btnAction}>
      {btnText}
    </button>
  );
};

Button.propTypes = {
  btnText: PropTypes.string.isRequired,
  btnAction: PropTypes.func.isRequired,
};

export default Button;
