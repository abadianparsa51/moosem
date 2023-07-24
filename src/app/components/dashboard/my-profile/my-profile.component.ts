import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {
  userImage = 'assets/img/Mask1.png';
  userName = 'محمد حسین افضلی';
  userMobile = '09372560326';
  editProfileTitleBtnName = 'ویرایش حساب کاربری';
  editProfileCustomClass = 'link link_blue';
  editProfileURLLink = 'editInfo';
  editProfilebtnIcon = 'icon-avatar';
  authProfileTitleBtnName = 'اطلاعات احراز هویت';
  authProfileCustomClass = 'link link_blue';
  authProfileURLLink = 'authInfo';
  authProfilebtnIcon = 'icon-id-card';
  changePassTitleBtnName = 'تغیر رمز عبور';
  changePassCustomClass = 'link link_blue';
  changePassURLLink = 'changePassword';
  changePassbtnIcon = 'icon-padlock';
  constructor() { }

  ngOnInit() { }
}
