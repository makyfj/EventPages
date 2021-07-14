import React from "react";
import Link from "next/link";

const EventsHomePage = () => {
  return (
    <div>
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
