import { AfterViewInit, Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'landrick-angular';

  constructor(private router: Router) {
    /**
     * Unicons icon refreshed on route change.
     */
    this.router.events.forEach((event) => {
      if (event instanceof NavigationEnd) {
        // window['Unicons']();
      }

      if (!(event instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0)
    });

  }
  ngAfterViewInit(): void {
    this.setRtl()

  }

  setRtl() {
    document.documentElement.dir = "rtl";
    document.querySelector('.theme-opt').setAttribute('href', './assets/css/bootstrap-rtl.min.css');
    document.querySelector('.theme-opt-style').setAttribute('href', './assets/css/style-rtl.min.css');
  }

}
