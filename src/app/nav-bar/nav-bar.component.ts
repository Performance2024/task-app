import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';

import { saxSearchNormal1Outline } from '@ng-icons/iconsax/outline';
import { saxElement2Outline } from '@ng-icons/iconsax/outline';
import { saxSortOutline } from '@ng-icons/iconsax/outline';
import { saxSetting4Outline } from '@ng-icons/iconsax/outline';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [NgIconComponent],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
  viewProviders: [
    provideIcons({
      saxSearchNormal1Outline,
      saxElement2Outline,
      saxSortOutline,
      saxSetting4Outline,
    }),
  ],
})
export class NavBarComponent {}
