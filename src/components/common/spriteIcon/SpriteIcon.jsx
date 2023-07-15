import PropTypes from "prop-types";
import sprite from "components/images/image-sprite.svg";
import { StyledSvg } from "./StyledSpriteIcon";

const SpriteIcon = ({ name, ...props }) => {
  return (
    <StyledSvg {...props}>
      <use xlinkHref={`${sprite}#${name}`} />
    </StyledSvg>
  );
};

SpriteIcon.propTypes = {};

export default SpriteIcon;
