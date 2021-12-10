// React
import { useState } from "react";

// Libs
import moment from "moment";

// Components
import EventsPerMonth from "./EventsPerMonth";

const Events = ({ events }) => {
  const [eventFilter, setEventFilter] = useState("");

  let filteredEvents = events;
  filteredEvents = events.filter((event) => {
    if (eventFilter !== "") {
      return event.type === eventFilter;
    } else {
      return event;
    }
  });

  filteredEvents.sort(function (a, b) {
    return a.date - b.date;
  });

  const parsedDates = filteredEvents.map((event) => {
    const day = moment(event.date).format(" DD");
    const month = moment(event.date).format("MMMM");
    const year = moment(event.date).format("YYYY");
    return {
      ...event,
      parsedDate: {
        day,
        month,
        year,
      },
    };
  });

  const allMonths = parsedDates.map(
    (event) => `${event.parsedDate.month}-${event.parsedDate.year}`
  );
  const unique = [...new Set(allMonths)];

  const perMonth = unique.map((date) => {
    const events = parsedDates.filter(
      (event) => `${event.parsedDate.month}-${event.parsedDate.year}` === date
    );
    return {
      month: date.split("-")[0],
      year: date.split("-")[1],
      events,
    };
  });

  return (
    <section className="events">
      <div className="container container--96">
        <div className="events__intro">
          <h1>Agenda</h1>
          <p>Staat jou workshop er niet tussen? Neem dan contact met ons op</p>
        </div>
        <div className="events__overview">
          <div className="events__overview__filter">
            <select
              defaultValue={""}
              onChange={(e) => setEventFilter(e.target.value)}
            >
              <option value="">Alles tonen</option>
              <option value="event">Evenement</option>
              <option value="article">Artikel</option>
              <option value="blog">Blog</option>
            </select>
          </div>
          <div className="events__overview__events">
            {perMonth.map((eventsThisMonth, key) => {
              return <EventsPerMonth key={key} events={eventsThisMonth} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
