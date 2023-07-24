import { Component, OnInit, Input } from '@angular/core';
import { tileLayer, latLng, Map, control, marker, circle, icon } from 'leaflet';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  @Input() costumStyle;
  @Input() pins;
  @Input() popCard;
  location: any;
  options = {
    layers: [
      tileLayer('https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}{r}.png', {
        maxZoom: 18
      })
    ],
    zoom: 15,
    center: latLng(35.741731, 51.41587),
    attributionControl: false,
    zoomControl: false
  };

  addMarker() {
    for (let index = 0; index < this.pins.length; index++) {
      const newMarker = marker(this.pins[index], {
        icon: icon({
          iconUrl: 'assets/img/SVGs/pin_map_on.svg',
          iconSize: [50, 50]
        })
      }).setLatLng(this.pins[index]);
      this.pins[index] = newMarker;
      this.location = newMarker.getLatLng();
      this.pins[index].bindPopup(
        `<div class="cardCont">
        <div class="sliderCont">
          <owl-carousel-o [options]="customOptionsForImage" class="removeCustomSliderStyle">
            <ng-container *ngFor="let slide of popCard.images">
              <ng-template carouselSlide>
                <img [src]="slide.image" [alt]="slide.alt" />
              </ng-template>
            </ng-container>
          </owl-carousel-o>
        </div>
        <a [routerLink]="popCard.link">
          <div class="flex-col middle-md center-md priceCont">
            <div class="col middle-md center-md">
              <p>اجاره هر شب</p>
            </div>
            <div class="col middle-md center-md">
              <p>{{ popCard.price }} تومان</p>
            </div>
          </div>
          <div class="descriptionCont">
            <b class="mainTitle">{{ popCard.title }}</b>
            <p class="subTitle" style="color: #b1b1b1;">{{ popCard.location }}</p>
          </div>
          <div class="flex-col detailsCont">
            <div [className]="innerWidth > 600 ? 'show col-md-16': 'hide' ">
              <ng-container *ngFor="let detail of popCard.details">
                <div class="col column-md middle-md center-md detail">
                  <span class="{{ detail.icon }} "></span>
                  <p>{{ detail.title }}</p>
                </div>
              </ng-container>
            </div>
            <div [className]="innerWidth < 600 ? 'show col-sm-16 between-sm': 'hide'">
                <app-rating
                [stars]="roomHollowStars"
                [fillStars]="roomRate"
                [ratingScore]="roomScore"
              ></app-rating>
              <span class="icon-avatar" style="font-size: 4rem; margin: 1rem 0.5rem;"></span>
            </div>
          </div>
        </a>
        <div class="discount">
          <p>
            <span>
              <!-- {{ popCard.precent }} -->
              18%
            </span>
            تخفیف
          </p>
        </div>
        <div class="bookmark">
          <span class="icon-bookmark_off">
            <div class="path1"></div>
            <div class="path2"></div>
          </span>
        </div>
      </div>
      `
      ).openPopup(this.location);
    }

  }

  onmapReady(map: Map) {
    map.addControl(control.zoom({ position: 'topright' }));
  }

  constructor() { }

  ngOnInit() {
    this.addMarker()
  }
}
