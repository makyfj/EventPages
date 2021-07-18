import React from "react";
import Link from "next/link";
import { getFeaturedEvents } from "../dummy-data";
import EventList from "../components/events/EventList";

const EventsHomePage = () => {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <h1>Featured Events!</h1>
      <div>
        <EventList items={featuredEvents} />
      </div>
      <h1>Events Home Page</h1>
      <ul>
        <li>
          <Link href="/events">Events</Link>
        </li>
      </ul>
    </div>
  );
};

export default EventsHomePage;
