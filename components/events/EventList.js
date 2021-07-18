import React from "react";
import EventItem from "./EventItem";

const EventList = ({ items }) => {
  return (
    <ul>
      {items.map((item) => (
        <EventItem
          key={item.id}
          id={item.id}
          title={item.title}
          location={item.location}
          date={item.date}
          image={item.image}
        />
      ))}
    </ul>
  );
};

export default EventList;
