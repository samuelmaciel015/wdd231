import { DisplayWeatherInfo } from "./script.mjs";

export async function GetWeather(url) {
    const response = await fetch(url);
    const data = await response.json();
    DisplayWeatherInfo(data);
};