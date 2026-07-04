import { Component, ChangeDetectionStrategy, Inject } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { ButtonComponent } from '../../shared/components/button.component';
import { trigger, style, transition, animate, stagger, query } from '@angular/animations';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('staggerFadeIn', [
      transition('* => in', [
        query('.animate-fade-in', [
          style({ opacity: 0, transform: 'translateY(20px)' }),
          stagger(100, [
            animate('0.6s cubic-bezier(0.16, 1, 0.3, 1)', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class HeroComponent {
  constructor(@Inject(DOCUMENT) private readonly document: Document) {}

  scrollTo(elementId: string): void {
    const element = this.document.getElementById(elementId);
    element?.scrollIntoView({ behavior: 'smooth' });
  }

  openLink(url: string): void {
    this.document.defaultView?.open(url, '_blank');
  }

  downloadCV(): void {
    alert('Funcionalidade de download do CV será implementada aqui.');
  }
}
