import { Injectable } from '@angular/core';

export interface Skill {
  name: string;
  icon: string; // Phosphor icon class, e.g., 'ph-angular-logo' or standard ones
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class SkillsDataService {
  getSkills(): Skill[] {
    return [
      { name: 'Angular', icon: 'ph-file-code', description: 'Framework robusto para SPAs corporativas.' },
      { name: 'TypeScript', icon: 'ph-file-ts', description: 'Tipagem forte para código seguro e escalável.' },
      { name: 'JavaScript', icon: 'ph-file-js', description: 'Linguagem base da web dinâmica.' },
      { name: 'HTML5', icon: 'ph-file-html', description: 'Semântica e acessibilidade.' },
      { name: 'SCSS', icon: 'ph-palette', description: 'Estilização modular e reutilizável.' },
      { name: 'Tailwind CSS', icon: 'ph-wind', description: 'Desenvolvimento ágil com utility classes.' },
      { name: 'Node.js', icon: 'ph-terminal-window', description: 'Backend javascript de alta performance.' },
      { name: 'NestJS', icon: 'ph-cube', description: 'Arquitetura backend inspirada no Angular.' },
      { name: 'REST API', icon: 'ph-plugs-connected', description: 'Integração eficiente entre sistemas.' },
      { name: 'Docker', icon: 'ph-package', description: 'Containerização de aplicações.' },
      { name: 'Git & GitHub', icon: 'ph-git-branch', description: 'Versionamento e CI/CD.' },
      { name: 'SQL & NoSQL', icon: 'ph-database', description: 'Modelagem e consumo de dados.' },
      { name: 'Figma', icon: 'ph-figma-logo', description: 'UX/UI e prototipação.' }
    ];
  }
}
