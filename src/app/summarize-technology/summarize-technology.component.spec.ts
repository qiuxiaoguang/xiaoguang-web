import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummarizeTechnologyComponent } from './summarize-technology.component';

describe('SummarizeTechnologyComponent', () => {
  let component: SummarizeTechnologyComponent;
  let fixture: ComponentFixture<SummarizeTechnologyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummarizeTechnologyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummarizeTechnologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
