import PropTypes from "prop-types";
import sprite from "components/images/image-sprite.svg";

const SpriteIcon = ({ name, ...props }) => {
  return (
    <svg {...props}>
      <use xlinkHref={`${sprite}#${name}`} />
    </svg>
  );
};

SpriteIcon.propTypes = {};

export default SpriteIcon;
