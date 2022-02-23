import {Department} from "../components/our-departments/our-departments.component";

export class DataService{

  public data: any = {
    service: { link: '../../assets/img/service-bg.png' },
    aboutUs: { link: '../../assets/img/about-bg.png' },
    contact: { link: '../../assets/img/news-bg.jpg' },
  }

  getData(key: string): any {
    return this.data[key];
  }




  public departments: Department[] = [
    {
      name: 'cardioology',
      logoLink: '../../assets/img/cardiogram.png',
      description: 'Lorem ipsum dolor sit amet, consectetu123123123r adipiscing elit. Donec malesuada lorem maximus mauris.'
    },
    {
      name: 'fdsss',
      logoLink: '../../assets/img/glasses.png',
      description: 'Lorem ipsum dolor sit amet, consectetur ewewe2212adipiscing elit. Donec malesuada lorem maximus mauris.'
    },
    {
      name: 'cardi42oology',
      logoLink: '../../assets/img/cardiogram.png',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris.'
    },
    {
      name: 'cardi42oology',
      logoLink: '../../assets/img/cardiogram.png',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris.'
    },
   {
      name: 'cardiokkkkkkkology',
      logoLink: '../../assets/img/cardiogram.png',
      description: 'Lorem ipsum dolor sit amet, consectetur adipis8888888cing elit. Donec malesuada lorem maximus mauris.'
    },
  ]


  getDepartments(): Department [] {
    return this.departments;
  }


  // public doctors: Doctor[] = [
  //   {
  //     name: '',
  //     surname: '',
  //     photo: '',
  //     aboutMe: '',
  //     speciality: '',
  //   }
  // ]
}