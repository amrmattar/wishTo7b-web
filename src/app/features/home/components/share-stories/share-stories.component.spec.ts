import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareStoriesComponent } from './share-stories.component';

describe('ShareStoriesComponent', () => {
  let component: ShareStoriesComponent;
  let fixture: ComponentFixture<ShareStoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShareStoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShareStoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
