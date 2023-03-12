import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArrayService } from "../../services/array.service";

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})

export class ArrayModule {

  title: string = '';
  allArrayNames: string[] = []; //All keys in the arrayMap Map

  initArray: string[][] = []; //The tables in the Array Elements part of the form

  constructor(public arrayService: ArrayService) {

    this.allArrayNames = [
      arrayService.getArrayNames().OrderInteger,
      arrayService.getArrayNames().Fruits,
      arrayService.getArrayNames().UniqueInteger,
      arrayService.getArrayNames().Peoples
    ];

  };




  findIndexToNameTable(index:number){
    let nameTable = '';

    return nameTable;

  };

  removeElement(index:number,tableName:string){
  };

}
