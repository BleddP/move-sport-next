const EventsPerMonth = ({ events }) => {
  return (
    <div className="events-per-month">
      <div className="month">
        <h2>Nov '21</h2>
      </div>
      <div className="events-overview">
        {events.map((event) => {
          return (
            <div key={event.id} className="event-info">
              <div className="event-info__icon">Icon</div>
              <div className="event-info__content">
                <h4>{event.title}</h4>
                <span>Evenement: 21 November 2021</span>
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
