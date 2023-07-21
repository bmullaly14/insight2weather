import React, { useState } from "react";

import "./InputStyles.css";

import GeoApi from "../Services/GeoApiService.service";

import { ForecastResponse, LatLong, defLatLong } from "../model";
import NWSApiservice from "../Services/NWSApi.service";

interface Props {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  handleState: (newValue: ForecastResponse) => void;
  setUpdated: (wasUpdated: boolean) => void;
  setDays: (days: string) => void;
}

const InputField = ({
  search,
  setSearch,
  handleState,
  setUpdated,
  setDays,
}: Props) => {
  const [value, setNewValue] = useState<ForecastResponse>();
  const [error, setError] = useState<unknown>(null);

  console.log(search);

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    try {
      const data = await GeoApi(search);

      let latLong: LatLong = {
        ...defLatLong,
        latitude: data.result.addressMatches[0].coordinates.y.toString(),
        longitude: data.result.addressMatches[0].coordinates.x.toString(),
      };

      const forecast: ForecastResponse = await NWSApiservice(latLong);
      console.log(event.target);
      setNewValue(forecast);
      handleState(forecast);
      setUpdated(true);

      return value;
    } catch (e) {
      setError(e);
      console.error(error);
    }
  };

  return (
    <div>
      <form className="input" action="">
        <div>
          <div id="input-desc">
            <p>Search for a Weather Forecast</p>
          </div>
          <hr></hr>
          <div className="input-group">
            <span className="input-group-text" id="inputGroup-sizing-default">
              Address
            </span>
            <input
              type="input"
              className="input_box form-control"
              value={search}
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              onChange={(e) => setSearch(e.target.value)}
            />
            <input
              type="input"
              className="input_box form-control"
              onChange={(e) => setDays(e.target.value)}
            ></input>
            <button
              className="btn btn-outline-secondary input_submit"
              type="submit"
              id="button-addon2"
              onClick={(e) => {
                handleSubmit(e);
              }}
            >
              Go
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default InputField;
