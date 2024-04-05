import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AsideComponent } from './aside/aside.component';
import { MobileNavbarComponent } from './mobile-navbar/mobile-navbar.component';
import { MobileAsideComponent } from './mobile-aside/mobile-aside.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavBarComponent,
    AsideComponent,
    MobileNavbarComponent,
    MobileAsideComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'task-app';
  isAppOpenMobileAside: boolean = false;
}
