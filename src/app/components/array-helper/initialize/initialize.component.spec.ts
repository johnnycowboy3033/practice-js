import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {By} from "@angular/platform-browser";

import { InitializeComponent } from './initialize.component';
import { ArrayService } from '../../../services/array.service'


describe('InitialiseComponent', () => {
  let component: InitializeComponent;
  let fixture: ComponentFixture<InitializeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        InitializeComponent
      ],
      imports: [
        ReactiveFormsModule,
        FormsModule,
      ],
      providers: [
        ArrayService
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InitializeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should true', () => {
    expect(true).toEqual(true);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
   });

});
