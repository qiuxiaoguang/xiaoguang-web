import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummarizeLiteraturesComponent } from './summarize-literatures.component';

describe('SummarizeLiteraturesComponent', () => {
  let component: SummarizeLiteraturesComponent;
  let fixture: ComponentFixture<SummarizeLiteraturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummarizeLiteraturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummarizeLiteraturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
