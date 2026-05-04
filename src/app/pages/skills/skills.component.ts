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
        'Entity Framework Core',
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
      items: ['Docker', 'Azure', 'Git / Github', 'CI/CD'],
    },
    {
    category: 'Architecture',
    icon: 'icon/brain.svg',
    iconClass: 'h-6 w-6',
    items: [
      'Clean Architecture',
      'Design Patterns',
      'SOLID',
      'MVC Architecture',
    ],
  },
  {
    category: 'Core Skills',
    icon: 'icon/file-braces.svg',
    iconClass: 'h-6 w-6',
    items: [
      'Object-Oriented Programming',
      'Data Structures and Algorithms',
      'Problem Solving',
      'Debugging & Refactoring',
    ],
  },
  ];
}
