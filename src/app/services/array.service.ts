import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

import { ArrayNames } from '../enumerates/array/array-names'
import { ComponentNames } from '../enumerates/array/component-names'
import { ComponentContext } from '../enumerates/array/component-context'


@Injectable({
  providedIn: 'root'
})

export class ArrayService {

  /***************************************************************\
  * TABLES
  *
  * Description:
  * The below arrays are used to populate the STORAGE.
  **************************************************************/
  tables = new Map(); //Stores Lists of Arrays to apply the JavaScript Array Functions

  //Contains of the tables. The items in this array should not change. They are used to
  //initial purposes.
  OrderInteger:string[] = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
  Fruits:string[] = ["Banana", "Orange",'Melon', "Apple", "Mango", "Berries", "Watermelon"];
  UniqueInteger:string[] = ["3","8","13","11","4","6","2","1","12","15","14","5","7","10","9"];
  Peoples:string[] = ["Cecilie", "Lone", "Emil", "Tobias", "Linus"];

  /***************************************************************\
  * STORAGE
  *
  * Description:
  * Each component has init and new array.
  ***************************************************************/
  activeComponent: string = ''; // Keeps index of componentsKeys to know active component

  context = new Map(); //Stores which table is display on the components

  constructor() {
    this.tables.set(ArrayNames.OrderInteger, this.OrderInteger);
    this.tables.set(ArrayNames.Fruits, this.Fruits);
    this.tables.set(ArrayNames.UniqueInteger, this.UniqueInteger);
    this.tables.set(ArrayNames.Peoples, this.Peoples);

    this.context.set(ComponentNames.Concatenate,
      this.managerContent( {ShouldCompare: true, Begin:{ DefaultNames:[ArrayNames.Fruits,ArrayNames.Peoples] }, } ));

    this.context.set(ComponentNames.CopyWithin,
      this.managerContent( { Begin:{ DefaultNames:[ArrayNames.Peoples] }, }  ));

  }

  managerContent(data: { ShouldCompare?: boolean; Begin:{DefaultNames:string[]} } ){

    let contextComponent = new Map(); //Stores each item on the components

    //If the value is assign do nothing. If is undefined, null, or never make the value false.
    if(typeof data.ShouldCompare != 'boolean'){data.ShouldCompare = false;}
    contextComponent.set(ComponentContext.shouldCompare,  data.ShouldCompare);

      //Populating the initial state of the array BEFORE the JavaScript Operation is preformed.
    let beginTables = new Array();
    let beginDefaultsName =  new Array();
    let beginNames =  new Array();

    let count = 0;

    if(data.Begin.DefaultNames.length > 0){

      data.Begin.DefaultNames.forEach( (value,index,array) =>{
        beginTables.push( this.tables.get(value) );
        beginDefaultsName.push(value);
        beginNames.push("");
        count++;
      });

    }else{
      //TODO: Throw error if array is empty.
    }

    contextComponent.set(ComponentContext.beginTables,  beginTables );
    contextComponent.set(ComponentContext.endTables, []);

    contextComponent.set(ComponentContext.beginDefaultNames, beginDefaultsName);
    contextComponent.set(ComponentContext.endDefaultNames, []);

    contextComponent.set(ComponentContext.beginNames, beginNames);
    contextComponent.set(ComponentContext.endNames, []);

    contextComponent.set(ComponentContext.beginSize,  count );
    contextComponent.set(ComponentContext.endSize,  0 );

    return contextComponent;

  }



  private dataSourceActiveComponent  =  new BehaviorSubject<string>(this.activeComponent);
  dataActiveComponent : Observable<string> = this.dataSourceActiveComponent.asObservable();

  private dataSourceContext  =  new BehaviorSubject<Map<any, any>>(this.context);
  dataContext : Observable<Map<any, any>> = this.dataSourceContext.asObservable();

  /***********************\
  *  Getter and Setters   *
  \***********************/

  sendActiveComponent(dataActiveComponent: string) {
    this.dataSourceActiveComponent .next(dataActiveComponent);
  }

  receiveActiveComponent(){
    this.dataSourceActiveComponent .subscribe(response => {
      this.activeComponent = response;
    });
    return this.activeComponent;
  };

  sendContext(dataContext: Map<any,any>) {
    this.dataSourceContext.next(dataContext);
  }

  receiveContext(){
    this.dataSourceContext.subscribe(response => {
      this.context = response;
    });
    return this.context;
  };

  /*************************************************************************************/

  getArrayNames(){
    return ArrayNames;
  }

  getComponentContext(){
    return ComponentContext ;
  }

  getComponentNames(){
    return ComponentNames;
  }

  enumElementCount(enumName: any): number {
    let count = 0
    for(let item in enumName) {
      if(isNaN(Number(item))) count++
    }
    return count
  }


  //This method returns array of enum keys or value based on getKeys value.
  enumElements(enumName: any, getKeys:boolean) : string[]{

    let names: string[] = [];

    //TODO: Make decision to refactor - enumNames is array so makes sense to turn array into a array
    for (let member in enumName){
        //console.log( "Key: " + member + " Value: "+ enumName[member]);

        if(getKeys){
          names.push( member );
        }else{
          names.push( enumName[member] );
        }

    };

    return names;
  };



  /******************\
   * METHODS         *
  \******************/

  /*
   Description:
   This method creates new array than takes the contains of one array copies
   into the other array.
   Parameter:
   originalArray - the array where contain is copied from
   cloneArray - the array where contain is copied into
  */
  clone(originalArray:string[] , cloneArray:string[]){
    //This will remove all elements from the array and will actually clean the original array.
    cloneArray.splice(0, cloneArray.length)

    for (let r = 0; r < originalArray.length; r++) {
      cloneArray.push(originalArray[r]);
    }
  }

  /*

  Description:
  Remove element for the beginning, middle and end of the array
  Parameter:
  removalIndex - the element want to remove the originalArray array
  originalArray - array where the element will be removed
  */

  removeElement(removalIndex:number,originalArray:string[] ){

    let newArray:string[] = [];

    for( let index = 0; index < originalArray.length; index++){
      if( removalIndex != index){
        newArray.push(originalArray[index]);
      };
    };

    return newArray
  };



}
