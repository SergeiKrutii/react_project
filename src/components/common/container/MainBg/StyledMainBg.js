import styled from "styled-components";
import CapustaGroup from "../../../images/groupbottom.svg";
import GroupBottom from "../../../images/mainBottomCapusta.svg";

export const StyledMainBg = styled.div(() => ({
  position: "relative",
  minHeight: 511,

  "@media(min-width: 768px)": {
    minHeight: 968,
  },

  "@media(min-width: 1280px)": {
    minHeight: 794,
    overflowX: "hidden",
  },
}));

export const StyledCapustaBottom = styled.div(() => ({
  "@media(min-width: 768px)": {
    backgroundImage: `url(${CapustaGroup})`,
    position: "absolute",
    width: 183,
    height: 142,
    bottom: 64,
    right: 88,
    zIndex: -3,
  },

  "@media(min-width: 1280px)": {
    backgroundImage: `url(${GroupBottom})`,
    width: "100%",
    height: 195,
    backgroundRepeat: "repeat-x",
    zIndex: -3,
    bottom: 0,
    left: 10,
  },
}));
