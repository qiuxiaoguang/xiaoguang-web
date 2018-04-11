import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummarizeCultivateComponent } from './summarize-cultivate.component';

describe('SummarizeCultivateComponent', () => {
  let component: SummarizeCultivateComponent;
  let fixture: ComponentFixture<SummarizeCultivateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummarizeCultivateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummarizeCultivateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
