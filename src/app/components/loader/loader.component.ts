import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../../service/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['loader.component.scss']
})
export class LoaderComponent implements OnInit {

  loading$ = this.loader.loading$

  constructor(private loader: LoaderService) { }
  ngOnInit() {
  }
}
