import { Injectable } from '@angular/core';
import 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class WeatherService {

  appId = '76d1b43ba3695cfae59aa9f7dc9b4877';
  baseUrl = 'https://api.openweathermap.org/data/2.5/';
  params = '&appId='+this.appId+'&units=metric';

  constructor(private http: HttpClient) {}

  searchCities(query: String){
    return this.http.get<any>(this.baseUrl + 'find?q=' + query + this.params);
  }
  
  getWeatherForecast(id: number){
    return this.http.get<any>(this.baseUrl + 'forecast?id='+id + this.params);
  }

  getCurrentWeather(id: number){
    return this.http.get<any>(this.baseUrl + 'weather?id='+id + this.params);
  }
}