// React
import { useState } from "react";

// Libs
import moment from "moment";

// Components
import EventsPerMonth from "./EventsPerMonth";

const Events = ({ events }) => {
  const [eventFilter, setEventFilter] = useState("");

  let filteredEvents = events;
  filteredEvents = events.filter((event: any) => {
    const timestamp = new Date(event.attributes.date)
    event.attributes.timestamp = timestamp
    if (eventFilter !== "") {
      return event.attributes.type === eventFilter;
    } else {
      return event;
    }
  });

  const filterByDate = filteredEvents.sort(function (a: any, b: any) {
    return a.attributes.timestamp - b.attributes.timestamp;
  });

  const parsedDates = filterByDate.map((event: any) => {
    const day = moment(event.attributes.date).format("DD");
    const month = moment(event.attributes.date).format("MMMM");
    const year = moment(event.attributes.date).format("YYYY");
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
    (event: any) => `${event.parsedDate.month}-${event.parsedDate.year}`
  );
  const unique = [...new Set(allMonths)];

  const perMonth = unique.map((date: string) => {
    const events = parsedDates.filter(
      (event: any) => `${event.parsedDate.month}-${event.parsedDate.year}` === date
    );
    return {
      month: date.split("-")[0],
      year: date.split("-")[1],
      events,
    };
  });

  return (
    <section className="events section">
      <div className="container">
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
            {perMonth.length === 0 ? (
              <div className="events__overview__no-results">
                <span>Sorry, we hebben niks voor je kunnen vinden</span>
              </div>
            ) : (
            <div className="events__overview__events">
              {perMonth.map((eventsThisMonth, key) => {
                return <EventsPerMonth key={key} events={eventsThisMonth} />;
            })}
            </div>
            )}
        </div>
      </div>
    </section>
  );
};

export default Events;
