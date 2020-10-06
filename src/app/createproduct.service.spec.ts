import { TestBed } from '@angular/core/testing';

import { CreateproductService } from './createproduct.service';

describe('CreateproductService', () => {
  let service: CreateproductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateproductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
