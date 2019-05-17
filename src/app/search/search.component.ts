import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { WeatherService } from '../shared/services/weather.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
	query: String;
	cities = [];
  constructor(private route: ActivatedRoute, private router: Router, private weatherService: WeatherService) { }

  ngOnInit() {
  	this.query = this.route.snapshot.params['query'];
  	this.fetchWeathers(this.query);
  }

  fetchWeathers(query: String){
  	this.weatherService.searchCities(query)
  	.subscribe((response) => {
  		this.cities = response.list;
  		debugger;
  	},
  	(error) => {
        console.log(error);
        alert("Ocorreu um erro ao enviar os dados ao servidor :(");
  	});
  }

}
