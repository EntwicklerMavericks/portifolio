import { Injectable } from '@angular/core';

export interface TimelineEvent {
  year: string;
  role: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class TimelineDataService {
  getEvents(): TimelineEvent[] {
    return [
      {
        year: 'Out/2022 - Presente',
        role: 'Desenvolvedor Full Stack Pleno',
        description: 'Desenvolvimento e evolução de aplicações web corporativas, foco em Angular no frontend, desenvolvimento de novas funcionalidades, integração de APIs REST e correção de bugs em produção utilizando boas práticas e Clean Code.'
      },
      {
        year: 'Anterior',
        role: 'Estudos e Projetos Pessoais',
        description: 'Construção de base sólida em HTML, CSS, JavaScript e lógica de programação, evoluindo para frameworks modernos como Angular e Node.js.'
      }
    ];
  }
}
