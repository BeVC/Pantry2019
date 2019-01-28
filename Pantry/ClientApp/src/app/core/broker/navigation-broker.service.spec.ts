import { TestBed } from '@angular/core/testing';

import { NavigationBrokerService } from './navigation-broker.service';

describe('NavigationBrokerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NavigationBrokerService = TestBed.get(NavigationBrokerService);
    expect(service).toBeTruthy();
  });
});
