import { DisplayCards } from "./script.mjs";

export async function GetData() {
    const response = await fetch('https://samuelmaciel015.github.io/wdd231/chamber/data/members.json');
    const data = await response.json();
    DisplayCards(data.businesses);
}