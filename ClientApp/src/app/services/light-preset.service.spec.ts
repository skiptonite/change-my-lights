import { TestBed } from '@angular/core/testing';

import { LightPresetService } from './light-preset.service';

describe('LightPresetService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LightPresetService = TestBed.get(LightPresetService);
    expect(service).toBeTruthy();
  });
});
