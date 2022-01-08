import { TestBed } from '@angular/core/testing';

import { ImageSlideShowService } from './image-slide-show.service';

describe('ImageSlideShowService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ImageSlideShowService = TestBed.get(ImageSlideShowService);
    expect(service).toBeTruthy();
  });
});
