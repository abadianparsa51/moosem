import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  addResidenceGuideBtnName = " راهنمای افزودن اقامتگاه ";
  addResidenceGuideURLLink = "  ";
  addResidenceGuideBtnIcon = "  ";
  addResidenceGuideCustomClass = "btn btn_blueGuid";

  addIntervalBtnName = " افزودن بازه ";
  addIntervalURLLink = "  ";
  addIntervalBtnIcon = "  ";
  addIntervalCustomClass = "btn btn_blueInterval";

  deleteBtnName = "  ";
  // deleteURLLink = "  ";
  deleteBtnIcon = "icon-delete";
  deleteCustomClass = "  ";

  saveBtnName = " ذخیره ";
  // saveURLLink = "  ";
  saveBtnIcon = " ";
  saveCustomClass = "btn btn_blueSave";





  constructor() { }

  ngOnInit() {
  }

}
