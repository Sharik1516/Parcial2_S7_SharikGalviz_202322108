import { Component, OnInit } from '@angular/core';
import { Serie } from '../serie.model';
import { SeriesService } from '../series.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-series-list',
  imports: [CommonModule],
  templateUrl: './series-list.component.html'
})
export class SeriesListComponent implements OnInit {
  series: Serie[] = [];
  averageSeasons: number = 0;

  constructor(private seriesService: SeriesService) {}

  ngOnInit(): void {
    this.series = this.seriesService.getSeries();
    this.averageSeasons = this.getAverageSeasons();
  }

  getAverageSeasons(): number {
    const total = this.series.reduce((sum, serie) => sum + serie.seasons, 0);
    return total / this.series.length;
  }

  selectedSerie: Serie | null = null;

  selectSerie(serie: Serie) {
    this.selectedSerie = serie;
  }

}
