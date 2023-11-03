export interface Tide {
    data: TideData[];
    meta: {
      cost: number;
      dailyQuota: number;
      end: string;
      lat: number;
      lng: number;
      requestCount: number;
      start: string;
      station: {
        distance: number;
        lat: number;
        lng: number;
        name: string;
        source: string;
      };
    };
}

export interface TideData{
    sg: number;
    time: string;
}