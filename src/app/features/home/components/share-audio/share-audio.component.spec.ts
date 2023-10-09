import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareAudioComponent } from './share-audio.component';

describe('ShareAudioComponent', () => {
  let component: ShareAudioComponent;
  let fixture: ComponentFixture<ShareAudioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShareAudioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShareAudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
