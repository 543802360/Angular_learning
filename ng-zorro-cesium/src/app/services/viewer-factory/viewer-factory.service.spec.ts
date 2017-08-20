import { TestBed, inject } from '@angular/core/testing';

import { ViewerFactoryService } from './viewer-factory.service';

describe('ViewerFactoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ViewerFactoryService]
    });
  });

  it('should be created', inject([ViewerFactoryService], (service: ViewerFactoryService) => {
    expect(service).toBeTruthy();
  }));
});
