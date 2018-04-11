import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiteraturesComponent } from './literatures.component';

describe('LiteraturesComponent', () => {
  let component: LiteraturesComponent;
  let fixture: ComponentFixture<LiteraturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiteraturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiteraturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
