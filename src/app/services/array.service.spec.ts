import { TestBed } from '@angular/core/testing';

import { ArrayService } from './array.service';

describe('ArrayService', () => {
  let service: ArrayService;

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

});
