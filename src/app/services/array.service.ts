import { Injectable } from '@angular/core';

enum ArrayNames {
  OrderInteger = 'Order Integer',
  Fruits = 'Fruits',
  UniqueInteger = 'Unique Integer',
  Peoples = 'Peoples',
};

@Injectable({
  providedIn: 'root'
})


export class ArrayService {


  /***************************************************************\
   * POPULATE TABLES
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
   **************************************************************/
   activeComponent: string = ''; // Keeps index of componentsKeys to know active component

   context = new Map(); //Stores which table is display on the components

  constructor() {
    this.tables.set(ArrayNames.OrderInteger, this.OrderInteger); //0
    this.tables.set(ArrayNames.Fruits, this.Fruits); //1
    this.tables.set(ArrayNames.UniqueInteger, this.UniqueInteger); //2
    this.tables.set(ArrayNames.Peoples, this.Peoples);//3
  }

}
