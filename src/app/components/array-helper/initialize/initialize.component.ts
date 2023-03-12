import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

import { ArrayModule } from '../../../modules/array/array.module'

@Component({
  selector: 'app-initialize',
  templateUrl: './initialize.component.html',
  styleUrls: ['./initialize.component.css']
})
export class InitializeComponent extends ArrayModule {

  tableNameForm: string[] = []; //The keys for table displayed in the Array Elements part of the form
  allArrayNames: string[] = []; //All keys in the arrayMap Map

  //The New Element Text Box for adding new elements to arrays in the Add Element part of the form
  newElementForm = new FormGroup({
    choose: new FormControl(''),
    element: new FormControl(''),
  });

  //The Array List Drop Down Box for changing arrays in the Select Array part of the form
  arrayNamesForm = new FormGroup({
    choose: new FormControl(''),
    names: new FormControl(''),

  });


  addElementEnd(){

  };

  selectArray(){

  };

}
