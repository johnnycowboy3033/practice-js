import {TestBed} from "@angular/core/testing";

import { ArrayModule } from './array.module'
import { ArrayService } from '../../services/array.service'

import { ArrayNames } from '../../enumerates/array/array-names'

describe('ArrayModule', () => {

  let module: ArrayModule;
  let service: ArrayService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
      ],
      imports: [
        ArrayModule
      ],
      providers: [
        ArrayService
      ]
    })
      .compileComponents();

    service = new ArrayService();
    module = new ArrayModule(service);

    module.beginDefaultNames = [ '0 Begin Default', '1 Begin Default'];
    module.beginNames = [ '0 Begin', '1 Begin'];

    module.endDefaultNames = [ '0 End Default', '1 End Default'];
    module.endNames = [ '0 End', '1 End'];

  });

  it(`should be true`, () => {
    expect(true).toEqual(true);
  });

  /***************************\
  * All Array Names           *
  \***************************/

  it(`(All Array Names) should be four for the total number arrays`, () => {
    expect( module.getAllArrayNames().length ).toEqual(4 );
  });

  it(`(All Array Names) should be "OrderInteger"`, () => {
    expect( module.getAllArrayNames()[0]).toEqual( ArrayNames.OrderInteger.replaceAll(' ','') );
  });
  it(`(All Array Names) should be "Fruits"`, () => {
    expect( module.getAllArrayNames()[1]).toEqual( ArrayNames.Fruits.replaceAll(' ','') );
  });
  it(`(All Array Names) should be "UniqueInteger"`, () => {
    expect( module.getAllArrayNames()[2]).toEqual( ArrayNames.UniqueInteger.replaceAll(' ','') );
  });
  it(`(All Array Names) should be "Peoples"`, () => {
    expect( module.getAllArrayNames()[3]).toEqual( ArrayNames.Peoples.replaceAll(' ','') );
  });

  /***************************\
   * Find Index To Name Table *
  \***************************/

  it(`(Find Index To Name Table) should be "Fruits" for the table name`, () => {
    let contextComponent = service.managerContent( {ShouldCompare: true, Begin:{ DefaultNames:[service.getArrayNames().Fruits] }, } );

    module.beginDefaultNames = contextComponent.get(service.getComponentContext().beginDefaultNames);

    // console.log("Begin Default Names: " + module.beginDefaultNames);

    let nameTable = module.findIndexToNameTable( 0, true, true);

    // console.log("Table Name: " + nameTable);

    expect(nameTable).toEqual("Fruits");


  });

  it(`(Find Index To Name Table) should be "0 Begin Default" for the begin default table name `, () => {

    let nameTable = module.findIndexToNameTable( 0, true, true);
    expect(nameTable).toEqual("0 Begin Default");

  });

  it(`(Find Index To Name Table) should be "0 Begin" for the begin default table name `, () => {

    let nameTable = module.findIndexToNameTable( 0, false, true);
    expect(nameTable).toEqual("0 Begin");

  });

  it(`(Find Index To Name Table) should be "0 End Default" for the begin default table name `, () => {

    let nameTable = module.findIndexToNameTable( 0, true, false);
    expect(nameTable).toEqual("0 End Default");

  });

  it(`(Find Index To Name Table) should be "0 End" for the begin default table name `, () => {

    let nameTable = module.findIndexToNameTable( 0, false, false);
    expect(nameTable).toEqual("0 End");

  });


});
