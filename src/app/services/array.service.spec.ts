import { TestBed } from '@angular/core/testing';

import { ArrayService } from './array.service';

describe('ArrayService', () => {
  let service: ArrayService;

  let oneToFive = [ '1', '2', '3', '4', '5'];

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArrayService);
  });

  /***********************\
   *  Service             *
  \***********************/

  it('(Service) should be created', () => {
    expect(service).toBeTruthy();
  });

  /***********************\
   * TABLES               *
  \***********************/

  it('(TABLES) should be the Order Integer array should be twelve in length', () => {
    expect(service.OrderInteger.length).toEqual(12);
  });

  it('(TABLES) should be the Fruit array should be seven in length', () => {
    expect(service.Fruits.length).toEqual(7);
  });

  it('(TABLES) should be the Unique Integer array should be fifteen in length', () => {
    expect(service.UniqueInteger.length).toEqual(15);
  });

  it('(TABLES) should be the Peoples array should be five in length', () => {
    expect(service.Peoples.length).toEqual(5);
  });

  it('(TABLES) should be the Tables Map will be of size four', () => {
    expect(service.tables.size).toEqual(4);
  });

  /***********************\
   * Enumerator           *
  \***********************/

  it('(Enumerator) should be four the size of the Array Names Enumerator', () => {
    expect(service.enumElementCount(service.getArrayNames())).toEqual(4);
  });

  it('(Enumerator) should be thirty-one the size of the Component Name Enumerator', () => {
    expect(service.enumElementCount(service.getComponentNames())).toEqual(31);
  });

  it('(Enumerator Method) should be keys of the enum', () => {
    expect(service.enumElements(service.getArrayNames(),true)).toEqual(['OrderInteger', 'Fruits', 'UniqueInteger', 'Peoples']);
  });

  it('(Enumerator Method) should be values of the enum', () => {
    expect(service.enumElements(service.getArrayNames(),false)).toEqual(['Order Integer', 'Fruits', 'Unique Integer', 'Peoples']);
  });

   /***********************\
   * Manager Content       *
   \***********************/

  it('(Manager Content) should be one the number elements in arrays stored in the map', () => {

    let contextComponent = service.managerContent( {ShouldCompare: true, Begin:{ DefaultNames:[service.getArrayNames().Fruits] }, } );

    let table = contextComponent.get(service.getComponentContext().beginTables);

    // console.log("Table: " + table[0]);

    expect( table[0].length ).toEqual(7);

  });

  it('(Manager Content) should be banana the first elements in arrays stored in the map', () => {

    let contextComponent = service.managerContent( {ShouldCompare: true, Begin:{ DefaultNames:[service.getArrayNames().Fruits] }, } );

    let table = contextComponent.get(service.getComponentContext().beginTables);

    console.log("Table: " + table[0]);
    console.log("First Element in the array: " + table[0][0]);

    expect( table[0][0] ).toEqual("Banana");

  });

  /***********************\
   * Concatenate Context  *
  \***********************/

  it('(Concatenate) should be two for the total number an arrays for Initialise Array ', () => {

    let concatContext =  service.context.get( service.getComponentNames().Concatenate);

    let tables = concatContext.get( service.getComponentContext().beginTables );
    expect( tables.length ).toEqual(2);

    let tablesNames = concatContext.get( service.getComponentContext().beginDefaultNames );
    expect( tablesNames.length ).toEqual(2);

  });

  it('(Concatenate) should be Fruits for the table name for the Initialise Array ', () => {

    let concatContext =  service.context.get( service.getComponentNames().Concatenate);

    let tables = concatContext.get( service.getComponentContext().beginDefaultNames);
    expect(tables[0]).toEqual(service.getArrayNames().Fruits);
    expect(tables[1]).toEqual(service.getArrayNames().Peoples);

  });

  it('(Concatenate) should be "Banana" for the first element in the Fruits Array for Initialise Array', () => {

    let concatContext =  service.context.get( service.getComponentNames().Concatenate);

    let tables = concatContext.get( service.getComponentContext().beginTables);
    let fruits = tables[0];

    expect(fruits[0]) .toEqual("Banana");

  });


  it('(Concatenate) should be "Cecilie" for the first element in the Peoples Array for Initialise Array', () => {

    let concatContext =  service.context.get( service.getComponentNames().Concatenate);

    let tables = concatContext.get( service.getComponentContext().beginTables);
    let fruits = tables[1];

    expect(fruits[0]) .toEqual("Cecilie");

  });

  it('(Concatenate) should be true for the Should Compare Variable', () => {

    let concatContext =  service.context.get( service.getComponentNames().Concatenate);

    let shouldCompare = concatContext.get( service.getComponentContext().shouldCompare);

    expect(shouldCompare).toEqual(true);

  });


  /***********************\
   * CopyWithin  Context  *
  \***********************/

  it('(CopyWithin) should be two for the total number an arrays for Initialise Array ', () => {

    let concatContext =  service.context.get( service.getComponentNames().CopyWithin);

    let tables = concatContext.get( service.getComponentContext().beginTables);
    expect(tables.length).toEqual(1);

    let tablesNames = concatContext.get( service.getComponentContext().beginDefaultNames);
    expect(tablesNames.length).toEqual(1);

  });

  it('(CopyWithin) should be true for the Should Compare Variable', () => {

    let concatContext =  service.context.get( service.getComponentNames().CopyWithin);

    let shouldCompare = concatContext.get( service.getComponentContext().shouldCompare);
    expect(shouldCompare).toEqual(false);

  });


  /******************\
   * METHODS         *
  \******************/

   // clone

  it('(clone) should clone element so the two array are the same', () => {

    let testArray: string[] = [];

    service.clone(oneToFive, testArray);

    for(let index = 0 ; index < testArray.length ; index++){
      expect( testArray[index]  ).toEqual( oneToFive[index]  );
    }

  });

  // removeElement

  it('(removeElement) should remove element so the length be reduce by one element', () => {

    let testArray: string [] = []

    service.clone(oneToFive, testArray);

    let arraySize : number = testArray.length;

    let newArray:string[]  = service.removeElement(0, testArray);

    expect( arraySize -1 ).toEqual( newArray.length);

  });


  it('(removeElement) should remove element so the first element should be removed', () => {

    let testArray: string [] = []

    service.clone(oneToFive, testArray);

    let newArray:string[]  = service.removeElement(0, testArray);

    for(let index = 0 ; index < newArray.length ; index++){
      expect( String(index + 2)).toEqual( newArray[index] );
    }

  });

  it('(removeElement) should remove element so the middle element should be removed', () => {

    let testArray: string [] = []

    service.clone(oneToFive, testArray);

    let newArray:string[]  = service.removeElement(2, testArray);

    expect( String(1 )).toEqual( newArray[0] );
    expect( String(2 )).toEqual( newArray[1] );
    expect( String(4 )).toEqual( newArray[2] );
    expect( String(5 )).toEqual( newArray[3] );

  });

  it('(removeElement) should not remove element so the array should be unchanged', () => {

    let testArray: string [] = []

    service.clone(oneToFive, testArray);

    let newArray:string[]  = service.removeElement(5, testArray);

    expect( String(1 )).toEqual( newArray[0] );
    expect( String(2 )).toEqual( newArray[1] );
    expect( String(3 )).toEqual( newArray[2] );
    expect( String(4 )).toEqual( newArray[3] );
    expect( String(5 )).toEqual( newArray[4] );

  });

});
