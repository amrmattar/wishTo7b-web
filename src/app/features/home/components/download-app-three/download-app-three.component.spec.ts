import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadAppThreeComponent } from './download-app-three.component';

describe('DownloadAppThreeComponent', () => {
  let component: DownloadAppThreeComponent;
  let fixture: ComponentFixture<DownloadAppThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DownloadAppThreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DownloadAppThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
