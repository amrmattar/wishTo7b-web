import { Component } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {
  currentSection = 'home';

  onSectionChange(sectionId: string) {
    this.currentSection = sectionId;
    console.log( this.currentSection);
    
  }
}
