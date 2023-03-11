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
    expect(service.enumElementCount(service.getComponentName())).toEqual(31);
  });

  /***********************\
   * Concatenate Context  *
  \***********************/

  it('(Concatenate) should be two for the total number an arrays for Initialise Array ', () => {

    let concatContext =  service.context.get( service.getComponentName().Concatenate);
    expect(concatContext.Begin.Tables.length).toEqual(2);
    expect(concatContext.Begin.DefaultNames.length).toEqual(2);

  });

  it('(Concatenate) should be Fruits for the table name for the Initialise Array ', () => {

    let concatContext =  service.context.get( service.getComponentName().Concatenate);
    expect(concatContext.Begin.DefaultNames[0]).toEqual(service.getArrayNames().Fruits);
    expect(concatContext.Begin.DefaultNames[1]).toEqual(service.getArrayNames().Peoples);

  });

  it('(Concatenate) should be "Banana" for the first element in the Fruits Array for Initialise Array', () => {

    let concatContext =  service.context.get( service.getComponentName().Concatenate);
    let fruits = concatContext.Begin.Tables[0];

    expect(fruits[0]) .toEqual("Banana");

  });

  it('(Concatenate) should be "Cecilie" for the first element in the Peoples Array for Initialise Array', () => {

    let concatContext =  service.context.get( service.getComponentName().Concatenate);
    let fruits = concatContext.Begin.Tables[1];

    expect(fruits[0]) .toEqual("Cecilie");

  });

  it('(Concatenate) should be true for the Should Compare Variable', () => {

    let concatContext =  service.context.get( service.getComponentName().Concatenate);
    expect(concatContext.ShouldCompare).toEqual(true);

  });

  /***********************\
   * CopyWithin  Context  *
  \***********************/

  it('(CopyWithin) should be two for the total number an arrays for Initialise Array ', () => {

    let concatContext =  service.context.get( service.getComponentName().CopyWithin);
    expect(concatContext.Begin.Tables.length).toEqual(1);
    expect(concatContext.Begin.DefaultNames.length).toEqual(1);

  });

  it('(CopyWithin) should be true for the Should Compare Variable', () => {

    let concatContext =  service.context.get( service.getComponentName().CopyWithin);
    expect(concatContext.ShouldCompare).toEqual(false);

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
