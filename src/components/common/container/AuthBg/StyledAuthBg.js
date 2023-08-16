import styled from "styled-components";
import Capusta1x from "../../../images/capusta_1x.svg";
import Capusta05x from "../../../images/kapusta_0.5x.svg";
import CapustaGroup from "../../../images/groupbottom.svg";
import GroupTopDesk from "../../../images/groupcapustadesk.svg";

export const StyledAuthBg = styled.div(() => ({
  position: "relative",
  height: 800,

  "@media(min-width: 768px)": {
    height: 968,
  },

  "@media(min-width: 1280px)": {
    height: 794,
    overflowX: "hidden",
  },
}));

export const StyledCapustaTop = styled.div(() => ({
  backgroundImage: `url(${Capusta05x})`,
  position: "absolute",
  width: 83,
  height: 89,
  top: 104,
  right: -35,
  backgroundRepeat: "no-repeat",
  zIndex: -3,

  "@media(min-width: 768px)": {
    backgroundImage: `url(${GroupTopDesk})`,
    width: "100%",
    height: 232,
    backgroundRepeat: "repeat-x",
    zIndex: -3,
    top: 28,
    left: 10,
  },
}));

export const StyledCapustaBottom = styled.div(() => ({
  backgroundImage: `url(${Capusta1x})`,
  position: "absolute",
  width: 83,
  height: 89,
  bottom: 0,
  left: 35,
  zIndex: -3,

  "@media(min-width: 768px)": {
    backgroundImage: `url(${CapustaGroup})`,
    width: 183,
    height: 142,
    left: 103,
    bottom: 53,
  },

  "@media(min-width: 1280px)": {
    width: 183,
    height: 142,
    left: 230,
    bottom: 50,
  },
}));
