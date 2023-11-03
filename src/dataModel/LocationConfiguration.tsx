import { TideData } from "./TideResponse";
import { Hour, WeatherData } from "./WeatherData";

export interface LocationConfiguration {
    id:String;
    name: string;
    longitude:number;
    latitude:number;
    GoodSwellHeight:number;
    NormalSwellHeight:number;
    GoodSwellPeriod:number;
    NormalSwellPeriod:number;
    GoodTide:number;
    NormalTide:number;
    GoodWindDirection:string;
    NormalWindDirection:string;
    GoodWindSpeed:number;
    NormalWindSpeed:number;
}