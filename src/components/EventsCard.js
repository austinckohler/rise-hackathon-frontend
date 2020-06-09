import React from "react";

function EventsCard(props) {
  return (
    <div className="events-card">
      <li>{props.event.name}</li>
      <li>{props.event.date}</li>
      <li>{props.event.desc}</li>
      <img className="images" src={props.event.img} alt="event" />
    </div>
  );
}

export default EventsCard;
