import { Component } from '@angular/core';

interface SkillGroup {
  category: string;
  icon: string;
  iconClass?: string;
  items: string[];
}

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
})
export class SkillsComponent {
  skillsList: SkillGroup[] = [
    {
      category: 'Backend',
      icon: 'icon/server.svg',
      iconClass: 'h-6 w-6',
      items: [
        'C# / .NET',
        'ASP.NET Core',
        'REST API',
        'Entity Framework',
        'SignalR',
      ],
    },
    {
      category: 'Frontend',
      icon: 'icon/code.svg',
      iconClass: 'h-6 w-6',
      items: ['Angular', 'TypeScript', 'RxJS/NgRx', 'Tailwind CSS', 'HTML/CSS'],
    },
    {
      category: 'Database',
      icon: 'icon/database.svg',
      iconClass: 'h-6 w-6',
      items: ['SQL Server', 'MySQL', 'PostgreSQL', 'MongoDB', 'Redis'],
    },
    {
      category: 'Tools & DevOps',
      icon: 'icon/puzzle.svg',
      iconClass: 'h-6 w-6',
      items: ['Docker / Kubernetes', 'Azure / AWS', 'Git / Github', 'CI/CD'],
    },
    {
      category: 'Other',
      icon: 'icon/brain.svg',
      iconClass: 'h-6 w-6',
      items: [
        'Object-Oriented Programming',
        'Clean Architecture',
        'Design Patterns',
        'SOLID',
      ],
    },
  ];
}
