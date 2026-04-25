import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { SectionService } from '../../../core/services/section.service';

@Component({
  selector: 'app-navbar',
  imports: [LucideAngularModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  constructor(public sectionService: SectionService){}

  isDark = false;

  toggleTheme(){
    this.isDark = !this.isDark;
    if(this.isDark){
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else{
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }

  ngOnInit(){
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
      this.isDark = true;
      document.documentElement.classList.add('dark');
    } else {
      this.isDark = false;
      document.documentElement.classList.remove('dark');
    }
  }

  scrollTo(id: string): void{
    this.sectionService.setActiveSection(id);

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
