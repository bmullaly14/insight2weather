import React, { Component, MouseEventHandler, useState } from "react";
import { ForecastResponse, Period } from "../model";
import "./weatherStyles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { AccordionItem } from "../model";

const WeatherDisplay = (props: {
  weather: ForecastResponse;
  updated: boolean;
  Days: string;
}) => {
  const [activeAccId, setActiveAccId] = useState<number | null>(null);
  const toggleAccordion = (itemId: number) => {
    if (itemId === activeAccId) {
      setActiveAccId(null);
    } else {
      setActiveAccId(itemId);
    }
  };

  function reviseURL(url: string) {
    let newURL = "";

    if (url.indexOf("medium") >= 0) {
      newURL = url.replace("medium", "large");
    } else {
      return url;
    }
    return newURL;
  }
  function convertDew(val: number): number {
    let dewpoint: number = val;

    return Number.parseInt((dewpoint * (9 / 5) + 32).toPrecision(2));
  }
  function convertDate(s: string) {
    let dateTime: Date = new Date(s);

    return `${dateTime.getMonth()}/${dateTime.getDate()}/${dateTime.getFullYear()}`;
  }

  let periods: Period[] = [];
  let accordions: AccordionItem[] = [];
  let n: number = 0;

  let days = 7;
  if (parseInt(props.Days) > 0) {
    days = parseInt(props.Days);
  }
  let cards = days * 2;

  props.weather.properties.periods.forEach((p) => {
    //debugger;

    let per: Period = {
      date: convertDate(p.startTime),
      number: p.number,
      name: p.name,
      temperature: p.temperature,
      temperatureUnit: p.temperatureUnit,
      probabilityOfPrecipitation: {
        unitCode: p.probabilityOfPrecipitation.unitCode,
        value: p.probabilityOfPrecipitation.value,
      },
      dewpoint: {
        unitCode: p.dewpoint.unitCode,
        value: convertDew(p.dewpoint.value),
      },
      relativeHumidity: {
        unitCode: p.relativeHumidity.unitCode,
        value: p.relativeHumidity.value,
      },
      windSpeed: p.windSpeed,
      windDirection: p.windDirection,
      icon: reviseURL(p.icon),
      shortForecast: p.shortForecast,
      detailedForecast: p.detailedForecast,
    };
    // while (periods.length < cards) {
    periods.push(per);
    // }

    let acc: AccordionItem = {
      id: n,
      content: {
        dewpoint: {
          unitCode: p.dewpoint.unitCode,
          value: convertDew(p.dewpoint.value),
        },
        relativeHumidity: {
          unitCode: p.relativeHumidity.unitCode,
          value: p.relativeHumidity.value,
        },
        windSpeed: p.windSpeed,
        windDirection: p.windDirection,
      },
    };
    //while (accordions.length < cards) {
    accordions.push(acc);
    // }
    n++;
  });
  periods = periods.filter((p) => {
    if (periods.indexOf(p) < cards) {
      return p;
    } else {
      return null;
    }
  });

  const weatherReadout = periods.map((p) => {
    let item: AccordionItem[] = [];
    while (item.length < 1) {
      item = accordions.filter((i) => {
        if (i.id === periods.indexOf(p)) {
          return i;
        }
      });
    }

    return (
      <div className="card mb-3 p">
        <div className="row-g-0 boxx">
          <div className="col-md-4">
            <img
              src={p.icon}
              className="img-fluid"
              id="imgg"
              alt={p.shortForecast}
            />
          </div>
          <div className="col-md-8">
            <div id="upper" className="card-body">
              <p className="card-header" id="card-header">
                <p id="card-name">{p.name}</p>
                <p className="card-title" id="card-date">
                  {" "}
                  {p.date}
                </p>{" "}
              </p>
              <div id="l-upper">
                <div id="temp">
                  <p className="card-text">
                    {p.temperature}&deg; {p.temperatureUnit}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row-g-0" id="short-fore">
          <div className="col-md-4 col-4" id="spacer">
            <p></p>
          </div>
          <p className="card-text col-md-8 col-8">
            <small className="text-body-secondary">{p.shortForecast}</small>
          </p>
        </div>
        <hr id="card-break"></hr>
        <div className="accordion" id="accordion">
          <div className="accordion-item" key={item[0].id}>
            <h2 className="accordion-header" id={`heading-${item[0].id}`}>
              <button
                id="acc-button"
                className={`accordion-button collapsed ${
                  item[0].id === activeAccId ? "active" : ""
                }`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="false"
                aria-controls="collapseOne"
                onClick={() => toggleAccordion(item[0].id)}
              >
                More
              </button>
            </h2>

            <div
              id={`collapse-${item[0].id}`}
              className={`accordion-collapse ${
                item[0].id === activeAccId ? "show" : ""
              } collapse`}
              data-bs-parent="#accordion"
            >
              <hr id="acc-line"></hr>
              <div id="acc-flex">
                <div className="col-md-8 col-8">
                  <p>{p.detailedForecast}</p>
                </div>
                <ul id="lower" className="list-group list-group col-md-8 col-8">
                  <li className="list-group-item">
                    Relative Humidity: {item[0].content.relativeHumidity.value}%
                  </li>
                  <li className="list-group-item">
                    Wind: {item[0].content.windSpeed}{" "}
                    {item[0].content.windDirection}
                  </li>
                  <li className="list-group-item">
                    Dew Point: {item[0].content.dewpoint.value}&deg; F
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });

  if (!props.updated) {
    return <div></div>;
  }
  return (
    <div>
      <div>
        <div className="container-fluid" id="readout">
          <div>{weatherReadout}</div>
        </div>
      </div>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
        crossOrigin="anonymous"
      ></script>
    </div>
  );
};

export default WeatherDisplay;
