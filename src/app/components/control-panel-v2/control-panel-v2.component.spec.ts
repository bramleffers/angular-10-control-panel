import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cc2Component } from './control-panel-v2.component';

describe('ControlPanelV2Component', () => {
  let component: Cc2Component;
  let fixture: ComponentFixture<Cc2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cc2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cc2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
