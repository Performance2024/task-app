import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';

import { saxCategory2Outline } from '@ng-icons/iconsax/outline';
import { saxBook1Outline } from '@ng-icons/iconsax/outline';
import { saxUserOctagonOutline } from '@ng-icons/iconsax/outline';
import { saxMessageOutline } from '@ng-icons/iconsax/outline';
import { saxSetting2Outline } from '@ng-icons/iconsax/outline';
import { saxAddOutline } from '@ng-icons/iconsax/outline';

@Component({
  selector: 'app-mobile-aside',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, NgIconComponent],
  templateUrl: './mobile-aside.component.html',
  styleUrl: './mobile-aside.component.css',
  viewProviders: [
    provideIcons({
      saxCategory2Outline,
      saxBook1Outline,
      saxUserOctagonOutline,
      saxMessageOutline,
      saxSetting2Outline,
      saxAddOutline,
    }),
  ],
})
export class MobileAsideComponent {
  @Input() isMobileAsideOpen: boolean = false;
  @Output() closeMobileAsideEvent = new EventEmitter();

  closeAside() {
    this.closeMobileAsideEvent.emit();
  }

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
