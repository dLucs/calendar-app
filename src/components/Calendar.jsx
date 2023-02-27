import React from "react";
import { generateDates, months } from "../utilities/calendar";
import cn from "../utilities/conditional";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import dayjs from "dayjs";

export const Calendar = ({
  today,
  setToday,
  currentDate,
  setSelectedDay,
  selectedDay,
}) => {
  const dayNamesArray = ["M", "T", "W", "T", "F", "S", "S"];
  const dayNames = dayNamesArray.map((name, index) => {
    return (
      <h1 key={index} className="h-14 grid place-content-center text-sm">
        {name}
      </h1>
    );
  });
  const dates = generateDates(today.month(), today.year()).map(
    ({ date, currentMonth, today }, index) => {
      return (
        <div
          className="h-14 border-t grid place-content-center text-sm"
          key={index}
        >
          <h1
            className={cn(
              currentMonth ? "" : "text-gray-400",
              today ? "bg-red-600 text-white" : "",
              selectedDay.toDate().toDateString() ===
                date.toDate().toDateString()
                ? "bg-slate-600 text-white"
                : "",
              "h-10 w-10 grid place-content-center rounded-full hover:bg-slate-600 hover:text-white transition-all cursor-pointer"
            )}
            onClick={() => setSelectedDay(date)}
          >
            {date.date()}
          </h1>
        </div>
      );
    }
  );

  return (
    <div className="w-96 h-96">
      <div className="flex justify-between">
        <h1 className="font-semibold">
          {months[today.month()]}, {today.year()}
        </h1>
        <div className="flex items-center gap-5">
          <GrFormPrevious
            className="w-5 h-5 cursor-pointer"
            onClick={() => {
              setToday(today.month(today.month() - 1));
            }}
          />
          <h1
            className="cursor-pointer"
            onClick={() => {
              setToday(currentDate);
            }}
          >
            Today
          </h1>
          <GrFormNext
            className="w-5 h-5 cursor-pointer"
            onClick={() => {
              setToday(today.month(today.month() + 1));
            }}
          />
        </div>
      </div>
      <div className="w-full grid grid-cols-7 text-gray-500">{dayNames}</div>
      <div className="w-full grid grid-cols-7">{dates}</div>
    </div>
  );
};
