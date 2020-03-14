import { TestBed } from '@angular/core/testing';

import { CustomDatepickerI18nService } from './custom-datepicker-i18n.service';

describe('CustomDatepickerI18nService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomDatepickerI18nService = TestBed.get(CustomDatepickerI18nService);
    expect(service).toBeTruthy();
  });
});
