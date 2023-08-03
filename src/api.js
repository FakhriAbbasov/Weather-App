export const GEOurl = "https://wft-geo-db.p.rapidapi.com/v1/geo/cities";
export const WEATHERurl = "https://api.openweathermap.org/data/2.5";
export const WEATHERkey = ""; //Put your Open Weather API key here

export const geoApiOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "", // Put your GeoDB Rapid API key here
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
  },
};
