import { Injectable } from '@angular/core';
import { Project } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ProjectsDataService {
  getProjects(): Project[] {
    return [
      {
        id: 'nexa',
        title: 'Nexa ERP',
        description: 'Plataforma corporativa escalável de gestão empresarial com foco em performance e experiência do usuário.',
        image: 'nexa-cover.jpg',
        technologies: ['Angular', 'TypeScript', 'SCSS', 'Node.js', 'NestJS', 'PostgreSQL'],
        demoUrl: 'https://nexa-showcase.pages.dev/login',
        githubUrl: 'https://github.com/EntwicklerMavericks/nexa-showcase'
      },
      {
        id: 'alicerce',
        title: 'Alicerce',
        description: 'Plataforma de finanças baseadas em objetivos com arquitetura sólida, foco em planejamento financeiro e metas. (Demo em breve)',
        image: 'alicerce-cover.jpg',
        technologies: ['Angular', 'TypeScript', 'Node.js'],
        demoUrl: '#',
        githubUrl: 'https://github.com/EntwicklerMavericks/Alicerce'
      },
      {
        id: 'barone',
        title: 'Barone Imports',
        description: 'E-commerce premium de moda e vestuário com renderização no servidor (SSR), catálogo dinâmico, carrinho de compras e painel administrativo.',
        image: 'barone-cover.jpg',
        technologies: ['Angular 20', 'SSR', 'NestJS', 'TypeScript', 'Node.js', 'Express'],
        demoUrl: '#',
        githubUrl: 'https://github.com/EntwicklerMavericks'
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
