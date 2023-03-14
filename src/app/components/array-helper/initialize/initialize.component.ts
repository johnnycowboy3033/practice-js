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

  ngOnInit(): void {

  }

  constructor(arrayService : ArrayService) {
    super(arrayService);

    this.title = arrayService.receiveActiveComponent();

    let contextMap : Map<any,any> = arrayService.receiveContext();
    if( typeof contextMap !== 'undefined' ){

      let componentMap : Map<any,any> = contextMap.get( this.title );
      if(typeof componentMap !== 'undefined' ){
        let table : string[][]  = componentMap.get(arrayService.getComponentContext().beginTables);

        table.forEach( (value,index,array)=>{
          this.initArray.push(value);
        });

        let beginDefaultNames : string[] = componentMap.get(arrayService.getComponentContext().beginDefaultNames);
        beginDefaultNames.forEach( (value,index,array)=>{
          this.beginDefaultNames.push(value);
        });

        let beginNames : string[] = componentMap.get(arrayService.getComponentContext().beginNames);
        beginNames.forEach( (value,index,array)=>{
          this.beginNames.push(value);
        });

      };


    }

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
