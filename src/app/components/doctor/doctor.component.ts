import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['../my-profile/my-profile.component.scss']
})
export class DoctorComponent implements OnInit {

  id: string | undefined;

  constructor(private route: ActivatedRoute){}
  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap(params => params.getAll('id'))
    )
      .subscribe(data => this.id = data);

    console.log(this.id)
  }

}
