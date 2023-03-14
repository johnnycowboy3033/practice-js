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

  endDefaultNames: string[] = []; //The keys for table displayed in the Array Elements part of the form
  endNames: string[] = []; //If you want to change the name of the table.

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

  findNameToIndexTable(name:string, useDefault:boolean, isBegin:boolean){

    let tempIndex = -1;
    let table = new Array();

    if(useDefault){
      if(isBegin){
        this.arrayService.clone(this.beginDefaultNames, table);
      }else{
        this.arrayService.clone(this.endDefaultNames, table);
      }
    }else{
      if(isBegin){
        this.arrayService.clone(this.beginNames, table);
      }else{
        this.arrayService.clone(this.endNames, table);
      }
    }

    table.forEach((value,index,array)=>{

      if( value == name ){
        tempIndex = index;
      };
    });

    return tempIndex;

  };


  findIndexToNameTable(index:number, useDefault:boolean, isBegin:boolean){
    let nameTable = '';

    if(useDefault){
      if(isBegin){
        nameTable = this.beginDefaultNames[ index ];
      }else{
        nameTable = this.endDefaultNames[ index ];
      }
    }else{
      if(isBegin){
        nameTable = this.beginNames[ index ];
      }else{
        nameTable = this.endNames[ index ];
      }

    }
    return nameTable;
  };

}
