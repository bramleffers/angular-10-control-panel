import { TestBed } from '@angular/core/testing';

import { FwControlPanelService } from './controlpanel.service';

describe('ControlpanelService', () => {
  let service: FwControlPanelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FwControlPanelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
