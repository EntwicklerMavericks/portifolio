import { Injectable } from '@angular/core';

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProjectsDataService {
  getProjects(): Project[] {
    return [
      {
        id: 'nexa',
        title: 'Nexa',
        description: 'Plataforma corporativa escalável com foco em performance e experiência do usuário.',
        image: 'https://placehold.co/600x400/111827/ffffff?text=Nexa+Project',
        technologies: ['Angular', 'TypeScript', 'SCSS', 'Node.js', 'NestJS', 'PostgreSQL'],
        demoUrl: '#',
        githubUrl: '#'
      },
      {
        id: 'dashboard',
        title: 'Dashboard Administrativo',
        description: 'Painel de controle gerencial com gráficos em tempo real e relatórios complexos.',
        image: 'https://placehold.co/600x400/111827/ffffff?text=Admin+Dashboard',
        technologies: ['Angular', 'TypeScript', 'Tailwind CSS', 'PrimeNG', 'REST API'],
        demoUrl: '#',
        githubUrl: '#'
      },
      {
        id: 'comercial',
        title: 'Sistema Comercial',
        description: 'Sistema completo para gestão de vendas, controle de estoque e faturamento.',
        image: 'https://placehold.co/600x400/111827/ffffff?text=Sistema+Comercial',
        technologies: ['Angular', 'SCSS', 'Bootstrap', 'SQL Server'],
        demoUrl: '#',
        githubUrl: '#'
      },
      {
        id: 'financeiro',
        title: 'Sistema Financeiro',
        description: 'Módulo financeiro de alta segurança com integração bancária e conciliação automática.',
        image: 'https://placehold.co/600x400/111827/ffffff?text=Sistema+Financeiro',
        technologies: ['Angular', 'NestJS', 'MongoDB', 'Docker'],
        demoUrl: '#',
        githubUrl: '#'
      },
      {
        id: 'portal',
        title: 'Portal Corporativo',
        description: 'Portal de serviços B2B com arquitetura moderna e design responsivo (Mobile-first).',
        image: 'https://placehold.co/600x400/111827/ffffff?text=Portal+Corporativo',
        technologies: ['Angular', 'Tailwind', 'AWS', 'Figma'],
        demoUrl: '#',
        githubUrl: '#'
      }
    ];
  }
}
