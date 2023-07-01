import SpriteIcon from "../spriteIcon/SpriteIcon";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { StyledCalendar, StyledDate } from "./StyledCalendar";
import { usePeriodDataQuery } from "redux/transactions/transactionsApiSlice";

const CalendarComponent = () => {
  const [onShow, setOnShow] = useState(false);
  const [value, setValue] = useState(new Date());

  const handleToggleCalendar = () => {
    setOnShow(!onShow);
  };

  const onChangeDate = (newDate) => {
    setValue(newDate);
    setOnShow(!onShow);
  };

  const formatDate = (date) => {
    let month = "" + (date.getMonth() + 1);
    let day = "" + date.getDate();
    let year = date.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [day, month, year].join(".");
  };

  return (
    <>
      <StyledCalendar onClick={handleToggleCalendar}>
        <SpriteIcon
          name={"icon-calendar"}
          style={{ width: "20px", height: "20px", marginRight: "10px" }}
        ></SpriteIcon>
        <StyledDate>{formatDate(value)}</StyledDate>
      </StyledCalendar>
      {onShow && (
        <Calendar
          style={{ width: "100px" }}
          onClickDay={onChangeDate}
          onChange={onChangeDate}
          value={value}
        />
      )}
    </>
  );
};

export default CalendarComponent;
