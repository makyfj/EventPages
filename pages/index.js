import React from "react";
import Head from "next/head";
import EventList from "../components/events/EventList";
import { getFeaturedEvents } from "../helpers/api-utils";

const EventsHomePage = ({ events }) => {
  return (
    <div>
      <Head>
        <title>NextJs Events</title>
        <meta name="description" content="Find great events to network" />
      </Head>
      <h1 className="header-home">Featured Events!</h1>
      <div>
        <EventList items={events} />
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();
  return {
    props: {
      events: featuredEvents,
    },
    // Regenerate new data every 10-15 minutes
    revalidate: 500,
  };
}

export default EventsHomePage;
