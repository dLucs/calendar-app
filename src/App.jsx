import dayjs from "dayjs";
import React, { useState, useEffect } from "react";
import { Calendar } from "./components/Calendar";
import Events from "./components/Events";
import { generateDates } from "./utilities/calendar";
const currentDate = dayjs();
const App = () => {
  const updateEvents = () => {
    const events = [];

    dates.forEach(({ date }) => {
      events.push({
        id: date.toDate().toDateString(),
        scheduledEvent: ["lala"],
      });
    });

    return events;
  };
  const storedEvents = JSON.parse(localStorage.getItem("events")) || [];
  const [loading, setLoading] = useState(true);
  const [today, setToday] = useState(currentDate);
  const [selectedDay, setSelectedDay] = useState(currentDate);
  const [dates, setDates] = useState(
    generateDates(today.month(), today.year())
  );
  const [events, setEvents] = useState(storedEvents);

  useEffect(() => {
    setLoading(true);
    setDates(generateDates(today.month(), today.year()));
    setSelectedDay(today);

    setEvents((prevEvents) =>
      prevEvents.concat(updateEvents()).reduce((unique, o) => {
        if (!unique.some((obj) => obj.id === o.id)) {
          unique.push(o);
        }
        return unique;
      }, [])
    );
  }, [today]);
  useEffect(() => {
    setEvents((prevEvents) =>
      prevEvents.concat(updateEvents()).reduce((unique, o) => {
        if (!unique.some((obj) => obj.id === o.id)) {
          unique.push(o);
        }
        return unique;
      }, [])
    );
    setLoading(false);
  }, [dates]);

  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(events));
  }, [events]);

  console.log(events);

  return (
    <div className="flex flex-col lg:w-1/2 lg:flex-row md:flex-col sm:flex-col pt-10 lg:mx-auto divide-y-2 lg:divide-y-0 lg:divide-x-2 gap-10 h-screen items-center">
      <Calendar
        today={today}
        setToday={setToday}
        currentDate={currentDate}
        setSelectedDay={setSelectedDay}
        selectedDay={selectedDay}
        dates={dates}
        setDates={setDates}
        events={events}
        loading={loading}
      />
      <Events
        selectedDay={selectedDay}
        today={today}
        dates={dates}
        setDates={setDates}
        events={events}
        setEvents={setEvents}
      />
    </div>
  );
};

export default App;
