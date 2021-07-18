import React from "react";
import Image from "next/image";
import Button from "../ui/Button";
import classes from "./EventItem.module.css";
import DateIcon from "../icons/DateIcon";
import ArrowRightIcon from "../icons/ArrowRightIcon";
import AddressIcon from "../icons/AddressIcon";

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
            <DateIcon />
            <time>{readableDate}</time>
          </div>
          <div className={classes.address}>
            <AddressIcon />
            <address>{formatAddress}</address>
          </div>
          <div className={classes.actions}>
            <Button link={exploreLink}>
              <span className={classes.icon}>Explore Event</span>
              <span className={classes.icon}>
                <ArrowRightIcon />
              </span>
            </Button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
