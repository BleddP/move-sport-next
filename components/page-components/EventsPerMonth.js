// Next
import Image from "next/image";

// Libs
import moment from "moment";

// Icons
import Calendar from "@assets/icons/calendar.svg";
import Article from "@assets/icons/article.svg";
import Blog from "@assets/icons/blog.svg";

const Event = ({ event }) => {

  console.log(event.type)

  let icon = Calendar;
  switch (event.type) {
    case "event":
      icon = Calendar;
      break;

    case "article":
      icon = Article;

    case "blog":
      icon = Blog;
  }

  return (
    <div key={event.id} className="event-info">
      <div className="event-info__icon">
        <Image src={icon} width={48} height={48} />
      </div>
      <div className="event-info__content">
        <h4>{event.title}</h4>
        <span>Evenement: {moment(event.date).format("DD MMMM YYYY")}</span>
        <span>{event.location}</span>
      </div>
    </div>
  );
};

const EventsPerMonth = ({ events }) => {
  return (
    <div className="events-per-month">
      <div className="month">
        <h2>
          {events.month.substring(0, 3)} &apos;{events.year.substring(2, 4)}
        </h2>
      </div>
      <div className="events-overview">
        {events.events.map((event) => {
          return <Event key={event.id} event={event} />;
        })}
      </div>
    </div>
  );
};

export default EventsPerMonth;
