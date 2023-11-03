import { LocationConfiguration} from "./LocationConfiguration";
import { TideData } from "./TideResponse";
import { Hour, WeatherData } from "./WeatherData";

export interface LocationConfigurationpack{

    locationConfigurations:LocationConfiguration[]
    historicalHours:Hour[]
    hours:Hour[]
    tides:TideData[]
    latitude:number
    longitude:number
    name:string
}