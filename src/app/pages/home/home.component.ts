import { Component } from '@angular/core';
import { SectionService } from '../../core/services/section.service';
import Typed from 'typed.js';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  isResumeOpen = false;
  constructor(private sectionService: SectionService) {}

  ngAfterViewInit() {
    new Typed('#typing', {
      strings: [
        'Full-Stack Software Engineer',
        '.Net · Angular · Supabase',
        'SaaS · Real-time Systems',
      ],
      typeSpeed: 50,
      backSpeed: 0,
      backDelay: 1500,
      loop: true,
      smartBackspace: true,
      fadeOut: true,
      fadeOutClass: 'typed-fade-out',
      fadeOutDelay: 300,
      showCursor: false
    });
  }

  scrollTo(id: string): void {
    this.sectionService.setActiveSection(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
