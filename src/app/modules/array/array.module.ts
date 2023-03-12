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

  title: string = ''; //The name of the component being used
  allArrayNames: string[] = []; //All names of the arrays

  /********************************************************************\
   * Initialize  Arrays                                               *
   * The tables/arrays BEFORE JavaScript Operations are preformed     *
  \********************************************************************/
  initArray: string[][] = [];


  /********************************************************************\
   * New  Arrays                                                       *
   * The tables/arrays AFTER JavaScript Operations are preformed       *
  \********************************************************************/
  newArray:string[][]=[];

  constructor(public arrayService: ArrayService) {

    this.allArrayNames = arrayService.enumElements(arrayService.getArrayNames(),true)

  };


  findIndexToNameTable(index:number){
    let nameTable = '';

    return nameTable;

  };

  removeElement(index:number,tableName:string){
  };

}
