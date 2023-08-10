import { useEffect, useState } from "react";

import {
  StyledSliderTitle,
  StyledSliderBox,
  StyledSliderButton,
  StyledSliderDateText,
  StyledSlider,
} from "./StyledSliderDate";

import ArrowRight from "../../images/arrowRight.svg";
import ArrowLeft from "../../images/arrowLeft.svg";

const monthsArr = [
  { id: 1, label: "январь" },
  { id: 2, label: "февраль" },
  { id: 3, label: "март" },
  { id: 4, label: "апрель" },
  { id: 5, label: "май" },
  { id: 6, label: "июнь" },
  { id: 7, label: "июль" },
  { id: 8, label: "август" },
  { id: 9, label: "сентябрь" },
  { id: 10, label: "октябрь" },
  { id: 11, label: "ноябрь" },
  { id: 12, label: "декабрь" },
];

const SliderDate = ({ periodDate }) => {
  const [month, setMonth] = useState(
    monthsArr.find((el) => el.id === new Date().getMonth() + 1)
  );
  const [year, setYear] = useState(new Date().getFullYear());

  const clickArrowRight = () => {
    if (month.id === 1) {
      setMonth(monthsArr[11]);
      setYear(year - 1);
    } else {
      setMonth(monthsArr.find((el) => el.id === month.id - 1));
    }
  };

  const clickArrowLeft = () => {
    if (month.id === 12) {
      setMonth(monthsArr[0]);
      setYear(year + 1);
    } else {
      setMonth(monthsArr.find((el) => el.id === month.id + 1));
    }
  };

  const selectedDate = `${year}-${month.id.toString().padStart(2, "0")}`;

  useEffect(() => {
    periodDate(selectedDate);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedDate]);

  return (
    <StyledSlider>
      <StyledSliderTitle>Текущий период</StyledSliderTitle>
      <StyledSliderBox>
        <StyledSliderButton onClick={clickArrowRight}>
          <img src={ArrowLeft} alt="go to previous month icon"></img>
        </StyledSliderButton>

        <StyledSliderDateText>
          {month?.label} {year}
        </StyledSliderDateText>

        <StyledSliderButton onClick={clickArrowLeft}>
          <img src={ArrowRight} alt="go to previous month icon"></img>
        </StyledSliderButton>
      </StyledSliderBox>
    </StyledSlider>
  );
};

export default SliderDate;
