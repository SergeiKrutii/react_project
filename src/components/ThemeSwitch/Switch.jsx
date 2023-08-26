import React from "react";

import { SwitchWrapper } from "./StyledSwitch";
import { SwitchButton } from "./StyledSwitch";

const Switch = ({ isOn, handleToggle }) => {
  return (
    <SwitchWrapper isOn={isOn} onClick={handleToggle}>
      <SwitchButton isOn={isOn} />
    </SwitchWrapper>
  );
};

export default Switch;
