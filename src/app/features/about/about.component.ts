import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutComponent {
  readonly differentials: readonly string[] = [
    'Experiência profissional desde 2022',
    'Desenvolvimento de sistemas corporativos',
    'Angular & TypeScript',
    'Componentização e Arquitetura',
    'Integração com APIs REST',
    'Alta Performance e UI Responsiva',
    'Clean Code e Boas Práticas',
    'Trabalho em Equipe e Code Review',
    'Metodologias Ágeis (Scrum/Kanban)'
  ];

  trackByIndex(index: number): number {
    return index;
  }
}
