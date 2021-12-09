// React
import { useState } from "react";

// Libs
import moment from 'moment'

// Components
import EventsPerMonth from "./EventsPerMonth";

const Events = ({events}) => {
    const [eventFilter, setEventFilter] = useState('')

  return (
    <section className="events">
      <div className="container container--96">
          <div className="events__intro">
              <h1>Agenda</h1>
              <p>Staat jou workshop er niet tussen? Neem dan contact met ons op</p>
          </div>
          <div className="events__overview">
            <div className="events__overview__filter">
                <select>
                    <option value='' selected>Alles tonen</option>
                    <option value='event' selected>Evenement</option>
                    <option value='article' selected>Artikel</option>
                    <option value='blog' selected>Blog</option>
                </select>
            </div>
            <div className="events__overview__events">
                <EventsPerMonth events={events} />
            </div>
          </div>
      </div>
    </section>
  );
};

export default Events;
