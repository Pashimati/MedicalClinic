import {Component, Input, OnInit,} from '@angular/core';
import {DataService} from "../../db/data.service";


@Component({
  providers: [DataService],
  selector: 'app-section-preview',
  templateUrl: './section-preview.component.html',
  styleUrls: ['./section-preview.component.scss']
})
export class SectionPreviewComponent implements OnInit  {

  @Input() key: string = "";

  imageLink: string = "assets/img/service-bg.png"

  constructor(private dataService: DataService) {
  }

 ngOnInit() {
   const link = this.dataService.getData(this.key)?.link;
   if (link) {
     this.imageLink = link
   }
 }
}
