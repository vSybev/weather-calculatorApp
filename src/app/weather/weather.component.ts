import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';
import { WeatherData } from './weather.model';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit{
  
  constructor(
    private weatherService: WeatherService,
  ){}

  cityName: string = 'Plovdiv';
  weatherData?: WeatherData
  
  ngOnInit(){
    this.getWeatherData(this.cityName);
    this.cityName = '';
  }

  onSubmit(){
    this.getWeatherData(this.cityName);
    this.cityName = '';
  }

  private getWeatherData(cityName: string){
    this.weatherService.getWeatherData(cityName)
      .subscribe({
        next: (res) => {
          this.weatherData = res
          console.log(res)
        }
      });
  }

}
