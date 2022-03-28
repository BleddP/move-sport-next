// React
import { useState } from "react";

// Libs
import moment from "moment";

// Components
import EventsPerMonth from "./EventsPerMonth";

const Events = ({ events, intro }) => {
  const [eventFilter, setEventFilter] = useState("");
  const [showAllEvents, setShowAllEvents] = useState(false)

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
    return b.attributes.timestamp - a.attributes.timestamp;
  });

  const parsedDates = filterByDate.map((event: any) => {
    const day = moment(event.attributes.date).format("DD");
    const month = moment(event.attributes.date).format("MMMM");
    const year = moment(event.attributes.date).format("YYYY");
    return {
      ...event,
      monthInt: parseInt(moment(event.attributes.date).format("MM")),
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

    const thisMonth = parseInt(moment().format("MM"))
    const thisyear = parseInt(moment().format("YYYY"))
    const showEvents = events.find((event: any) => parseInt(moment(event.attributes.date).format('MM')) + 1 >= thisMonth && parseInt(moment(event.attributes.date).format('YYYY')) >= thisyear)

    return {
      showEvents: showEvents !== undefined,
      date: date,
      month: date.split("-")[0],
      year: date.split("-")[1],
      events,
    };
  });

  const currentEvents = perMonth.filter(event => event.showEvents)

  return (
    <section className="events section">
      <div className="container container--96">
        {intro.title &&
          <div className="events__intro">
            <h1>{intro.title}</h1>
            <p>{intro.intro}</p>
          </div>
        }
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
              {showAllEvents ?
                (perMonth.map((eventsThisMonth, key) => {
                  return <EventsPerMonth key={key} events={eventsThisMonth} />;
                }))
                :
                (currentEvents.map((eventsThisMonth, key) => {
                  return <EventsPerMonth key={key} events={eventsThisMonth} />;
                }))
              }
            </div>
          )}
          {!showAllEvents &&
            <div className="show-more-btn" style={{display: 'flex', justifyContent: 'center'}}>
              <button className="btn btn--primary" onClick={() => setShowAllEvents(true)} style={{ display: 'flex', justifySelf: 'flex-end' }}>Laat alles zien</button>
            </div>
          }
        </div>
      </div>
    </section>
  );
};

export default Events;
