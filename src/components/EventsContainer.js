import React from "react";
import EventsCard from "./EventsCard";

function EventsContainer({ events }) {
  const e1 = events.map((event) => {
    return <EventsCard key={events.id} event={event} />;
  });
  return (
    <div className="events-container">
      <ul>{e1}</ul>
    </div>
  );
}

export default EventsContainer;