import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummarizeAboutmeComponent } from './summarize-aboutme.component';

describe('SummarizeAboutmeComponent', () => {
  let component: SummarizeAboutmeComponent;
  let fixture: ComponentFixture<SummarizeAboutmeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummarizeAboutmeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummarizeAboutmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
