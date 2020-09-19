import { Component } from '@angular/core';
import { HotelsDataModel } from './shared/hotels.model';
import { HotelsService } from './services/hotels.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Logex';
  hotelsToDisplay: HotelsDataModel[] = this.hotelsService.hotelsData;

  searching: any = {
    name: [],
    year: [],
    psCode: [],
    city: [],
  }

  constructor(private hotelsService: HotelsService) { }

  addSearchYear(year) {
    if (this.searching.year.indexOf(year.value) === -1 && year.value !== '') {
      this.searching.year.push(year.value);
      year.value = '';
      this.hotelsService.setSearch(this.searching);
      this.hotelsToDisplay = this.hotelsService.hotelsData;
    }
  }
  removeSearchYear(year) {
    var index = this.searching.year.indexOf(year);
    this.searching.year.splice(index, 1);
    this.hotelsService.setSearch(this.searching);
    this.hotelsToDisplay = this.hotelsService.hotelsData;
  }

  addSearchPsCode(psCode) {
    if (this.searching.psCode.indexOf(psCode.value) === -1 && psCode.value !== '') {
      this.searching.psCode.push(psCode.value);
      psCode.value = '';
      this.hotelsService.setSearch(this.searching);
      this.hotelsToDisplay = this.hotelsService.hotelsData;
    }
  }
  removeSearchPsCode(psCode) {
    var index = this.searching.psCode.indexOf(psCode);
    this.searching.psCode.splice(index, 1);
    this.hotelsService.setSearch(this.searching);
    this.hotelsToDisplay = this.hotelsService.hotelsData;
  }

  addSearchCity(city) {
    if (this.searching.city.indexOf(city.value) === -1 && city.value !== '') {
      this.searching.city.push(city.value);
      city.value = '';
      this.hotelsService.setSearch(this.searching);
      this.hotelsToDisplay = this.hotelsService.hotelsData;
    }
  }
  removeSearchCity(city) {
    var index = this.searching.city.indexOf(city);
    this.searching.city.splice(index, 1);
    this.hotelsService.setSearch(this.searching);
    this.hotelsToDisplay = this.hotelsService.hotelsData;
  }

  addSearchName(name) {
    if (this.searching.name.indexOf(name.value) === -1 && name.value !== '') {
      this.searching.name.push(name.value)
      name.value = '';
      this.hotelsService.setSearch(this.searching);
      this.hotelsToDisplay = this.hotelsService.hotelsData;
    }
  }
  removeSearchName(name) {
    var index = this.searching.name.indexOf(name);
    this.searching.name.splice(index, 1);
    this.hotelsService.setSearch(this.searching);
    this.hotelsToDisplay = this.hotelsService.hotelsData;
  }

  loadMore() {
    this.hotelsService.load(true)
    this.hotelsToDisplay = this.hotelsService.hotelsData;
  }



}
