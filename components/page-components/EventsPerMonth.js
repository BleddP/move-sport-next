import moment from 'moment'

const EventsPerMonth = ({ events }) => {
  return (
    <div className="events-per-month">
      <div className="month">
        <h2>{events.month.substring(0,3)} &apos;{events.year.substring(2,4)}</h2>
      </div>
      <div className="events-overview">
        {events.events.map((event) => {
          return (
            <div key={event.id} className="event-info">
              <div className="event-info__icon">Icon</div>
              <div className="event-info__content">
                <h4>{event.title}</h4>
                <span>Evenement: {moment(event.date).format('DD MMMM YYYY')}</span>
                <span>{event.location}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EventsPerMonth;
