import { Component, Output, EventEmitter, Input } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';

import { saxSearchNormal1Outline } from '@ng-icons/iconsax/outline';
import { saxElement2Outline } from '@ng-icons/iconsax/outline';
import { saxSortOutline } from '@ng-icons/iconsax/outline';
import { saxSetting4Outline } from '@ng-icons/iconsax/outline';
import { saxMenu1Outline } from '@ng-icons/iconsax/outline';

@Component({
  selector: 'app-mobile-navbar',
  standalone: true,
  imports: [NgIconComponent],
  templateUrl: './mobile-navbar.component.html',
  styleUrl: './mobile-navbar.component.css',
  viewProviders: [
    provideIcons({
      saxSearchNormal1Outline,
      saxElement2Outline,
      saxSortOutline,
      saxSetting4Outline,
      saxMenu1Outline,
    }),
  ],
})
export class MobileNavbarComponent {
  @Output() openMobileAsideEvent = new EventEmitter();

  openAside() {
    this.openMobileAsideEvent.emit();
  }
}
