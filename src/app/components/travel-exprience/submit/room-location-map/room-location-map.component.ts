import { Component, OnInit } from "@angular/core";
import { SubmitComponent } from "../submit.component";
import { Router } from "@angular/router";

@Component({
  selector: "app-room-location-map",
  templateUrl: "./room-location-map.component.html",
  styleUrls: ["./room-location-map.component.scss"]
})
export class RoomLocationMapComponent implements OnInit {
  formTitle = "مکان تجربه سفر خود را در نقشه مشخص کنید";
  nextBtnTitle = "بعدی";
  nextBtnCustomClass = "btn btn_blue";
  nextBtnURlLink = "/travel-exprience/submit/setroomtitle";
  prevBtnURlLink = "/travel-exprience/submit/baseInfo";
  prevBtnTitle = "قبلی";
  prevBtnCustomClass = "btn btn_light_blue";
  iconValue = "icon-back_arrow";
  info = [
    {
      infoTitle: "موسم با شماست",
      infoContent: [
        {
          title: "‎آدرس اقامتگاه‎",
          text:
            "‎‏ آدرس دقیق اقامتگاه, تنها پس از ‎قطعی شدن رزرو‎, به اطلاع میهمان خواهد رسید‎.‎‎درج کد پستی اختیاری است."
        }
      ]
    }
  ];
  map = { height: "30rem", width: "120%" };

  constructor(private submit: SubmitComponent, private router: Router) { }

  ngOnInit() { }
  incProgress(): void {
    this.submit.increaseLevel();
    this.router.navigate([this.nextBtnURlLink]);
  }
  decProgress(): void {
    this.submit.decreaseLevel();
    this.router.navigate([this.prevBtnURlLink]);
  }
}
