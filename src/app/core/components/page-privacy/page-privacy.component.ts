import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-privacy',
  templateUrl: './page-privacy.component.html',
  styleUrls: ['./page-privacy.component.css']
})

/**
 * PAge Privacy Component
 */
export class PagePrivacyComponent implements OnInit {

  // Set Topbar Option
  Menuoption = 'center';
  Settingicon = true
  constructor() { }

  ngOnInit(): void {
  }

}
