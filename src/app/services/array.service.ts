import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

enum ArrayNames {
  OrderInteger = 'Order Integer',
  Fruits = 'Fruits',
  UniqueInteger = 'Unique Integer',
  Peoples = 'Peoples',
};

enum ComponentName {
  Concatenate = 'Concatenate', CopyWithin = 'Copy Within', Entries = 'Entries',
  Every = 'Every', Fill = 'Fill', Filter = 'Filter', Find = 'Find',
  FindIndex = 'Find Index', ForEach = 'For Each', From = 'From', Includes ='Includes',
  IndexOf = 'Index Of', IsArray = 'IsArray', Join ='Join', Keys = 'Keys',
  LastIndexOf = 'Last Index Of', Map = 'Map', Pop ='Pop', Prototype= 'Prototype',
  Push = 'Push', Reduce = 'Reduce', ReduceRight ='Reduce Right', Reverse = 'Reverse',
  Shift = 'Shift', Slice = 'Slice', Some = 'Some', Sort ='Sort', Splice = 'Splice',
  ToString ='To String', Unshift = 'Unshift', ValueOf =  'Value Of',

};

interface  TableContext{
  Tables:string[][];
  DefaultNames:string[];
  Names:string[];

};

interface ComponentContext {
  Begin: TableContext;
  End: TableContext;
  ShouldCompare: boolean;
};

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

    this.context.set(ComponentName.Concatenate,
      this.managerContent( {ShouldCompare: true, Begin:{ DefaultNames:[ArrayNames.Fruits,ArrayNames.Peoples] }, } ));

    this.context.set(ComponentName.CopyWithin,
      this.managerContent( { Begin:{ DefaultNames:[ArrayNames.Peoples] }, }  ));
  }

  private dataSourceActiveComponent  =  new BehaviorSubject<string>(this.activeComponent);
  dataActiveComponent : Observable<string> = this.dataSourceActiveComponent.asObservable();

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

  getArrayNames(){
    return ArrayNames;
  }

  getComponentName(){
    return ComponentName;
  }

  enumElementCount(enumName: any): number {
    let count = 0
    for(let item in enumName) {
      if(isNaN(Number(item))) count++
    }
    return count
  }

  managerContent(data: { ShouldCompare?: boolean; Begin:{DefaultNames:string[]} } ) {

    //If the value is assign do nothing. If is undefined, null, or never make the value false.
    if(typeof data.ShouldCompare != 'boolean'){data.ShouldCompare = false;}

    //Populating the initial state of the array BEFORE the JavaScript Operation is preformed.
    let componentTables = new Array();
    let componentName =  new Array();

    if(data.Begin.DefaultNames.length > 0){

      data.Begin.DefaultNames.forEach( (value,index,array) =>{
        componentTables.push( this.tables.get(value) );
        componentName.push(value);
      });

    }else{
      //TODO: Throw error if array is empty.
    }

    return {
      Begin: {
        Tables:componentTables,
        DefaultNames: componentName,
        Names:[],
      },
      End:{
        Tables:[[]],
        DefaultNames:[],
        Names:[],
      },
      ShouldCompare: data.ShouldCompare,
    };
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
