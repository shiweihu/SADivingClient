export interface WeatherData {
    hours: Hour[];
    meta: Meta;
}

export interface Hour {
    airTemperature: Value;
    swellHeight: Value;
    swellPeriod:Value;
    time: string;
    waterTemperature: Value;
    waveHeight: Value;
    windDirection: Value;
    windSpeed: Value;
    windWaveHeight: Value;
}

interface Value {
    sg: number;
}

interface Meta {
    cost: number;
    dailyQuota: number;
    end: string;
    lat: number;
    lng: number;
    params: string[];
    requestCount: number;
    source: string[];
    start: string;
}