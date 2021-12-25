import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsRelativeComponent } from './posts-relative.component';

describe('PostsRelativeComponent', () => {
  let component: PostsRelativeComponent;
  let fixture: ComponentFixture<PostsRelativeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostsRelativeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsRelativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
