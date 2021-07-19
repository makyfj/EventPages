import React from "react";
import { getFeaturedEvents } from "../dummy-data";
import EventList from "../components/events/EventList";

const EventsHomePage = () => {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <h1 className="header-home">Featured Events!</h1>
      <div>
        <EventList items={featuredEvents} />
      </div>
    </div>
  );
};

export default EventsHomePage;
