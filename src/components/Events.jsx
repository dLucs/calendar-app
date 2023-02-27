import React from "react";

const Events = ({ selectedDay }) => {
  return (
    <div className="h-96 w-96 px-5">
      <h1 className="font-semibold">
        Schedule for {selectedDay.toDate().toDateString()}
      </h1>
      <p>No meetings for today</p>
    </div>
  );
};

export default Events;
