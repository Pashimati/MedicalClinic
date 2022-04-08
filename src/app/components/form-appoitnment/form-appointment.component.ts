import {Component, OnInit, Output} from '@angular/core';
import { DataService } from '../../db/data.service'
import { Doctor } from "../team/team.component";
import {FormControl, FormGroup, Validators} from "@angular/forms";


interface nameDepartment {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-form-appointment',
  templateUrl: './form-appointment.component.html',
  styleUrls: ['./form-appointment.component.scss'],
  providers: [DataService]
})
export class FormAppointmentComponent implements OnInit {

  appointment: FormGroup

  doctors: Doctor [] = [];

  constructor(private dataService : DataService) {
    this.appointment = new FormGroup({

      date: new FormControl(),
      time: new FormControl(),
      email: new FormControl("", [
        Validators.required,
        Validators.email
      ]),
      name: new FormControl(),
      nameDepartment: new FormControl(),
      nameDoctor: new FormControl(),
    });
  }

  ngOnInit(): void {
  }

  nameDepartments: nameDepartment[] = [
    {value: 'cardiology', viewValue: 'Кардиология'},
    {value: 'ortopedia', viewValue: 'Хирургия'},
  ];


  onChange(event: any) {
    const department: string = event.value
    this.doctors = this.getDoctors(department);
  }


  getDoctors(department: string) {

    let response: Doctor [] = []

    const allDoctors: Doctor[] = this.dataService.getDoctors()
    allDoctors.forEach((doctor) => {
      if (doctor.department === department) {
        response.push(doctor)
      }
    })
   return response
  }



  submit() {
    const data = this.appointment.getRawValue()
    console.log(data)
  }


}

// в первом селекте спрашивать категорию врача и отталкиваясь от категории врача показывать данных врачей


//  создаю свойство называю Докторс
//  создаю свойство называю Департментс это объект у которого ключ это валую а значение этоого объекта это описание для опшиона
//  формирую список отделов ключ и значение Неврология и тд (самое важное ключи отделов совпадали с новым свойством внутри объекта врача)
//  добавлю  свойство в объект с врачами чтобы оно совпадала с валую опшиона департмент
//  вешаю событие на селект с отделами ончандже создаю функцию


//  у измененого селекта находим текущий опшион и у него получаем валуе с именем отдела  валуе==ключ
//  пишу функцию которая принимает параметр намеДепартмент  для ее работы подключить дата сервис вызову функцию и сохраню в переменную все врачи
//  пробегаюсь по врачам в цикле нахожу всех врачей с нужным мне отделом отдел==тому отделу
//  нужных врачей сохраняю во времнный массив и отфильтрованый масив записываю в переменную докторс и показываю ее
