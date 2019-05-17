import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { WeatherService } from '../shared/services/weather.service'

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private weatherService: WeatherService) { }
  currentWeather = {};
  isDataFetched: boolean = false;

  weatherForecasts = [];
  id: number;
  ngOnInit() {
  	this.id = this.route.snapshot.params['id'];
  	this.fetchWeatherData(this.id);
  	debugger;
  }

  fetchWeatherData(id: number){
  	this.weatherService.getCurrentWeather(id)
	  .subscribe((current) => {
      debugger;
	  	this.currentWeather = current;
	  	this.weatherService.getWeatherForecast(id)
	  	.subscribe((forecast) => {
	  		this.weatherForecasts = forecast.list;
        this.isDataFetched = true;
	  		debugger;
	  	},
    (error) => {
        console.log(error);
        alert("Ocorreu um erro ao enviar os dados ao servidor :(");
    })
	  },
    (error) => {
        console.log(error);
        alert("Ocorreu um erro ao enviar os dados ao servidor :(");
    })
  }
  convertUtcDateToHourString(date: number){
    const jsDate = new Date(date * 1000);
    const stringDate = jsDate.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    return stringDate;
  }
  convertUtcDateToDateString(date: number){
    //String no formato 'Thu 2 Aug'
    const jsDate = new Date(1000 * date);
    const stringDate = jsDate.toString();
    const arrayDate = stringDate.split(" ");
    return arrayDate[0] + " " + arrayDate[2] + " " + arrayDate[1];
  }

  convertUtcDateToSubtitleString(date: number){
    //String no formato '12:57 Aug 2'
    const jsDate = new Date(1000 * date);
    const stringDate = jsDate.toString();
    const arrayDate = stringDate.split(" ");
    const splittedHour = arrayDate[4].split(":");
    const hour = splittedHour[0] + ":" + splittedHour[1];
    return hour + " " + arrayDate[1] + " " + arrayDate[2];
  }
}
