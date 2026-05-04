import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

export interface ProjectModel {
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  techStacks: string[];
  features: string[];
  problem: string;
  architecture: string[];
  challenges: string[];
  learnings: string[];
  demoUrl?: string;
  sourceUrl?: string;
}

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  selectedProject?: ProjectModel;

  projects: ProjectModel[] = [
    {
      title: 'Retail Management System',
      category: 'Fullstack',
      description:
        'A retail/POS management platform for handling products, orders, inventory, users, and reports.',
      imageUrl: './images/projects/retail-management.png',
      techStacks: ['Angular', 'ASP.NET Core', 'EF Core', 'SQL Server', 'TailwindCSS'],
      features: [
        'Product and inventory management',
        'Order workflow and stock updates',
        'Search, filter, pagination, and reports',
      ],
      problem:
        'Small and medium retailers need a centralized system to manage products, stores, employees, orders, inventory, and reports efficiently.',
      architecture: [
        'Angular frontend communicates with ASP.NET Core Web API through REST APIs.',
        'Backend follows layered architecture with Controller, Service, Repository/UnitOfWork, EF Core, and SQL Server.',
        'Authentication and authorization are handled with token-based access control.',
      ],
      challenges: [
        'Designed reusable UI components for tables, forms, filters, and dialogs.',
        'Handled user roles and store-based data access.',
        'Optimized listing pages with search, filter, and pagination.',
      ],
      learnings: [
        'Improved full-stack feature design from database to UI.',
        'Practiced REST API integration and layered backend architecture.',
        'Learned how to structure business workflows in a maintainable way.',
      ],
      demoUrl: '#',
      sourceUrl: 'https://github.com/ngxuantien',
    },
    {
      title: 'Personal Portfolio Website',
      category: 'Frontend',
      description:
        'A responsive portfolio website with smooth scrolling, active navigation, contact section, and reusable UI components.',
      imageUrl: './images/projects/portfolio.png',
      techStacks: ['Angular', 'TypeScript', 'TailwindCSS'],
      features: [
        'Responsive landing page design',
        'Smooth scroll and active navbar tracking',
        'Contact actions with mailto fallback',
      ],
      problem:
        'A personal website is needed to present skills, experience, and projects in a clean and professional way.',
      architecture: [
        'Built with standalone Angular components.',
        'Each section is separated into reusable page components.',
        'Navigation state is handled using Angular signals and IntersectionObserver.',
      ],
      challenges: [
        'Implemented active navbar state based on scroll position.',
        'Designed consistent spacing, colors, and responsive layouts.',
        'Handled contact form behavior without a backend.',
      ],
      learnings: [
        'Improved Angular component organization.',
        'Practiced TailwindCSS layout and responsive design.',
        'Learned scroll spy behavior with IntersectionObserver.',
      ],
      demoUrl: '#',
      sourceUrl: 'https://github.com/ngxuantien',
    },
    {
      title: 'Admin Dashboard System',
      category: 'Dashboard',
      description:
        'An admin dashboard for managing business data with tables, filters, forms, dialogs, and dashboard widgets.',
      imageUrl: './images/projects/admin-dashboard.png',
      techStacks: ['Angular', 'TypeScript', 'REST API', 'TailwindCSS'],
      features: [
        'Reusable data table with pagination',
        'Form validation and confirmation dialogs',
        'Dashboard cards and data visualization',
      ],
      problem:
        'Business users need a simple dashboard to manage data, view summaries, and perform daily operations efficiently.',
      architecture: [
        'Angular pages are separated by feature modules/components.',
        'Reusable UI components are used for tables, dialogs, forms, and alerts.',
        'Data is prepared to integrate with REST APIs.',
      ],
      challenges: [
        'Created reusable table and form patterns.',
        'Handled loading, empty, and error states.',
        'Designed dashboard layout for clear data presentation.',
      ],
      learnings: [
        'Improved reusable component design.',
        'Practiced dashboard UI structure.',
        'Learned better state and interaction handling in Angular.',
      ],
      demoUrl: '#',
      sourceUrl: 'https://github.com/ngxuantien',
    },
  ];

  openProject(project: ProjectModel): void {
    this.selectedProject = project;
    document.body.style.overflow = 'hidden';
  }

  closeProject(): void {
    this.selectedProject = undefined;
    document.body.style.overflow = '';
  }
}