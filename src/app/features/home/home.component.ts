import { Component, OnInit, Renderer2 } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  currentSection = 'home';
  isCondensed = false;
  // Set Topbar Option
  Menuoption = 'center';
  Settingicon = false;
  currentLanguage: string ;
  LeftToRight: boolean;
  constructor(public translate: TranslateService,private renderer: Renderer2){
   this.currentLanguage = localStorage.getItem("lang") || "ar";
   if(this.currentLanguage === 'ar'){
    this.translate.use('ar');
    this.renderer.setAttribute(document.documentElement, 'lang', 'ar');
    this.renderer.setAttribute(document.documentElement, 'dir', 'rtl');
    localStorage.setItem('lang', 'ar');
    this.setRtl()
   }
  else{
    this.translate.use('en');
    this.renderer.setAttribute(document.documentElement, 'lang', 'en');
    this.renderer.setAttribute(document.documentElement, 'dir', 'ltr');
    localStorage.setItem('lang', 'en');
    this.setLtr()
  }
}
  
   switchLanguage() {
    if (this.translate.currentLang === 'en') {
      this.translate.use('ar');
      this.translate.setDefaultLang('ar');
      this.renderer.setAttribute(document.documentElement, 'lang', 'ar');
      this.renderer.setAttribute(document.documentElement, 'dir', 'rtl');
     this.setRtl()
      localStorage.setItem('lang', 'ar');
    } else {
      this.translate.use('en');
      this.translate.setDefaultLang('en');
      this.renderer.setAttribute(document.documentElement, 'lang', 'en');
      this.renderer.setAttribute(document.documentElement, 'dir', 'ltr');
     this.setLtr()
      localStorage.setItem('lang', 'en');
    }
  }
  setRtl(): void {
    document.getElementById('theme-opt').setAttribute('href', '../../../assets/css/ar.css');
    this.LeftToRight = false
  }
  setLtr(): void {
    document.getElementById('theme-opt').setAttribute('href', '../../../assets/css/en.css');
    this.LeftToRight = true
  }
  windowScroll() {
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      document.getElementById('topnav').classList.add('nav-sticky');
    } else {
      document.getElementById('topnav').classList.remove('nav-sticky');
    }

    if (document.body.scrollTop > 100 ||
      document.documentElement.scrollTop > 100) {
    } else {
    }
  }

  toggleMenu() {
    this.isCondensed = !this.isCondensed;
    if (this.isCondensed) {
      document.getElementById('navigation').style.display = 'block';
    } else {
      document.getElementById('navigation').style.display = 'none';
    }
  }
}
