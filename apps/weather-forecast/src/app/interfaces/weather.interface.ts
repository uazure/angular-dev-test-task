interface WeatherForecast {
	clouds: number
	dew_point: number
	dt: number
	feels_like: { day: 308.73, night: 296.02, eve: 299.05, morn: 298.43 }
	humidity: number
	moon_phase: number
	moonrise: number
	moonset: number
	pop: number
	pressure: number
	rain: number
	sunrise: number
	sunset: number
	temp: { day: number, min: number, max: number, night: number, eve: number, morn: number }
	uvi: number
	weather: {
		description: string
		icon: string
		id: number
		main: string
	}[]
	wind_deg: number
	wind_gust: number
	wind_speed: number
}

export interface DailyForecast {
	daily: WeatherForecast[]
	lat: number
	lon: number
}

export interface HourlyForecast {
	hourly: WeatherForecast[]
	lat: number
	lon: number
}
