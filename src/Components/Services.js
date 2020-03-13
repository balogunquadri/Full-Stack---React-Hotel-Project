import React, { Component } from "react";
import {
  FaCocktail,
  FaHiking,
  FaShuttleVan,
  FaExpeditedssl
} from "react-icons/fa";
import Title from "./Title";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Free Cocktails",
        info:
          "Each Valid Room Bookings Comes With Free Cocktail Packages till your belly can't take it no more"
      },
      {
        icon: <FaHiking />,
        title: "Endless Hiking",
        info:
          "Each Valid Room Bookings Comes With Free Cocktail Packages till your belly can't take it no more"
      },
      {
        icon: <FaShuttleVan />,
        title: "Free Shuttle",
        info:
          "Free Shuttle rides are available within the premises of the establishment with our state of the art buses"
      },
      {
        icon: <FaExpeditedssl />,
        title: "Maximum Security",
        info:
          "Our top notch security plan ensures all guest and visitors are safe.Each room comes with a RFID Key card"
      }
    ]
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
