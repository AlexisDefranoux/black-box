import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaptorsComponent } from './captors.component';

describe('CaptorsComponent', () => {
  let component: CaptorsComponent;
  let fixture: ComponentFixture<CaptorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaptorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaptorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
