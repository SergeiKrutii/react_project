import { category } from "./ChartList";
import SpriteIcon from "../spriteIcon/SpriteIcon";
import ArrowRight from "../../images/arrowRight.svg";
import ArrowLeft from "../../images/arrowLeft.svg";

import {
  StyledSliderBox,
  StyledSliderButton,
  StyledSliderDateText,
  StyledSlider,
} from "../SliderDate/StyledSliderDate";

import {
  StyledCategoryList,
  StyledSliderChartBox,
  StyledCategoryName,
  StyledCategoryTotal,
  StyledCategoryItem,
  StyledCategoryIcon,
  StyledCategoryBg,
  StyledCategoryBlock,
} from "./StyledChartCategory";

const ChartCategory = ({
  typeOfTransactions,
  typeOfCategory,
  arrayTransactionsMonth,
  handleChangeCategory,
  toggleActiveCategory,
}) => {
  // eslint-disable-next-line array-callback-return
  const markup = category.map(({ title, name }) => {
    const card = arrayTransactionsMonth.find((item) => item[0] === title);

    if (card) {
      return (
        <StyledCategoryItem
          onClick={toggleActiveCategory}
          key={title}
          data-id={title}
        >
          <StyledCategoryTotal>{card[1].total + ".00"}</StyledCategoryTotal>

          <StyledCategoryIcon>
            <SpriteIcon
              name={name}
              style={{
                width: "56px",
                height: "56px",
                fill: typeOfCategory === title ? "#FF751D" : undefined,
              }}
            />
          </StyledCategoryIcon>

          <StyledCategoryName>{title}</StyledCategoryName>

          <StyledCategoryBg
            style={{
              backgroundColor: typeOfCategory === title ? "#FFDAC0" : undefined,
            }}
          />
        </StyledCategoryItem>
      );
    }
    return null;
  });

  return (
    <StyledCategoryBlock>
      <StyledSliderChartBox>
        <StyledSlider style={{ marginBottom: 0 }}>
          <StyledSliderBox>
            <StyledSliderButton onClick={handleChangeCategory}>
              <img src={ArrowLeft} alt="go to previous month icon"></img>
            </StyledSliderButton>

            <StyledSliderDateText>{typeOfTransactions}</StyledSliderDateText>

            <StyledSliderButton onClick={handleChangeCategory}>
              <img src={ArrowRight} alt="go to previous month icon"></img>
            </StyledSliderButton>
          </StyledSliderBox>
        </StyledSlider>
      </StyledSliderChartBox>

      <StyledCategoryList>{markup}</StyledCategoryList>
    </StyledCategoryBlock>
  );
};

export default ChartCategory;
