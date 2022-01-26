// Next
import Image from "next/image";

// Libs
import moment from "moment";
import { useSpring, animated } from 'react-spring'

// Icons
import Calendar from "@assets/icons/calendar.svg";
import Article from "@assets/icons/article.svg";
import Blog from "@assets/icons/blog.svg";

const Event = ({ event, index }) => {

  const transition = useSpring({ 
    delay: index * 200,
    from: {
      opacity: 0,
      y: 48 
    },
    to: {
      opacity: 1,
      y: 0
    }
   })

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
    <animated.div style={transition} key={event.id} className="event-info">
      <div className="event-info__icon">
        <Image src={icon} width={48} height={48} />
      </div>
      <div className="event-info__content">
        <h4>{event.attributes.title}</h4>
        <span>Evenement: {moment(event.attributes.date).format("DD MMMM YYYY")}</span>
        <span>{event.attributes.location && event.attributes.location}</span>
        <small>{event.attributes.short_description}</small>
      </div>
    </animated.div>
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
        {events.events.map((event, index) => {
          return <Event key={event.id} event={event} index={index} />;
        })}
      </div>
    </div>
  );
};

export default EventsPerMonth;
