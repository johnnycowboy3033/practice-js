import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {By} from "@angular/platform-browser";

import { InitialiseComponent } from './initialise.component';
import { ArrayService } from '../../../services/array.service'

describe('InitialiseComponent', () => {
  let component: InitialiseComponent;
  let fixture: ComponentFixture<InitialiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        InitialiseComponent
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

    fixture = TestBed.createComponent(InitialiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
