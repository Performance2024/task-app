import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';

import { saxCategory2Outline } from '@ng-icons/iconsax/outline';
import { saxBook1Outline } from '@ng-icons/iconsax/outline';
import { saxUserOctagonOutline } from '@ng-icons/iconsax/outline';
import { saxMessageOutline } from '@ng-icons/iconsax/outline';
import { saxSetting2Outline } from '@ng-icons/iconsax/outline';

@Component({
  selector: 'app-aside',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, NgIconComponent],
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.css',
  viewProviders: [
    provideIcons({
      saxCategory2Outline,
      saxBook1Outline,
      saxUserOctagonOutline,
      saxMessageOutline,
      saxSetting2Outline,
    }),
  ],
})
export class AsideComponent {
  asideItems = [
    {
      name: 'Overview',
      icon: 'saxCategory2Outline',
      link: '/overview',
    },
    {
      name: 'Task',
      icon: 'saxBook1Outline',
      link: '/tasks',
    },
    {
      name: 'Mentors',
      icon: 'saxUserOctagonOutline',
      link: '/mentors',
    },
    {
      name: 'Message',
      icon: 'saxMessageOutline',
      link: '/message',
    },
    {
      name: 'Settings',
      icon: 'saxSetting2Outline',
      link: '/setting',
    },
  ];
}
