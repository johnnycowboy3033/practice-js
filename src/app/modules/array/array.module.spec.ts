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







});
