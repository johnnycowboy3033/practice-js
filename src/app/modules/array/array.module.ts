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

  constructor(public arrayService: ArrayService) {
  }

  title: string= '';

  initArray: string[][] = []; //The tables in the Array Elements part of the form

  findIndexToNameTable(index:number){

    let nameTable = '';

    return nameTable;

  }

  removeElement(index:number,tableName:string){

  }

}
