import { TestBed } from '@angular/core/testing';

import { ArrayService } from './array.service';

describe('ArrayService', () => {
  let service: ArrayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArrayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be the Order Integer array should be twelve in length', () => {
    expect(service.OrderInteger.length).toEqual(12);
  });

  it('should be the Fruit array should be seven in length', () => {
    expect(service.Fruits.length).toEqual(7);
  });

  it('should be the Unique Integer array should be fifteen in length', () => {
    expect(service.UniqueInteger.length).toEqual(15);
  });

  it('should be the Peoples array should be five in length', () => {
    expect(service.Peoples.length).toEqual(5);
  });

  it('should be the Tables Map will be of size four', () => {
    expect(service.tables.size).toEqual(4);
  });

  it('should be four the size of the Array Names Enumerator', () => {
    expect(service.enumElementCount(service.getArrayNames())).toEqual(4);
  });

  it('should be thirty-one the size of the Component Name Enumerator', () => {
    expect(service.enumElementCount(service.getComponentName())).toEqual(31);
  });

});
