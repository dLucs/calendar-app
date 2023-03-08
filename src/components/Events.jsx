import React from "react";
import { nanoid } from "nanoid";
const Events = ({ selectedDay, events, setEvents }) => {
  const datesFind = events.find(
    (element) => element.id === selectedDay.toDate().toDateString()
  );

  const eventContent = "hi";
  const editEvent = () => {
    setEvents((oldEvents) =>
      oldEvents.map((element) => {
        return element.id === datesFind
          ? { ...id, event: ["I have changed"] }
          : element;
      })
    );
  };
  return (
    <div className=" h-4/6 w-96 px-5 pt-11 flex flex-col">
      <h1 className="font-semibold self-center lg:self-start">
        Schedule for {selectedDay.toDate().toDateString()}
      </h1>
      <div className=" flex flex-col justify-between h-5/6 items-center lg:items-start">
        <div
          className="pt-3"
          onClick={() => {
            editEvent();
          }}
        >
          {eventContent}
        </div>
        <button
          id="open-btn"
          className="bg-white hover:bg-slate-600 hover:text-white transition-all text-gray-800 font-semibold py-1 px-2 border border-slate-800 rounded w-2/3"
        >
          Add Event
        </button>
      </div>
    </div>
  );
};

export default Events;
