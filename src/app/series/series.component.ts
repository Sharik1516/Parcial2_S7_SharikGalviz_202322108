import { Component } from '@angular/core';
import { SeriesListComponent } from "./series-list/series-list.component";

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  imports: [SeriesListComponent]
})
export class SeriesComponent {}
