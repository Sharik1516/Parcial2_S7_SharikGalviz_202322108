import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SeriesModule } from './series/series.module';
import { RouterModule } from '@angular/router';
import { SeriesComponent } from "./series/series.component";
import { FlightComponent } from './Flight/Flight.component';


@NgModule({
  declarations: [	 AppComponent,
      FlightComponent
   ],
  imports: [BrowserModule, SeriesModule, RouterModule, SeriesComponent],
  bootstrap: [ AppComponent ]
})
export class AppModule {}

