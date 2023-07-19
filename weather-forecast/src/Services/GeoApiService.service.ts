import { FormEvent } from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { LatLong } from "../model";
import NWSApiService from "./NWSApi.service";
import { error } from "console";
import { GeoResponse } from "../model";

const url =
  "https://geocoding.geo.census.gov/geocoder/locations/onelineaddress?address=";
const params = "&benchmark=Public_AR_Current&format=json";



export async function GeoApiService(address: string): Promise<GeoResponse> {
  const newURL = url + concatAddress(splitAddress(address)) + params;
  const expUrl = 'http://localhost:5050/api/data';

  try {
    const response = await fetch(expUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        
      },
      body: JSON.stringify({newURL}),
    });
    if (!response.ok) {
      alert("There was an issue finding that address. Please try again!")
      //throw new Error('Network response was not ok');
    }

    const data: GeoResponse = await response.json();
    if(data.result.addressMatches.length < 1){
      alert("Error retrieving address information. Please try a different address.")
      throw new Error("Error retrieving address information. Please try a different address.")
    }
    //console.log(data);
    return data;
  } catch (error) {
    console.error('Error: ', error);
    
    throw error;
  }
}

function splitAddress(address: string) {
  let splitAddress: string[] = address.split(" ");
  return splitAddress;
}
function concatAddress(address: string[]) {
  let outAdd: string = address.join("+");

  return outAdd;
}
export default GeoApiService;