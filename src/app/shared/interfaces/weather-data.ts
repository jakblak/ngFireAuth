export interface WeatherData {
  weather: [
    {
      description: string
      icon: string
    }
  ];
  main: {
    temp: number
  };
  sys: {
    country: string
  };
  coord: {
    lon: number,
    lat: number
  };
  name: string;
}
