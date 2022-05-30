import { Component } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_usaLow from "@amcharts/amcharts4-geodata/usaLow";
import { MapChart } from '@amcharts/amcharts4/maps';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title(_title: any) {
    throw new Error('Method not implemented.');
  }
  private chart: am4maps.MapChart = new MapChart;
  ngAfterViewInit(){
    this.chart = am4core.create("chartdiv",am4maps.MapChart);
    this.chart.geodata = am4geodata_usaLow;
    this.chart.projection = new am4maps.projections.AlbersUsa();

    let polygonSeries = this.chart.series.push(new am4maps.MapPolygonSeries());
    polygonSeries.exclude = ["AQ"];
    polygonSeries.useGeodata = true;

    let polygonTemplate= polygonSeries.mapPolygons.template;
    polygonTemplate.tooltipText="{name}";
    polygonTemplate.polygon.fillOpacity = 0.6;
    polygonTemplate.fill = am4core.color("black");
    let hs = polygonTemplate.states.create("hover");
    hs.properties.fill = am4core.color("#9EC2F7");
  }
  ngOnDestroy(){
    if(this.chart){
      this.chart.dispose();
    }
  }
}