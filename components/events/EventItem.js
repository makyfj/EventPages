import React from "react";
import Image from "next/image";
import Link from "next/link";

const EventItem = ({ title, image, date, location, id }) => {
  const readableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formatAddress = location.replace(", ", "\n");

  const exploreLink = `/events/${id}`;

  return (
    <li key={id}>
      <Image src={"/" + image} alt={title} width={300} height={300} />
      <div>
        <h2>{title}</h2>
        <div>
          <time>{readableDate}</time>
        </div>
        <div>
          <address>{formatAddress}</address>
        </div>
        <div>
          <Link href={exploreLink}>Explore Location</Link>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
