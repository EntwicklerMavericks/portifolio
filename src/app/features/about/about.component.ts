import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="section about-section" id="about">
      <div class="container">
        <h2 class="section-title">Sobre Mim</h2>
        
        <div class="about-grid">
          <div class="about-text glass-panel">
            <p>
              Sou <strong>Desenvolvedor Full Stack Pleno</strong>, atuando profissionalmente na área desde outubro de 2022. 
              Minha trajetória tem sido fortemente marcada pelo desenvolvimento e evolução de aplicações web corporativas, 
              com um foco muito especial no <strong>Frontend utilizando Angular</strong>.
            </p>
            <p>
              No meu dia a dia, trabalho focado em construir sistemas reais e complexos. Tenho experiência profunda 
              no desenvolvimento de novas funcionalidades, evolução de sistemas legados, correção de bugs críticos em 
              produção e arquitetura de novos projetos do zero.
            </p>
            <p>
              Minha abordagem prioriza a <strong>Arquitetura Frontend</strong> sólida, visando escalabilidade e 
              manutenibilidade. Aplico fortemente <strong>Boas Práticas</strong> e <strong>Clean Code</strong>, 
              garantindo que a componentização seja inteligente e reutilizável. Otimizo ativamente a <strong>Performance</strong> 
              e garanto total <strong>Responsividade</strong> para todos os dispositivos. Além disso, possuo forte 
              bagagem na integração ponta-a-ponta, consumindo APIs REST e orquestrando o frontend com backends complexos.
            </p>
          </div>
          
          <div class="differentials">
            <h3>Meus Diferenciais</h3>
            <div class="differentials-grid">
              <div class="differential-item" *ngFor="let diff of differentials">
                <i class="ph-fill ph-check-circle differential-icon"></i>
                <span>{{ diff }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .about-grid {
      display: grid;
      grid-template-columns: 3fr 2fr;
      gap: 3rem;
      align-items: start;
    }
    
    .about-text {
      padding: 2.5rem;
      font-size: 1.1rem;
      line-height: 1.8;
      color: var(--text-secondary);
    }
    
    .about-text p {
      margin-bottom: 1.5rem;
    }
    
    .about-text p:last-child {
      margin-bottom: 0;
    }
    
    .about-text strong {
      color: var(--text-primary);
      font-weight: 600;
    }
    
    .differentials h3 {
      font-size: 1.75rem;
      margin-bottom: 1.5rem;
      color: var(--text-primary);
    }
    
    .differentials-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 1rem;
    }
    
    .differential-item {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 1rem 1.5rem;
      background: rgba(255, 255, 255, 0.03);
      border-radius: 0.75rem;
      border: 1px solid rgba(255, 255, 255, 0.05);
      transition: all var(--transition-fast);
    }
    
    .differential-item:hover {
      background: rgba(255, 255, 255, 0.08);
      transform: translateX(5px);
      border-color: var(--primary-color);
    }
    
    .differential-icon {
      color: var(--primary-color);
      font-size: 1.5rem;
    }
    
    @media (max-width: 992px) {
      .about-grid {
        grid-template-columns: 1fr;
      }
      
      .differentials-grid {
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      }
    }
  `]
})
export class AboutComponent {
  differentials = [
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
}
