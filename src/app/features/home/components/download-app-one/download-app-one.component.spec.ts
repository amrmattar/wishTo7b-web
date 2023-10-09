import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadAppOneComponent } from './download-app-one.component';

describe('DownloadAppOneComponent', () => {
  let component: DownloadAppOneComponent;
  let fixture: ComponentFixture<DownloadAppOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DownloadAppOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DownloadAppOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
