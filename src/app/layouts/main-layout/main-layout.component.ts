import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { HomeComponent } from '../../pages/home/home.component';
import { AboutComponent } from '../../pages/about/about.component';
import { ProjectsComponent } from '../../pages/projects/projects.component';
import { SkillsComponent } from '../../pages/skills/skills.component';
import { ContactComponent } from '../../pages/contact/contact.component';
import { ExperienceComponent } from '../../pages/experience/experience.component';
import { FooterComponent } from '../../shared/component/footer/footer.component';
import { NavbarComponent } from '../../shared/component/navbar/navbar.component';
import { SectionService } from '../../core/services/section.service';

@Component({
  selector: 'app-main-layout',
  imports: [
    HomeComponent,
    AboutComponent,
    ProjectsComponent,
    SkillsComponent,
    ContactComponent,
    ExperienceComponent,
    FooterComponent,
    NavbarComponent,
  ],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css',
})
export class MainLayoutComponent implements AfterViewInit, OnDestroy {
  private observer?: IntersectionObserver;

  constructor(private sectionService: SectionService) {}

  ngAfterViewInit(): void {
    const sectionIds = [
      'home',
      'about',
      'skills',
      'projects',
      'experience',
      'contact',
    ];

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    this.observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        const currentSection = visibleSections[0];

        if (currentSection?.target.id) {
          this.sectionService.setActiveSection(currentSection.target.id);
        }
      },
      {
        root: null,
        rootMargin: '-35% 0px -45% 0px',
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    );

    sections.forEach((section) => {
      this.observer?.observe(section);
    });
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
