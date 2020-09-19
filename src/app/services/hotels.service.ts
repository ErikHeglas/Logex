import { Injectable, OnChanges } from '@angular/core';

import { HotelsDataModel } from '../shared/hotels.model';
import * as FrontendData from '../../assets/establishmentData.json';

@Injectable()
export class HotelsService {
    toLoad: number = 10;
    fromLoad: number = 0;
    toSearch: any = {
        name: [],
        year: [],
        psCode: [],
        city: [],
    }

    hotelsData: HotelsDataModel[] =
        FrontendData.default.slice(0, this.toLoad).map(data => {
            return new HotelsDataModel(
                data.title,
                data.dates.startdate,
                data.location.city,
                data.location.zipcode,
                data.location.adress,
                data.details.en.longdescription,
                data.urls[0],
                data.media
            )
        })

    setSearch(searchData) {
        this.toSearch = searchData;
        if (
            this.toSearch.year.length < 1 &&
            this.toSearch.name.length < 1 &&
            this.toSearch.city.length < 1 &&
            this.toSearch.psCode.length < 1) {
            this.hotelsData = []
            this.fromLoad = 0;
            return this.load(false)
        }

        this.hotelsData = []

        FrontendData.default.map((hotelData) => {
            var fMain: boolean = true

            var fName: boolean[] = []
            if (this.toSearch.name.length > 0) {
                this.toSearch.name.map((name) => {
                    hotelData.title.includes(name) ? fName.push(true) : fName.push(false)
                })
            }
            if (!fName.includes(true) && fName.length > 0) { fMain = false };

            var fCity: boolean[] = []
            if (this.toSearch.city.length > 0) {
                this.toSearch.city.map((city) => {
                    hotelData.location.city.includes(city.toUpperCase()) ? fCity.push(true) : fCity.push(false)
                })
            }
            if (!fCity.includes(true) && fCity.length > 0) { fMain = false };

            var fYear: boolean[] = []
            if (this.toSearch.year.length > 0) {
                this.toSearch.year.map((year) => {
                    if (hotelData.dates.startdate) {
                        hotelData.dates.startdate.includes(year.toUpperCase()) ? fYear.push(true) : fYear.push(false)
                    }
                    else fYear.push(true)
                })
            }
            if (!fYear.includes(true) && fYear.length > 0) { fMain = false };

            var fPsCode: boolean[] = []
            if (this.toSearch.psCode.length > 0) {
                this.toSearch.psCode.map((psCode) => {
                    hotelData.location.zipcode.includes(psCode) ? fPsCode.push(true) : fPsCode.push(false)
                })
            }
            if (!fPsCode.includes(true) && fPsCode.length > 0) { fMain = false };

            if (fMain) {
                this.hotelsData.push(new HotelsDataModel(
                    hotelData.title,
                    hotelData.dates.startdate,
                    hotelData.location.city,
                    hotelData.location.zipcode,
                    hotelData.location.adress,
                    hotelData.details.en.longdescription,
                    hotelData.urls[0],
                    hotelData.media
                ))
            }
        })
    }

    load(more) {
        if (more) {
            this.fromLoad = this.toLoad;
            this.toLoad = this.toLoad + 10;
        }
        FrontendData.default.slice(this.fromLoad, this.toLoad).map(data => {
            this.hotelsData.push(new HotelsDataModel(
                data.title,
                data.dates.startdate,
                data.location.city,
                data.location.zipcode,
                data.location.adress,
                data.details.en.longdescription,
                data.urls[0],
                data.media
            ))
        })
    }
}