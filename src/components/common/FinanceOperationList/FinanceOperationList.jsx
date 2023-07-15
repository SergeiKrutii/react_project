import PropTypes from "prop-types";
import SpriteIcon from "../spriteIcon/SpriteIcon";
import {
  StyledFinanceOperationList,
  StyledFinanceItem,
  StyledFinanceTitle,
  StyledFinanceInfo,
  StyledFinanceSumm,
  StyledFinanceButton,
  StyledFinanceDiv,
} from "./StyledFinanceOperationList";

const FinanceOperationList = (props) => {
  return (
    <StyledFinanceOperationList>
      <StyledFinanceItem>
        <div>
          <StyledFinanceTitle>Метро</StyledFinanceTitle>
          <div style={{ display: "flex" }}>
            <StyledFinanceInfo style={{ marginRight: "20px" }}>
              05.09.2019
            </StyledFinanceInfo>
            <StyledFinanceInfo>Транспорт</StyledFinanceInfo>
          </div>
        </div>
        <StyledFinanceDiv>
          <StyledFinanceSumm>-30.00 грн</StyledFinanceSumm>
          <StyledFinanceButton>
            <SpriteIcon
              name={"icon-delete"}
              style={{ width: "18px", height: "18px" }}
            />
          </StyledFinanceButton>
        </StyledFinanceDiv>
      </StyledFinanceItem>
      <StyledFinanceItem>
        <div>
          <StyledFinanceTitle>Метро</StyledFinanceTitle>
          <div style={{ display: "flex" }}>
            <StyledFinanceInfo style={{ marginRight: "20px" }}>
              05.09.2019
            </StyledFinanceInfo>
            <StyledFinanceInfo>Транспорт</StyledFinanceInfo>
          </div>
        </div>
        <StyledFinanceDiv>
          <StyledFinanceSumm>-30.00 грн</StyledFinanceSumm>
          <StyledFinanceButton>
            <SpriteIcon
              name={"icon-delete"}
              style={{ width: "18px", height: "18px" }}
            />
          </StyledFinanceButton>
        </StyledFinanceDiv>
      </StyledFinanceItem>
      <StyledFinanceItem>
        <div>
          <StyledFinanceTitle>Метро</StyledFinanceTitle>
          <div style={{ display: "flex" }}>
            <StyledFinanceInfo style={{ marginRight: "20px" }}>
              05.09.2019
            </StyledFinanceInfo>
            <StyledFinanceInfo>Транспорт</StyledFinanceInfo>
          </div>
        </div>
        <StyledFinanceDiv>
          <StyledFinanceSumm>-30.00 грн</StyledFinanceSumm>
          <StyledFinanceButton>
            <SpriteIcon
              name={"icon-delete"}
              style={{ width: "18px", height: "18px" }}
            />
          </StyledFinanceButton>
        </StyledFinanceDiv>
      </StyledFinanceItem>
    </StyledFinanceOperationList>
  );
};

FinanceOperationList.propTypes = {};

export default FinanceOperationList;
