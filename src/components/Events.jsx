import React from "react";

const Events = ({ setDates, selectedDay, dates, events, setEvents }) => {
  const datesFind = dates.find(
    (element) =>
      element.date.toDate().toDateString() ===
      selectedDay.toDate().toDateString()
  );

  const eventContent = datesFind.event;
  const editEvent = () => {
    setDates((oldDates) =>
      oldDates.map((date) => {
        return date === datesFind ? { ...date, event: "I have changed" } : date;
      })
    );
  };
  return (
    <div className=" h-4/6 w-96 px-5 pt-11">
      <h1 className="font-semibold">
        Schedule for {selectedDay.toDate().toDateString()}
      </h1>
      <div
        className="pt-3"
        onClick={() => {
          editEvent();
        }}
      >
        {eventContent}
      </div>
    </div>
  );
};

export default Events;
