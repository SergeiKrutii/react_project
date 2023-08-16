import SpriteIcon from "../spriteIcon/SpriteIcon";
import { useEffect, useState } from "react";
import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";
import {
  StyledCalendarComponent,
  StyledCalendar,
  StyledDate,
} from "./StyledCalendar";

const CalendarComponent = ({ onUserData }) => {
  const [onShow, setOnShow] = useState(false);
  const [value, setValue] = useState(new Date());

  useEffect(() => {
    onUserData(transactionDate(value));
  }, [onUserData, value]);

  const handleToggleCalendar = () => {
    setOnShow(!onShow);
  };

  const onChangeDate = (newDate) => {
    setValue(newDate);
    setOnShow(!onShow);
  };

  function formatDate(date) {
    let month = "" + (date.getMonth() + 1);
    let day = "" + date.getDate();
    let year = date.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [day, month, year].join(".");
  }

  function transactionDate(date) {
    let month = "" + (date.getMonth() + 1);
    let day = "" + date.getDate();
    let year = date.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
  }

  return (
    <div style={{ position: "relative" }}>
      <StyledCalendar onClick={handleToggleCalendar}>
        <SpriteIcon
          name={"icon-calendar"}
          style={{ width: "20px", height: "20px", marginRight: "10px" }}
        ></SpriteIcon>
        <StyledDate>{formatDate(value)}</StyledDate>
      </StyledCalendar>

      {onShow && (
        <StyledCalendarComponent>
          <Calendar
            style={{ width: "100px" }}
            onClickDay={onChangeDate}
            onChange={onChangeDate}
            value={value}
          />
        </StyledCalendarComponent>
      )}
    </div>
  );
};

export default CalendarComponent;
