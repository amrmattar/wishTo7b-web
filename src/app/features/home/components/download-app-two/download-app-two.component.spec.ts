import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadAppTwoComponent } from './download-app-two.component';

describe('DownloadAppTwoComponent', () => {
  let component: DownloadAppTwoComponent;
  let fixture: ComponentFixture<DownloadAppTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DownloadAppTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DownloadAppTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
