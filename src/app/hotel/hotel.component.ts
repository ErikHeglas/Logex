import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {
  showDetails: boolean = false;
  @Input() hotelData;
  mainImg: string;
  noImg: string = "../assets/images/hotel-basic.png";

  constructor() { }

  ngOnInit(): void {
    this.toLowerCase()
    this.getMainImg()
  }

  getMainImg() {
    this.hotelData.imgUrl.map(data => { if (data.main === 'true') this.mainImg = data.url; })
  }

  toLowerCase() {
    this.hotelData.city = this.hotelData.city.toLowerCase();
    this.hotelData.city = this.hotelData.city.charAt(0).toUpperCase() + this.hotelData.city.slice(1);
  }

  onShowDetails() {
    this.showDetails = !this.showDetails;
  }
}
