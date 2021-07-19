import React from "react";
import { getAllEvents } from "../../dummy-data";
import EventList from "../../components/events/EventList";

const EventsPage = () => {
  const events = getAllEvents();
  return (
    <div>
      <h1 className="header-home">Events Page</h1>
      <EventList items={events} />
    </div>
  );
};

export default EventsPage;
