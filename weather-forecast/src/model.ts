export interface LatLong {
  id?: number;
  latitude?: string;
  longitude?: string;
}
export const defLatLong: LatLong = {
  latitude: "error",
  longitude: "error",
};

export interface NWSResponse {
  "@context": [
    "https://geojson.org/geojson-ld/geojson-context.jsonld",
    {
      "@version": "1.1";
      wx: "https://api.weather.gov/ontology#";
      geo: "http://www.opengis.net/ont/geosparql#";
      unit: "http://codes.wmo.int/common/unit/";
      "@vocab": "https://api.weather.gov/ontology#";
    }
  ];
  type: "Feature";
  geometry: {
    type: "Polygon";
    coordinates: [
      [
        [-81.598671199999998, 41.520672500000003],
        [-81.601550899999992, 41.498926200000007],
        [-81.572520199999985, 41.49676800000001],
        [-81.569634399999984, 41.518514100000012],
        [-81.598671199999998, 41.520672500000003]
      ]
    ];
  };
  properties: {
    updated: "2023-07-05T13:17:52+00:00";
    units: "us";
    forecastGenerator: "BaselineForecastGenerator";
    generatedAt: "2023-07-05T13:52:44+00:00";
    updateTime: "2023-07-05T13:17:52+00:00";
    validTimes: "2023-07-05T07:00:00+00:00/P7DT18H";
    elevation: {
      unitCode: "wmoUnit:m";
      value: 242.9256;
    };
    periods: [
      {
        number: 1;
        name: "Today";
        startTime: "2023-07-05T09:00:00-04:00";
        endTime: "2023-07-05T18:00:00-04:00";
        isDaytime: true;
        temperature: 90;
        temperatureUnit: "F";
        temperatureTrend: null;
        probabilityOfPrecipitation: {
          unitCode: "wmoUnit:percent";
          value: null;
        };
        dewpoint: {
          unitCode: "wmoUnit:degC";
          value: 20;
        };
        relativeHumidity: {
          unitCode: "wmoUnit:percent";
          value: 58;
        };
        windSpeed: "5 to 8 mph";
        windDirection: "NW";
        icon: "https://api.weather.gov/icons/land/day/few?size=medium";
        shortForecast: "Sunny";
        detailedForecast: "Sunny, with a high near 90. Northwest wind 5 to 8 mph.";
      },
      {
        number: 2;
        name: "Tonight";
        startTime: "2023-07-05T18:00:00-04:00";
        endTime: "2023-07-06T06:00:00-04:00";
        isDaytime: false;
        temperature: 71;
        temperatureUnit: "F";
        temperatureTrend: null;
        probabilityOfPrecipitation: {
          unitCode: "wmoUnit:percent";
          value: null;
        };
        dewpoint: {
          unitCode: "wmoUnit:degC";
          value: 20;
        };
        relativeHumidity: {
          unitCode: "wmoUnit:percent";
          value: 82;
        };
        windSpeed: "5 to 8 mph";
        windDirection: "E";
        icon: "https://api.weather.gov/icons/land/night/few?size=medium";
        shortForecast: "Mostly Clear";
        detailedForecast: "Mostly clear, with a low around 71. East wind 5 to 8 mph.";
      },
      {
        number: 3;
        name: "Thursday";
        startTime: "2023-07-06T06:00:00-04:00";
        endTime: "2023-07-06T18:00:00-04:00";
        isDaytime: true;
        temperature: 89;
        temperatureUnit: "F";
        temperatureTrend: "falling";
        probabilityOfPrecipitation: {
          unitCode: "wmoUnit:percent";
          value: 50;
        };
        dewpoint: {
          unitCode: "wmoUnit:degC";
          value: 21.666666666666668;
        };
        relativeHumidity: {
          unitCode: "wmoUnit:percent";
          value: 85;
        };
        windSpeed: "6 to 10 mph";
        windDirection: "SW";
        icon: "https://api.weather.gov/icons/land/day/tsra_hi,20/tsra_hi,50?size=medium";
        shortForecast: "Slight Chance Showers And Thunderstorms";
        detailedForecast: "A slight chance of rain showers between 10am and 11am, then a slight chance of showers and thunderstorms between 11am and 1pm, then a chance of showers and thunderstorms between 1pm and 2pm, then a chance of showers and thunderstorms. Mostly sunny. High near 89, with temperatures falling to around 82 in the afternoon. Southwest wind 6 to 10 mph. Chance of precipitation is 50%. New rainfall amounts between a tenth and quarter of an inch possible.";
      },
      {
        number: 4;
        name: "Thursday Night";
        startTime: "2023-07-06T18:00:00-04:00";
        endTime: "2023-07-07T06:00:00-04:00";
        isDaytime: false;
        temperature: 66;
        temperatureUnit: "F";
        temperatureTrend: null;
        probabilityOfPrecipitation: {
          unitCode: "wmoUnit:percent";
          value: 60;
        };
        dewpoint: {
          unitCode: "wmoUnit:degC";
          value: 21.666666666666668;
        };
        relativeHumidity: {
          unitCode: "wmoUnit:percent";
          value: 94;
        };
        windSpeed: "5 to 9 mph";
        windDirection: "W";
        icon: "https://api.weather.gov/icons/land/night/tsra,60/tsra,50?size=medium";
        shortForecast: "Showers And Thunderstorms Likely then Chance Showers And Thunderstorms";
        detailedForecast: "Showers and thunderstorms likely before 8pm, then a chance of showers and thunderstorms between 8pm and 5am, then a chance of showers and thunderstorms. Mostly cloudy, with a low around 66. West wind 5 to 9 mph. Chance of precipitation is 60%. New rainfall amounts between a quarter and half of an inch possible.";
      },
      {
        number: 5;
        name: "Friday";
        startTime: "2023-07-07T06:00:00-04:00";
        endTime: "2023-07-07T18:00:00-04:00";
        isDaytime: true;
        temperature: 77;
        temperatureUnit: "F";
        temperatureTrend: null;
        probabilityOfPrecipitation: {
          unitCode: "wmoUnit:percent";
          value: 40;
        };
        dewpoint: {
          unitCode: "wmoUnit:degC";
          value: 18.333333333333332;
        };
        relativeHumidity: {
          unitCode: "wmoUnit:percent";
          value: 93;
        };
        windSpeed: "9 mph";
        windDirection: "N";
        icon: "https://api.weather.gov/icons/land/day/tsra_hi,40/sct?size=medium";
        shortForecast: "Chance Showers And Thunderstorms then Mostly Sunny";
        detailedForecast: "A chance of showers and thunderstorms before 8am. Mostly sunny, with a high near 77. North wind around 9 mph. Chance of precipitation is 40%. New rainfall amounts less than a tenth of an inch possible.";
      },
      {
        number: 6;
        name: "Friday Night";
        startTime: "2023-07-07T18:00:00-04:00";
        endTime: "2023-07-08T06:00:00-04:00";
        isDaytime: false;
        temperature: 61;
        temperatureUnit: "F";
        temperatureTrend: null;
        probabilityOfPrecipitation: {
          unitCode: "wmoUnit:percent";
          value: null;
        };
        dewpoint: {
          unitCode: "wmoUnit:degC";
          value: 14.444444444444445;
        };
        relativeHumidity: {
          unitCode: "wmoUnit:percent";
          value: 83;
        };
        windSpeed: "3 to 7 mph";
        windDirection: "NE";
        icon: "https://api.weather.gov/icons/land/night/sct?size=medium";
        shortForecast: "Partly Cloudy";
        detailedForecast: "Partly cloudy, with a low around 61.";
      },
      {
        number: 7;
        name: "Saturday";
        startTime: "2023-07-08T06:00:00-04:00";
        endTime: "2023-07-08T18:00:00-04:00";
        isDaytime: true;
        temperature: 80;
        temperatureUnit: "F";
        temperatureTrend: null;
        probabilityOfPrecipitation: {
          unitCode: "wmoUnit:percent";
          value: null;
        };
        dewpoint: {
          unitCode: "wmoUnit:degC";
          value: 15.555555555555555;
        };
        relativeHumidity: {
          unitCode: "wmoUnit:percent";
          value: 83;
        };
        windSpeed: "5 to 8 mph";
        windDirection: "NE";
        icon: "https://api.weather.gov/icons/land/day/bkn?size=medium";
        shortForecast: "Partly Sunny";
        detailedForecast: "Partly sunny, with a high near 80.";
      },
      {
        number: 8;
        name: "Saturday Night";
        startTime: "2023-07-08T18:00:00-04:00";
        endTime: "2023-07-09T06:00:00-04:00";
        isDaytime: false;
        temperature: 63;
        temperatureUnit: "F";
        temperatureTrend: null;
        probabilityOfPrecipitation: {
          unitCode: "wmoUnit:percent";
          value: 50;
        };
        dewpoint: {
          unitCode: "wmoUnit:degC";
          value: 15.555555555555555;
        };
        relativeHumidity: {
          unitCode: "wmoUnit:percent";
          value: 85;
        };
        windSpeed: "8 mph";
        windDirection: "NE";
        icon: "https://api.weather.gov/icons/land/night/rain_showers,30/rain_showers,50?size=medium";
        shortForecast: "Chance Rain Showers";
        detailedForecast: "A chance of rain showers after 8pm. Mostly cloudy, with a low around 63. Chance of precipitation is 50%.";
      },
      {
        number: 9;
        name: "Sunday";
        startTime: "2023-07-09T06:00:00-04:00";
        endTime: "2023-07-09T18:00:00-04:00";
        isDaytime: true;
        temperature: 79;
        temperatureUnit: "F";
        temperatureTrend: null;
        probabilityOfPrecipitation: {
          unitCode: "wmoUnit:percent";
          value: 50;
        };
        dewpoint: {
          unitCode: "wmoUnit:degC";
          value: 17.777777777777779;
        };
        relativeHumidity: {
          unitCode: "wmoUnit:percent";
          value: 86;
        };
        windSpeed: "6 to 9 mph";
        windDirection: "N";
        icon: "https://api.weather.gov/icons/land/day/rain_showers,50/tsra_sct,40?size=medium";
        shortForecast: "Chance Rain Showers";
        detailedForecast: "A chance of rain showers before 2pm, then a chance of showers and thunderstorms. Partly sunny, with a high near 79. Chance of precipitation is 50%.";
      },
      {
        number: 10;
        name: "Sunday Night";
        startTime: "2023-07-09T18:00:00-04:00";
        endTime: "2023-07-10T06:00:00-04:00";
        isDaytime: false;
        temperature: 64;
        temperatureUnit: "F";
        temperatureTrend: null;
        probabilityOfPrecipitation: {
          unitCode: "wmoUnit:percent";
          value: 30;
        };
        dewpoint: {
          unitCode: "wmoUnit:degC";
          value: 17.222222222222221;
        };
        relativeHumidity: {
          unitCode: "wmoUnit:percent";
          value: 90;
        };
        windSpeed: "5 to 9 mph";
        windDirection: "NE";
        icon: "https://api.weather.gov/icons/land/night/tsra_hi,30?size=medium";
        shortForecast: "Chance Showers And Thunderstorms";
        detailedForecast: "A chance of showers and thunderstorms. Partly cloudy, with a low around 64. Chance of precipitation is 30%.";
      },
      {
        number: 11;
        name: "Monday";
        startTime: "2023-07-10T06:00:00-04:00";
        endTime: "2023-07-10T18:00:00-04:00";
        isDaytime: true;
        temperature: 81;
        temperatureUnit: "F";
        temperatureTrend: null;
        probabilityOfPrecipitation: {
          unitCode: "wmoUnit:percent";
          value: 30;
        };
        dewpoint: {
          unitCode: "wmoUnit:degC";
          value: 17.777777777777779;
        };
        relativeHumidity: {
          unitCode: "wmoUnit:percent";
          value: 90;
        };
        windSpeed: "8 mph";
        windDirection: "N";
        icon: "https://api.weather.gov/icons/land/day/rain_showers,30?size=medium";
        shortForecast: "Chance Rain Showers";
        detailedForecast: "A chance of rain showers. Mostly sunny, with a high near 81. Chance of precipitation is 30%.";
      },
      {
        number: 12;
        name: "Monday Night";
        startTime: "2023-07-10T18:00:00-04:00";
        endTime: "2023-07-11T06:00:00-04:00";
        isDaytime: false;
        temperature: 64;
        temperatureUnit: "F";
        temperatureTrend: null;
        probabilityOfPrecipitation: {
          unitCode: "wmoUnit:percent";
          value: 30;
        };
        dewpoint: {
          unitCode: "wmoUnit:degC";
          value: 17.222222222222221;
        };
        relativeHumidity: {
          unitCode: "wmoUnit:percent";
          value: 90;
        };
        windSpeed: "7 mph";
        windDirection: "SW";
        icon: "https://api.weather.gov/icons/land/night/rain_showers,30?size=medium";
        shortForecast: "Chance Rain Showers";
        detailedForecast: "A chance of rain showers. Partly cloudy, with a low around 64. Chance of precipitation is 30%.";
      },
      {
        number: 13;
        name: "Tuesday";
        startTime: "2023-07-11T06:00:00-04:00";
        endTime: "2023-07-11T18:00:00-04:00";
        isDaytime: true;
        temperature: 81;
        temperatureUnit: "F";
        temperatureTrend: null;
        probabilityOfPrecipitation: {
          unitCode: "wmoUnit:percent";
          value: 30;
        };
        dewpoint: {
          unitCode: "wmoUnit:degC";
          value: 17.777777777777779;
        };
        relativeHumidity: {
          unitCode: "wmoUnit:percent";
          value: 89;
        };
        windSpeed: "7 to 10 mph";
        windDirection: "W";
        icon: "https://api.weather.gov/icons/land/day/rain_showers,30/tsra_hi,30?size=medium";
        shortForecast: "Chance Rain Showers";
        detailedForecast: "A chance of rain showers before 2pm, then a chance of showers and thunderstorms. Mostly sunny, with a high near 81. Chance of precipitation is 30%.";
      },
      {
        number: 14;
        name: "Tuesday Night";
        startTime: "2023-07-11T18:00:00-04:00";
        endTime: "2023-07-12T06:00:00-04:00";
        isDaytime: false;
        temperature: 64;
        temperatureUnit: "F";
        temperatureTrend: null;
        probabilityOfPrecipitation: {
          unitCode: "wmoUnit:percent";
          value: 30;
        };
        dewpoint: {
          unitCode: "wmoUnit:degC";
          value: 16.666666666666668;
        };
        relativeHumidity: {
          unitCode: "wmoUnit:percent";
          value: 84;
        };
        windSpeed: "5 to 10 mph";
        windDirection: "SW";
        icon: "https://api.weather.gov/icons/land/night/tsra_hi,30?size=medium";
        shortForecast: "Chance Showers And Thunderstorms";
        detailedForecast: "A chance of showers and thunderstorms. Partly cloudy, with a low around 64. Chance of precipitation is 30%.";
      }
    ];
  };
}

export interface GeoResponse {
  result: {
    input: {
      address: {
        address: string;
      };
      benchmark: {
        isDefault: boolean;
        benchmarkDescription: string;
        id: string;
        benchmarkName: string;
      };
    };
    addressMatches: [
      {
        tigerLine: {
          side: string;
          tigerLineId: string;
        };
        coordinates: {
          x: number;
          y: number;
        };
        addressComponents: {
          zip: string;
          streetName: string;
          preType: string;
          city: string;
          preDirection: string;
          suffixDirection: string;
          fromAddress: string;
          state: string;
          suffixType: string;
          toAddress: string;
          suffixQualifier: string;
          preQualifier: string;
        };
        matchedAddress: string;
      },
      {
        tigerLine: {
          side: string;
          tigerLineId: string;
        };
        coordinates: {
          x: number;
          y: number;
        };
        addressComponents: {
          zip: string;
          streetName: string;
          preType: string;
          city: string;
          preDirection: string;
          suffixDirection: string;
          fromAddress: string;
          state: string;
          suffixType: string;
          toAddress: string;
          suffixQualifier: string;
          preQualifier: string;
        };
        matchedAddress: string;
      }
    ];
  };
}
export interface ForecastResponse {
  "@context": [
    "https://geojson.org/geojson-ld/geojson-context.jsonld",
    {
      "@version": "1.1";
      wx: "https://api.weather.gov/ontology#";
      geo: "http://www.opengis.net/ont/geosparql#";
      unit: "http://codes.wmo.int/common/unit/";
      "@vocab": "https://api.weather.gov/ontology#";
    }
  ];
  type: "Feature";
  geometry: {
    type: "Polygon";
    coordinates: [
      [
        [-81.598671199999998, 41.520672500000003],
        [-81.601550899999992, 41.498926200000007],
        [-81.572520199999985, 41.49676800000001],
        [-81.569634399999984, 41.518514100000012],
        [-81.598671199999998, 41.520672500000003]
      ]
    ];
  };
  properties: {
    updated: "2023-07-05T13:17:52+00:00";
    units: "us";
    forecastGenerator: "BaselineForecastGenerator";
    generatedAt: "2023-07-05T13:52:44+00:00";
    updateTime: "2023-07-05T13:17:52+00:00";
    validTimes: "2023-07-05T07:00:00+00:00/P7DT18H";
    elevation: {
      unitCode: "wmoUnit:m";
      value: 242.9256;
    };
    periods: [
      {
        number: 1;
        name: "Today";
        startTime: "2023-07-05T09:00:00-04:00";
        endTime: "2023-07-05T18:00:00-04:00";
        isDaytime: true;
        temperature: 90;
        temperatureUnit: "F";
        temperatureTrend: null;
        probabilityOfPrecipitation: {
          unitCode: "wmoUnit:percent";
          value: null;
        };
        dewpoint: {
          unitCode: "wmoUnit:degC";
          value: 20;
        };
        relativeHumidity: {
          unitCode: "wmoUnit:percent";
          value: 58;
        };
        windSpeed: "5 to 8 mph";
        windDirection: "NW";
        icon: "https://api.weather.gov/icons/land/day/few?size=medium";
        shortForecast: "Sunny";
        detailedForecast: "Sunny, with a high near 90. Northwest wind 5 to 8 mph.";
      },
      {
        number: 2;
        name: "Tonight";
        startTime: "2023-07-05T18:00:00-04:00";
        endTime: "2023-07-06T06:00:00-04:00";
        isDaytime: false;
        temperature: 71;
        temperatureUnit: "F";
        temperatureTrend: null;
        probabilityOfPrecipitation: {
          unitCode: "wmoUnit:percent";
          value: null;
        };
        dewpoint: {
          unitCode: "wmoUnit:degC";
          value: 20;
        };
        relativeHumidity: {
          unitCode: "wmoUnit:percent";
          value: 82;
        };
        windSpeed: "5 to 8 mph";
        windDirection: "E";
        icon: "https://api.weather.gov/icons/land/night/few?size=medium";
        shortForecast: "Mostly Clear";
        detailedForecast: "Mostly clear, with a low around 71. East wind 5 to 8 mph.";
      },
      {
        number: 3;
        name: "Thursday";
        startTime: "2023-07-06T06:00:00-04:00";
        endTime: "2023-07-06T18:00:00-04:00";
        isDaytime: true;
        temperature: 89;
        temperatureUnit: "F";
        temperatureTrend: "falling";
        probabilityOfPrecipitation: {
          unitCode: "wmoUnit:percent";
          value: 50;
        };
        dewpoint: {
          unitCode: "wmoUnit:degC";
          value: 21.666666666666668;
        };
        relativeHumidity: {
          unitCode: "wmoUnit:percent";
          value: 85;
        };
        windSpeed: "6 to 10 mph";
        windDirection: "SW";
        icon: "https://api.weather.gov/icons/land/day/tsra_hi,20/tsra_hi,50?size=medium";
        shortForecast: "Slight Chance Showers And Thunderstorms";
        detailedForecast: "A slight chance of rain showers between 10am and 11am, then a slight chance of showers and thunderstorms between 11am and 1pm, then a chance of showers and thunderstorms between 1pm and 2pm, then a chance of showers and thunderstorms. Mostly sunny. High near 89, with temperatures falling to around 82 in the afternoon. Southwest wind 6 to 10 mph. Chance of precipitation is 50%. New rainfall amounts between a tenth and quarter of an inch possible.";
      },
      {
        number: 4;
        name: "Thursday Night";
        startTime: "2023-07-06T18:00:00-04:00";
        endTime: "2023-07-07T06:00:00-04:00";
        isDaytime: false;
        temperature: 66;
        temperatureUnit: "F";
        temperatureTrend: null;
        probabilityOfPrecipitation: {
          unitCode: "wmoUnit:percent";
          value: 60;
        };
        dewpoint: {
          unitCode: "wmoUnit:degC";
          value: 21.666666666666668;
        };
        relativeHumidity: {
          unitCode: "wmoUnit:percent";
          value: 94;
        };
        windSpeed: "5 to 9 mph";
        windDirection: "W";
        icon: "https://api.weather.gov/icons/land/night/tsra,60/tsra,50?size=medium";
        shortForecast: "Showers And Thunderstorms Likely then Chance Showers And Thunderstorms";
        detailedForecast: "Showers and thunderstorms likely before 8pm, then a chance of showers and thunderstorms between 8pm and 5am, then a chance of showers and thunderstorms. Mostly cloudy, with a low around 66. West wind 5 to 9 mph. Chance of precipitation is 60%. New rainfall amounts between a quarter and half of an inch possible.";
      },
      {
        number: 5;
        name: "Friday";
        startTime: "2023-07-07T06:00:00-04:00";
        endTime: "2023-07-07T18:00:00-04:00";
        isDaytime: true;
        temperature: 77;
        temperatureUnit: "F";
        temperatureTrend: null;
        probabilityOfPrecipitation: {
          unitCode: "wmoUnit:percent";
          value: 40;
        };
        dewpoint: {
          unitCode: "wmoUnit:degC";
          value: 18.333333333333332;
        };
        relativeHumidity: {
          unitCode: "wmoUnit:percent";
          value: 93;
        };
        windSpeed: "9 mph";
        windDirection: "N";
        icon: "https://api.weather.gov/icons/land/day/tsra_hi,40/sct?size=medium";
        shortForecast: "Chance Showers And Thunderstorms then Mostly Sunny";
        detailedForecast: "A chance of showers and thunderstorms before 8am. Mostly sunny, with a high near 77. North wind around 9 mph. Chance of precipitation is 40%. New rainfall amounts less than a tenth of an inch possible.";
      },
      {
        number: 6;
        name: "Friday Night";
        startTime: "2023-07-07T18:00:00-04:00";
        endTime: "2023-07-08T06:00:00-04:00";
        isDaytime: false;
        temperature: 61;
        temperatureUnit: "F";
        temperatureTrend: null;
        probabilityOfPrecipitation: {
          unitCode: "wmoUnit:percent";
          value: null;
        };
        dewpoint: {
          unitCode: "wmoUnit:degC";
          value: 14.444444444444445;
        };
        relativeHumidity: {
          unitCode: "wmoUnit:percent";
          value: 83;
        };
        windSpeed: "3 to 7 mph";
        windDirection: "NE";
        icon: "https://api.weather.gov/icons/land/night/sct?size=medium";
        shortForecast: "Partly Cloudy";
        detailedForecast: "Partly cloudy, with a low around 61.";
      },
      {
        number: 7;
        name: "Saturday";
        startTime: "2023-07-08T06:00:00-04:00";
        endTime: "2023-07-08T18:00:00-04:00";
        isDaytime: true;
        temperature: 80;
        temperatureUnit: "F";
        temperatureTrend: null;
        probabilityOfPrecipitation: {
          unitCode: "wmoUnit:percent";
          value: null;
        };
        dewpoint: {
          unitCode: "wmoUnit:degC";
          value: 15.555555555555555;
        };
        relativeHumidity: {
          unitCode: "wmoUnit:percent";
          value: 83;
        };
        windSpeed: "5 to 8 mph";
        windDirection: "NE";
        icon: "https://api.weather.gov/icons/land/day/bkn?size=medium";
        shortForecast: "Partly Sunny";
        detailedForecast: "Partly sunny, with a high near 80.";
      },
      {
        number: 8;
        name: "Saturday Night";
        startTime: "2023-07-08T18:00:00-04:00";
        endTime: "2023-07-09T06:00:00-04:00";
        isDaytime: false;
        temperature: 63;
        temperatureUnit: "F";
        temperatureTrend: null;
        probabilityOfPrecipitation: {
          unitCode: "wmoUnit:percent";
          value: 50;
        };
        dewpoint: {
          unitCode: "wmoUnit:degC";
          value: 15.555555555555555;
        };
        relativeHumidity: {
          unitCode: "wmoUnit:percent";
          value: 85;
        };
        windSpeed: "8 mph";
        windDirection: "NE";
        icon: "https://api.weather.gov/icons/land/night/rain_showers,30/rain_showers,50?size=medium";
        shortForecast: "Chance Rain Showers";
        detailedForecast: "A chance of rain showers after 8pm. Mostly cloudy, with a low around 63. Chance of precipitation is 50%.";
      },
      {
        number: 9;
        name: "Sunday";
        startTime: "2023-07-09T06:00:00-04:00";
        endTime: "2023-07-09T18:00:00-04:00";
        isDaytime: true;
        temperature: 79;
        temperatureUnit: "F";
        temperatureTrend: null;
        probabilityOfPrecipitation: {
          unitCode: "wmoUnit:percent";
          value: 50;
        };
        dewpoint: {
          unitCode: "wmoUnit:degC";
          value: 17.777777777777779;
        };
        relativeHumidity: {
          unitCode: "wmoUnit:percent";
          value: 86;
        };
        windSpeed: "6 to 9 mph";
        windDirection: "N";
        icon: "https://api.weather.gov/icons/land/day/rain_showers,50/tsra_sct,40?size=medium";
        shortForecast: "Chance Rain Showers";
        detailedForecast: "A chance of rain showers before 2pm, then a chance of showers and thunderstorms. Partly sunny, with a high near 79. Chance of precipitation is 50%.";
      },
      {
        number: 10;
        name: "Sunday Night";
        startTime: "2023-07-09T18:00:00-04:00";
        endTime: "2023-07-10T06:00:00-04:00";
        isDaytime: false;
        temperature: 64;
        temperatureUnit: "F";
        temperatureTrend: null;
        probabilityOfPrecipitation: {
          unitCode: "wmoUnit:percent";
          value: 30;
        };
        dewpoint: {
          unitCode: "wmoUnit:degC";
          value: 17.222222222222221;
        };
        relativeHumidity: {
          unitCode: "wmoUnit:percent";
          value: 90;
        };
        windSpeed: "5 to 9 mph";
        windDirection: "NE";
        icon: "https://api.weather.gov/icons/land/night/tsra_hi,30?size=medium";
        shortForecast: "Chance Showers And Thunderstorms";
        detailedForecast: "A chance of showers and thunderstorms. Partly cloudy, with a low around 64. Chance of precipitation is 30%.";
      },
      {
        number: 11;
        name: "Monday";
        startTime: "2023-07-10T06:00:00-04:00";
        endTime: "2023-07-10T18:00:00-04:00";
        isDaytime: true;
        temperature: 81;
        temperatureUnit: "F";
        temperatureTrend: null;
        probabilityOfPrecipitation: {
          unitCode: "wmoUnit:percent";
          value: 30;
        };
        dewpoint: {
          unitCode: "wmoUnit:degC";
          value: 17.777777777777779;
        };
        relativeHumidity: {
          unitCode: "wmoUnit:percent";
          value: 90;
        };
        windSpeed: "8 mph";
        windDirection: "N";
        icon: "https://api.weather.gov/icons/land/day/rain_showers,30?size=medium";
        shortForecast: "Chance Rain Showers";
        detailedForecast: "A chance of rain showers. Mostly sunny, with a high near 81. Chance of precipitation is 30%.";
      },
      {
        number: 12;
        name: "Monday Night";
        startTime: "2023-07-10T18:00:00-04:00";
        endTime: "2023-07-11T06:00:00-04:00";
        isDaytime: false;
        temperature: 64;
        temperatureUnit: "F";
        temperatureTrend: null;
        probabilityOfPrecipitation: {
          unitCode: "wmoUnit:percent";
          value: 30;
        };
        dewpoint: {
          unitCode: "wmoUnit:degC";
          value: 17.222222222222221;
        };
        relativeHumidity: {
          unitCode: "wmoUnit:percent";
          value: 90;
        };
        windSpeed: "7 mph";
        windDirection: "SW";
        icon: "https://api.weather.gov/icons/land/night/rain_showers,30?size=medium";
        shortForecast: "Chance Rain Showers";
        detailedForecast: "A chance of rain showers. Partly cloudy, with a low around 64. Chance of precipitation is 30%.";
      },
      {
        number: 13;
        name: "Tuesday";
        startTime: "2023-07-11T06:00:00-04:00";
        endTime: "2023-07-11T18:00:00-04:00";
        isDaytime: true;
        temperature: 81;
        temperatureUnit: "F";
        temperatureTrend: null;
        probabilityOfPrecipitation: {
          unitCode: "wmoUnit:percent";
          value: 30;
        };
        dewpoint: {
          unitCode: "wmoUnit:degC";
          value: 17.777777777777779;
        };
        relativeHumidity: {
          unitCode: "wmoUnit:percent";
          value: 89;
        };
        windSpeed: "7 to 10 mph";
        windDirection: "W";
        icon: "https://api.weather.gov/icons/land/day/rain_showers,30/tsra_hi,30?size=medium";
        shortForecast: "Chance Rain Showers";
        detailedForecast: "A chance of rain showers before 2pm, then a chance of showers and thunderstorms. Mostly sunny, with a high near 81. Chance of precipitation is 30%.";
      },
      {
        number: 14;
        name: "Tuesday Night";
        startTime: "2023-07-11T18:00:00-04:00";
        endTime: "2023-07-12T06:00:00-04:00";
        isDaytime: false;
        temperature: 64;
        temperatureUnit: "F";
        temperatureTrend: null;
        probabilityOfPrecipitation: {
          unitCode: "wmoUnit:percent";
          value: 30;
        };
        dewpoint: {
          unitCode: "wmoUnit:degC";
          value: 16.666666666666668;
        };
        relativeHumidity: {
          unitCode: "wmoUnit:percent";
          value: 84;
        };
        windSpeed: "5 to 10 mph";
        windDirection: "SW";
        icon: "https://api.weather.gov/icons/land/night/tsra_hi,30?size=medium";
        shortForecast: "Chance Showers And Thunderstorms";
        detailedForecast: "A chance of showers and thunderstorms. Partly cloudy, with a low around 64. Chance of precipitation is 30%.";
      }
    ];
  };
}
export interface Period {
  date: string;
  number: number;
  name: string;
  temperature: number;
  temperatureUnit: string;
  probabilityOfPrecipitation: {
    unitCode: string;
    value: number | null;
  };
  dewpoint: {
    unitCode: string;
    value: number | null;
  };
  relativeHumidity: {
    unitCode: string;
    value: number | null;
  };
  windSpeed: string;
  windDirection: string;
  icon: string;
  shortForecast: string;
  detailedForecast: string;
}

export let n: ForecastResponse = {
  "@context": [
    "https://geojson.org/geojson-ld/geojson-context.jsonld",
    {
      "@version": "1.1",
      wx: "https://api.weather.gov/ontology#",
      geo: "http://www.opengis.net/ont/geosparql#",
      unit: "http://codes.wmo.int/common/unit/",
      "@vocab": "https://api.weather.gov/ontology#",
    },
  ],
  type: "Feature",
  geometry: {
    type: "Polygon",
    coordinates: [
      [
        [-81.598671199999998, 41.520672500000003],
        [-81.601550899999992, 41.498926200000007],
        [-81.572520199999985, 41.49676800000001],
        [-81.569634399999984, 41.518514100000012],
        [-81.598671199999998, 41.520672500000003],
      ],
    ],
  },
  properties: {
    updated: "2023-07-05T13:17:52+00:00",
    units: "us",
    forecastGenerator: "BaselineForecastGenerator",
    generatedAt: "2023-07-05T13:52:44+00:00",
    updateTime: "2023-07-05T13:17:52+00:00",
    validTimes: "2023-07-05T07:00:00+00:00/P7DT18H",
    elevation: {
      unitCode: "wmoUnit:m",
      value: 242.9256,
    },
    periods: [
      {
        number: 1,
        name: "Today",
        startTime: "2023-07-05T09:00:00-04:00",
        endTime: "2023-07-05T18:00:00-04:00",
        isDaytime: true,
        temperature: 90,
        temperatureUnit: "F",
        temperatureTrend: null,
        probabilityOfPrecipitation: {
          unitCode: "wmoUnit:percent",
          value: null,
        },
        dewpoint: {
          unitCode: "wmoUnit:degC",
          value: 20,
        },
        relativeHumidity: {
          unitCode: "wmoUnit:percent",
          value: 58,
        },
        windSpeed: "5 to 8 mph",
        windDirection: "NW",
        icon: "https://api.weather.gov/icons/land/day/few?size=medium",
        shortForecast: "Sunny",
        detailedForecast:
          "Sunny, with a high near 90. Northwest wind 5 to 8 mph.",
      },
      {
        number: 2,
        name: "Tonight",
        startTime: "2023-07-05T18:00:00-04:00",
        endTime: "2023-07-06T06:00:00-04:00",
        isDaytime: false,
        temperature: 71,
        temperatureUnit: "F",
        temperatureTrend: null,
        probabilityOfPrecipitation: {
          unitCode: "wmoUnit:percent",
          value: null,
        },
        dewpoint: {
          unitCode: "wmoUnit:degC",
          value: 20,
        },
        relativeHumidity: {
          unitCode: "wmoUnit:percent",
          value: 82,
        },
        windSpeed: "5 to 8 mph",
        windDirection: "E",
        icon: "https://api.weather.gov/icons/land/night/few?size=medium",
        shortForecast: "Mostly Clear",
        detailedForecast:
          "Mostly clear, with a low around 71. East wind 5 to 8 mph.",
      },
      {
        number: 3,
        name: "Thursday",
        startTime: "2023-07-06T06:00:00-04:00",
        endTime: "2023-07-06T18:00:00-04:00",
        isDaytime: true,
        temperature: 89,
        temperatureUnit: "F",
        temperatureTrend: "falling",
        probabilityOfPrecipitation: {
          unitCode: "wmoUnit:percent",
          value: 50,
        },
        dewpoint: {
          unitCode: "wmoUnit:degC",
          value: 21.666666666666668,
        },
        relativeHumidity: {
          unitCode: "wmoUnit:percent",
          value: 85,
        },
        windSpeed: "6 to 10 mph",
        windDirection: "SW",
        icon: "https://api.weather.gov/icons/land/day/tsra_hi,20/tsra_hi,50?size=medium",
        shortForecast: "Slight Chance Showers And Thunderstorms",
        detailedForecast:
          "A slight chance of rain showers between 10am and 11am, then a slight chance of showers and thunderstorms between 11am and 1pm, then a chance of showers and thunderstorms between 1pm and 2pm, then a chance of showers and thunderstorms. Mostly sunny. High near 89, with temperatures falling to around 82 in the afternoon. Southwest wind 6 to 10 mph. Chance of precipitation is 50%. New rainfall amounts between a tenth and quarter of an inch possible.",
      },
      {
        number: 4,
        name: "Thursday Night",
        startTime: "2023-07-06T18:00:00-04:00",
        endTime: "2023-07-07T06:00:00-04:00",
        isDaytime: false,
        temperature: 66,
        temperatureUnit: "F",
        temperatureTrend: null,
        probabilityOfPrecipitation: {
          unitCode: "wmoUnit:percent",
          value: 60,
        },
        dewpoint: {
          unitCode: "wmoUnit:degC",
          value: 21.666666666666668,
        },
        relativeHumidity: {
          unitCode: "wmoUnit:percent",
          value: 94,
        },
        windSpeed: "5 to 9 mph",
        windDirection: "W",
        icon: "https://api.weather.gov/icons/land/night/tsra,60/tsra,50?size=medium",
        shortForecast:
          "Showers And Thunderstorms Likely then Chance Showers And Thunderstorms",
        detailedForecast:
          "Showers and thunderstorms likely before 8pm, then a chance of showers and thunderstorms between 8pm and 5am, then a chance of showers and thunderstorms. Mostly cloudy, with a low around 66. West wind 5 to 9 mph. Chance of precipitation is 60%. New rainfall amounts between a quarter and half of an inch possible.",
      },
      {
        number: 5,
        name: "Friday",
        startTime: "2023-07-07T06:00:00-04:00",
        endTime: "2023-07-07T18:00:00-04:00",
        isDaytime: true,
        temperature: 77,
        temperatureUnit: "F",
        temperatureTrend: null,
        probabilityOfPrecipitation: {
          unitCode: "wmoUnit:percent",
          value: 40,
        },
        dewpoint: {
          unitCode: "wmoUnit:degC",
          value: 18.333333333333332,
        },
        relativeHumidity: {
          unitCode: "wmoUnit:percent",
          value: 93,
        },
        windSpeed: "9 mph",
        windDirection: "N",
        icon: "https://api.weather.gov/icons/land/day/tsra_hi,40/sct?size=medium",
        shortForecast: "Chance Showers And Thunderstorms then Mostly Sunny",
        detailedForecast:
          "A chance of showers and thunderstorms before 8am. Mostly sunny, with a high near 77. North wind around 9 mph. Chance of precipitation is 40%. New rainfall amounts less than a tenth of an inch possible.",
      },
      {
        number: 6,
        name: "Friday Night",
        startTime: "2023-07-07T18:00:00-04:00",
        endTime: "2023-07-08T06:00:00-04:00",
        isDaytime: false,
        temperature: 61,
        temperatureUnit: "F",
        temperatureTrend: null,
        probabilityOfPrecipitation: {
          unitCode: "wmoUnit:percent",
          value: null,
        },
        dewpoint: {
          unitCode: "wmoUnit:degC",
          value: 14.444444444444445,
        },
        relativeHumidity: {
          unitCode: "wmoUnit:percent",
          value: 83,
        },
        windSpeed: "3 to 7 mph",
        windDirection: "NE",
        icon: "https://api.weather.gov/icons/land/night/sct?size=medium",
        shortForecast: "Partly Cloudy",
        detailedForecast: "Partly cloudy, with a low around 61.",
      },
      {
        number: 7,
        name: "Saturday",
        startTime: "2023-07-08T06:00:00-04:00",
        endTime: "2023-07-08T18:00:00-04:00",
        isDaytime: true,
        temperature: 80,
        temperatureUnit: "F",
        temperatureTrend: null,
        probabilityOfPrecipitation: {
          unitCode: "wmoUnit:percent",
          value: null,
        },
        dewpoint: {
          unitCode: "wmoUnit:degC",
          value: 15.555555555555555,
        },
        relativeHumidity: {
          unitCode: "wmoUnit:percent",
          value: 83,
        },
        windSpeed: "5 to 8 mph",
        windDirection: "NE",
        icon: "https://api.weather.gov/icons/land/day/bkn?size=medium",
        shortForecast: "Partly Sunny",
        detailedForecast: "Partly sunny, with a high near 80.",
      },
      {
        number: 8,
        name: "Saturday Night",
        startTime: "2023-07-08T18:00:00-04:00",
        endTime: "2023-07-09T06:00:00-04:00",
        isDaytime: false,
        temperature: 63,
        temperatureUnit: "F",
        temperatureTrend: null,
        probabilityOfPrecipitation: {
          unitCode: "wmoUnit:percent",
          value: 50,
        },
        dewpoint: {
          unitCode: "wmoUnit:degC",
          value: 15.555555555555555,
        },
        relativeHumidity: {
          unitCode: "wmoUnit:percent",
          value: 85,
        },
        windSpeed: "8 mph",
        windDirection: "NE",
        icon: "https://api.weather.gov/icons/land/night/rain_showers,30/rain_showers,50?size=medium",
        shortForecast: "Chance Rain Showers",
        detailedForecast:
          "A chance of rain showers after 8pm. Mostly cloudy, with a low around 63. Chance of precipitation is 50%.",
      },
      {
        number: 9,
        name: "Sunday",
        startTime: "2023-07-09T06:00:00-04:00",
        endTime: "2023-07-09T18:00:00-04:00",
        isDaytime: true,
        temperature: 79,
        temperatureUnit: "F",
        temperatureTrend: null,
        probabilityOfPrecipitation: {
          unitCode: "wmoUnit:percent",
          value: 50,
        },
        dewpoint: {
          unitCode: "wmoUnit:degC",
          value: 17.777777777777779,
        },
        relativeHumidity: {
          unitCode: "wmoUnit:percent",
          value: 86,
        },
        windSpeed: "6 to 9 mph",
        windDirection: "N",
        icon: "https://api.weather.gov/icons/land/day/rain_showers,50/tsra_sct,40?size=medium",
        shortForecast: "Chance Rain Showers",
        detailedForecast:
          "A chance of rain showers before 2pm, then a chance of showers and thunderstorms. Partly sunny, with a high near 79. Chance of precipitation is 50%.",
      },
      {
        number: 10,
        name: "Sunday Night",
        startTime: "2023-07-09T18:00:00-04:00",
        endTime: "2023-07-10T06:00:00-04:00",
        isDaytime: false,
        temperature: 64,
        temperatureUnit: "F",
        temperatureTrend: null,
        probabilityOfPrecipitation: {
          unitCode: "wmoUnit:percent",
          value: 30,
        },
        dewpoint: {
          unitCode: "wmoUnit:degC",
          value: 17.222222222222221,
        },
        relativeHumidity: {
          unitCode: "wmoUnit:percent",
          value: 90,
        },
        windSpeed: "5 to 9 mph",
        windDirection: "NE",
        icon: "https://api.weather.gov/icons/land/night/tsra_hi,30?size=medium",
        shortForecast: "Chance Showers And Thunderstorms",
        detailedForecast:
          "A chance of showers and thunderstorms. Partly cloudy, with a low around 64. Chance of precipitation is 30%.",
      },
      {
        number: 11,
        name: "Monday",
        startTime: "2023-07-10T06:00:00-04:00",
        endTime: "2023-07-10T18:00:00-04:00",
        isDaytime: true,
        temperature: 81,
        temperatureUnit: "F",
        temperatureTrend: null,
        probabilityOfPrecipitation: {
          unitCode: "wmoUnit:percent",
          value: 30,
        },
        dewpoint: {
          unitCode: "wmoUnit:degC",
          value: 17.777777777777779,
        },
        relativeHumidity: {
          unitCode: "wmoUnit:percent",
          value: 90,
        },
        windSpeed: "8 mph",
        windDirection: "N",
        icon: "https://api.weather.gov/icons/land/day/rain_showers,30?size=medium",
        shortForecast: "Chance Rain Showers",
        detailedForecast:
          "A chance of rain showers. Mostly sunny, with a high near 81. Chance of precipitation is 30%.",
      },
      {
        number: 12,
        name: "Monday Night",
        startTime: "2023-07-10T18:00:00-04:00",
        endTime: "2023-07-11T06:00:00-04:00",
        isDaytime: false,
        temperature: 64,
        temperatureUnit: "F",
        temperatureTrend: null,
        probabilityOfPrecipitation: {
          unitCode: "wmoUnit:percent",
          value: 30,
        },
        dewpoint: {
          unitCode: "wmoUnit:degC",
          value: 17.222222222222221,
        },
        relativeHumidity: {
          unitCode: "wmoUnit:percent",
          value: 90,
        },
        windSpeed: "7 mph",
        windDirection: "SW",
        icon: "https://api.weather.gov/icons/land/night/rain_showers,30?size=medium",
        shortForecast: "Chance Rain Showers",
        detailedForecast:
          "A chance of rain showers. Partly cloudy, with a low around 64. Chance of precipitation is 30%.",
      },
      {
        number: 13,
        name: "Tuesday",
        startTime: "2023-07-11T06:00:00-04:00",
        endTime: "2023-07-11T18:00:00-04:00",
        isDaytime: true,
        temperature: 81,
        temperatureUnit: "F",
        temperatureTrend: null,
        probabilityOfPrecipitation: {
          unitCode: "wmoUnit:percent",
          value: 30,
        },
        dewpoint: {
          unitCode: "wmoUnit:degC",
          value: 17.777777777777779,
        },
        relativeHumidity: {
          unitCode: "wmoUnit:percent",
          value: 89,
        },
        windSpeed: "7 to 10 mph",
        windDirection: "W",
        icon: "https://api.weather.gov/icons/land/day/rain_showers,30/tsra_hi,30?size=medium",
        shortForecast: "Chance Rain Showers",
        detailedForecast:
          "A chance of rain showers before 2pm, then a chance of showers and thunderstorms. Mostly sunny, with a high near 81. Chance of precipitation is 30%.",
      },
      {
        number: 14,
        name: "Tuesday Night",
        startTime: "2023-07-11T18:00:00-04:00",
        endTime: "2023-07-12T06:00:00-04:00",
        isDaytime: false,
        temperature: 64,
        temperatureUnit: "F",
        temperatureTrend: null,
        probabilityOfPrecipitation: {
          unitCode: "wmoUnit:percent",
          value: 30,
        },
        dewpoint: {
          unitCode: "wmoUnit:degC",
          value: 16.666666666666668,
        },
        relativeHumidity: {
          unitCode: "wmoUnit:percent",
          value: 84,
        },
        windSpeed: "5 to 10 mph",
        windDirection: "SW",
        icon: "https://api.weather.gov/icons/land/night/tsra_hi,30?size=medium",
        shortForecast: "Chance Showers And Thunderstorms",
        detailedForecast:
          "A chance of showers and thunderstorms. Partly cloudy, with a low around 64. Chance of precipitation is 30%.",
      },
    ],
  },
};

export interface AccordionItem {
  id: number;
  content: {
    dewpoint: {
      unitCode: string;
      value: number;
    };
    relativeHumidity: {
      unitCode: string;
      value: number;
    };
    windSpeed: string;
    windDirection: string;
  };
}
