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

  context = new Map(); //Stores which table is display on the components

  /********************************************************************\
   * Initialize  Arrays                                               *
   * The tables/arrays BEFORE JavaScript Operations are preformed     *
  \********************************************************************/
  initArray: string[][] = [];

  beginDefaultNames: string[] = []; //The keys for table displayed in the Array Elements part of the form
  beginNames: string[] = []; //If you want to change the name of the table.

  /********************************************************************\
   * New  Arrays                                                       *
   * The tables/arrays AFTER JavaScript Operations are preformed       *
  \********************************************************************/
  newArray:string[][]=[];

  constructor(public arrayService: ArrayService) {

    this.allArrayNames = arrayService.enumElements(arrayService.getArrayNames(),true)

    this.context = arrayService.receiveContext();

  };

  getAllArrayNames(){
    return this.allArrayNames;
  }


  findIndexToNameTable(index:number, useDefault:boolean){
    let nameTable = '';
    nameTable = this.beginDefaultNames[ index ];

    if(!useDefault){

    }
    return nameTable;
  };

  removeElement(index:number,tableName:string){
  };

}
