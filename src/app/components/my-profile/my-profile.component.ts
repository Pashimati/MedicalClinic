import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";


@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {

  profile: FormGroup

  constructor() {
    this.profile = new FormGroup({

      name: new FormControl("", Validators.min(3)),
      surname: new FormControl("", Validators.min(3)),
      sex: new FormControl(),
      age: new FormControl("", Validators.pattern("[0-9]{2}")),
      address: new FormControl("", Validators.min(20)),
      phone: new FormControl("", Validators.pattern("[- +()0-9]+")),
    });

  }

  ngOnInit(): void {
  }


  submit() {
    const data = this.profile.getRawValue()
    console.log(data)
  }
}
