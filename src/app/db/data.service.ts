export class DataService {

  public data: any = {
    service: { link: '../../assets/img/service-bg.png' },
    aboutUs: { link: '../../assets/img/about-bg.png' },
  }

  getData(key: string): any {
    return this.data[key];
  }


}



