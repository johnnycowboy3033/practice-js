import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitialiseComponent } from './initialise.component';

describe('InitialiseComponent', () => {
  let component: InitialiseComponent;
  let fixture: ComponentFixture<InitialiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InitialiseComponent ]
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
