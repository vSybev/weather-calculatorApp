import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeatherComponent } from './weather/weather.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { CurrencyComponent } from './currency/currency.component';

const appRoutes: Routes = [
  { 
    path: '', 
    redirectTo: '/weather', 
    pathMatch: 'full' 
  },
  {
    path: 'weather', 
    component: WeatherComponent
  },
  {
    path: 'calculator', 
    component: CalculatorComponent
  },
  {
    path: 'currency', 
    component: CurrencyComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
