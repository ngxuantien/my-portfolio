import { Component } from '@angular/core';
import { SectionService } from '../../core/services/section.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(private sectionService: SectionService) {}

  scrollTo(id: string): void {
    this.sectionService.setActiveSection(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
