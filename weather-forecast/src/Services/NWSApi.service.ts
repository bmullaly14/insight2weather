import React from "react";
import { LatLong } from "../model";
import { NWSResponse } from "../model";

const url = "https://api.weather.gov/points/";


export async function NWSApiservice(latLong: LatLong): Promise<NWSResponse>{
  let newURL = url + latLong.latitude + "," + latLong.longitude;
  const expUrl = 'http://localhost:5050/api/data/nws';
  //let res: unknown = "";
  
  try {
    if(latLong.latitude === "error" || latLong.longitude === "error"){
    throw new Error("Unable to retrieve")
    }
    const response = await fetch(expUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        
      },
      body: JSON.stringify({newURL}),
    });
    if (!response.ok) {
      alert("There was an error fetching the weather. Please try again.")
      throw new Error('Network response was not ok');
    }

    const data: NWSResponse = await response.json();

    //console.log(data);
    return data;
  } catch (error) {
    alert("There was an error fetching the weather. Please try again.")
    throw error;
  }
};

export default NWSApiservice;
