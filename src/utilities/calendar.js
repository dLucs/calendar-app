import dayjs from "dayjs";

export const generateDates = (
  month = dayjs().month(),
  year = dayjs().year()
) => {
  const firstDayOfMonth = dayjs().year(year).month(month).startOf("month");
  const lastDayOfMonth = dayjs().year(year).month(month).endOf("month");

  const datesArray = [];

  // Generate prefix days

  for (let i = 1; i < firstDayOfMonth.day(); i++) {
    datesArray.push({
      currentMonth: false,
      date: firstDayOfMonth.day(i),
      event: "Talk to Mum",
    });
  }

  //Generate current month

  for (let i = firstDayOfMonth.date(); i <= lastDayOfMonth.date(); i++) {
    datesArray.push({
      today:
        firstDayOfMonth.date(i).toDate().toDateString() ===
        dayjs().toDate().toDateString(),
      currentMonth: true,
      date: firstDayOfMonth.date(i),
      event: "call annie",
    });
  }
  // Generate suffix days
  const remainingDays = 42 - datesArray.length;

  for (
    let i = lastDayOfMonth.date() + 1;
    i <= lastDayOfMonth.date() + remainingDays;
    i++
  ) {
    datesArray.push({
      currentMonth: false,
      date: lastDayOfMonth.date(i),
      event: "talk to dad",
    });
  }
  return datesArray;
};

export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
