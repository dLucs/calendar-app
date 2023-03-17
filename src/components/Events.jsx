import React from "react";
import { nanoid } from "nanoid";
const Events = ({ selectedDay, events, setEvents }) => {
  const datesFind = events.find(
    (element) => element.id === selectedDay.toDate().toDateString()
  );

  const eventContent = datesFind.scheduledEvent;
  const editEvent = () => {
    setEvents((oldEvents) =>
      oldEvents.map((element) => {
        return element.id === datesFind.id
          ? { ...element, scheduledEvent: ["I have changed"] }
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
        <form className="w-full max-w-sm">
          <div className="flex items-center border-b border-slate-600 py-2">
            <input
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              placeholder="Add New Event..."
              aria-label="Full name"
            />
            <button
              className="flex-shrink-0 bg-white  border-slate-600    hover:bg-slate-600 hover:text-white text-sm border-2 text-slate-600 py-1 px-2 rounded"
              type="button"
            >
              Add Event
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Events;
