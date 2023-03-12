import { ComponentFixture, TestBed } from '@angular/core/testing';
import {ReactiveFormsModule, FormsModule, FormGroup, FormControl} from "@angular/forms";

import { CopywithinComponent } from './copywithin.component';
import {InitializeComponent} from "../../array-helper/initialize/initialize.component";

describe('CopywithinComponent', () => {
  let component: CopywithinComponent;
  let fixture: ComponentFixture<CopywithinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        CopywithinComponent,
        InitializeComponent
      ],
      imports: [
        FormsModule,
        ReactiveFormsModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CopywithinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be the title is Copy Within', () => {
    expect( component.title).toEqual('Copy Within');
  });
});
