import { Component, OnInit   } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

import { ArrayModule } from '../../../modules/array/array.module'
import {ArrayService} from "../../../services/array.service";

@Component({
  selector: 'app-initialize',
  templateUrl: './initialize.component.html',
  styleUrls: ['./initialize.component.css']
})
export class InitializeComponent extends ArrayModule implements OnInit  {

  tableNameForm: string[] = []; //The keys for table displayed in the Array Elements part of the form

  ngOnInit(): void {

  }

  constructor(arrayService : ArrayService) {
    super(arrayService);

    this.title = arrayService.receiveActiveComponent();


  }

  //The New Element Text Box for adding new elements to arrays in the Add Element part of the form
  addElementForm = new FormGroup({
    choose: new FormControl(''),
    element: new FormControl(''),
  });

  //The Array List Drop Down Box for changing arrays in the Select Array part of the form
  selectArrayForm = new FormGroup({
    choose: new FormControl(''),
    names: new FormControl(''),

  });


  addElementEnd(){

  };

  selectArray(){

  };



}
