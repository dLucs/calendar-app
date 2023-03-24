import React from "react";
import { nanoid } from "nanoid";
const Events = ({
  selectedDay,
  events,
  setEvents,
  inputE,
  setInputE,
  loading,
}) => {
  const datesFind = events.find(
    (element) => element.id === selectedDay.toDate().toDateString()
  );

  const eventContent = datesFind.scheduledEvent;
  const listItems = !loading
    ? eventContent.map((e) => (
        <li className="list-none group flex" key={e}>
          {e}
          <button className=" mx-6 border-white    hover:border-red-600 hover:text-red-600 text-sm border text-red-300 py-0 px-1 rounded hidden group-hover:block">
            Delete
          </button>
        </li>
      ))
    : console.log("not loaded");
  const addEvent = (event) => {
    event.preventDefault();
    setEvents((oldEvents) =>
      oldEvents.map((element) => {
        return element.id === datesFind.id
          ? {
              ...element,
              scheduledEvent: [...element.scheduledEvent, inputE],
            }
          : element;
      })
    );
    setInputE("");
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
          {listItems}
        </div>
        <form
          className="w-full max-w-sm"
          onSubmit={(event) => {
            addEvent(event);
          }}
        >
          <div className="flex items-center border-b border-slate-600 py-2">
            <input
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              placeholder="Add New Event..."
              aria-label="Full name"
              onChange={(event) => setInputE(event.target.value)}
              value={inputE}
            />
            <button
              className="flex-shrink-0 bg-white  border-slate-600    hover:bg-slate-600 hover:text-white text-sm border-2 text-slate-600 py-1 px-2 rounded"
              type="submit"
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
