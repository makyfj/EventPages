import React from "react";
import Link from "next/dist/client/link";

const EventsPage = () => {
  return (
    <div>
      <h1>Events Page</h1>
      <ul>
        <li>
          <Link href="/events/franklin">Specifid Id</Link>
        </li>
      </ul>
    </div>
  );
};

export default EventsPage;
