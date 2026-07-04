import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../shared/components/button.component';
import { trigger, state, style, transition, animate, stagger, query } from '@angular/animations';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  template: `
    <section class="section hero-section" id="hero">
      <div class="container hero-container" [@staggerFadeIn]="'in'">
        <div class="hero-content">
          <p class="greeting animate-fade-in" style="animation-delay: 0.1s">Olá, eu sou</p>
          <h1 class="hero-title animate-fade-in" style="animation-delay: 0.2s">Eduardo Rodrigues Theodoro</h1>
          <h2 class="hero-subtitle gradient-text animate-fade-in" style="animation-delay: 0.3s">Desenvolvedor Frontend Angular</h2>
          <p class="hero-description animate-fade-in" style="animation-delay: 0.4s">
            Desenvolvedor Full Stack com forte atuação em Frontend, especializado na criação de interfaces modernas, escaláveis e performáticas utilizando Angular.
          </p>
          
          <div class="hero-actions animate-fade-in" style="animation-delay: 0.5s">
            <app-button variant="primary" (onClick)="scrollTo('projects')">
              <i class="ph ph-briefcase"></i> Ver Projetos
            </app-button>
            <app-button variant="outline-gradient" (onClick)="downloadCV()">
              <i class="ph ph-download-simple"></i> Baixar Currículo
            </app-button>
            <app-button variant="secondary" (onClick)="openLink('https://github.com/placeholder')">
              <i class="ph ph-github-logo"></i> GitHub
            </app-button>
            <app-button variant="secondary" (onClick)="scrollTo('contact')">
              <i class="ph ph-paper-plane-tilt"></i> Contato
            </app-button>
          </div>
        </div>
        
        <div class="hero-image-wrapper animate-fade-in" style="animation-delay: 0.6s">
          <div class="glass-panel profile-glass">
            <img src="https://placehold.co/400x400/111827/ffffff?text=Sua+Foto" alt="Eduardo Rodrigues" class="profile-img">
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero-section {
      min-height: 100vh;
      display: flex;
      align-items: center;
      padding-top: 8rem;
    }
    
    .hero-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
      align-items: center;
    }
    
    .greeting {
      font-size: 1.25rem;
      color: var(--text-secondary);
      margin-bottom: 1rem;
    }
    
    .hero-title {
      font-size: 4rem;
      line-height: 1.1;
      margin-bottom: 1rem;
      letter-spacing: -0.02em;
    }
    
    .hero-subtitle {
      font-size: 2.25rem;
      margin-bottom: 2rem;
    }
    
    .hero-description {
      font-size: 1.125rem;
      color: var(--text-secondary);
      max-width: 600px;
      margin-bottom: 3rem;
      line-height: 1.8;
    }
    
    .hero-actions {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
    }
    
    .hero-image-wrapper {
      display: flex;
      justify-content: center;
    }
    
    .profile-glass {
      padding: 1.5rem;
      border-radius: 2rem;
      position: relative;
    }
    
    .profile-glass::before {
      content: '';
      position: absolute;
      inset: -2px;
      background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
      border-radius: 2.1rem;
      z-index: -1;
      opacity: 0.5;
      filter: blur(15px);
    }
    
    .profile-img {
      width: 100%;
      max-width: 400px;
      aspect-ratio: 1;
      object-fit: cover;
      border-radius: 1.5rem;
    }
    
    @media (max-width: 1024px) {
      .hero-title {
        font-size: 3rem;
      }
      .hero-subtitle {
        font-size: 1.8rem;
      }
    }
    
    @media (max-width: 768px) {
      .hero-container {
        grid-template-columns: 1fr;
        text-align: center;
        gap: 3rem;
      }
      
      .hero-description {
        margin: 0 auto 3rem auto;
      }
      
      .hero-actions {
        justify-content: center;
      }
    }
  `],
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
  scrollTo(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  openLink(url: string): void {
    window.open(url, '_blank');
  }

  downloadCV(): void {
    alert('Funcionalidade de download do CV será implementada aqui.');
  }
}
