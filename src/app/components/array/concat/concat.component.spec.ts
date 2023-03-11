import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcatComponent } from './concat.component';
import {InitialiseComponent} from "../../array-helper/initialise/initialise.component";


describe('ConcatComponent', () => {
  let component: ConcatComponent;
  let fixture: ComponentFixture<ConcatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ConcatComponent,
        InitialiseComponent
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConcatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be the title is Concatenate', () => {
    expect( component.title).toEqual('Concatenate');
  });
});
