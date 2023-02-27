import dayjs from "dayjs";
import React, { useState } from "react";
import { Calendar } from "./components/Calendar";
import Events from "./components/Events";
const currentDate = dayjs();
const App = () => {
  const [today, setToday] = useState(currentDate);
  const [selectedDay, setSelectedDay] = useState(currentDate);

  return (
    <div className="flex w-1/2 mx-auto divide-x-2 gap-10 h-screen items-center">
      <Calendar
        today={today}
        setToday={setToday}
        currentDate={currentDate}
        setSelectedDay={setSelectedDay}
        selectedDay={selectedDay}
      />
      <Events selectedDay={selectedDay} />
    </div>
  );
};

export default App;
