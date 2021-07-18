import React from "react";
import Image from "next/image";
import Link from "next/link";
import classes from "./EventItem.module.css";

const EventItem = ({ title, image, date, location, id }) => {
  const readableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formatAddress = location.replace(", ", "\n");

  const exploreLink = `/events/${id}`;

  return (
    <li className={classes.item}>
      <Image
        src={"/" + image}
        alt={title}
        className={classes.img}
        width={340}
        height={400}
      />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <time>{readableDate}</time>
          </div>
          <div className={classes.address}>
            <address>{formatAddress}</address>
          </div>
          <div className={classes.actions}>
            <Link href={exploreLink}>Explore Location</Link>
          </div>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
