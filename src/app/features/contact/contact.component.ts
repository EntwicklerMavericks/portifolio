import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="section contact-section" id="contact">
      <div class="container">
        <h2 class="section-title">Vamos Conversar?</h2>
        
        <div class="contact-grid">
          <a href="https://wa.me/5511961742713" target="_blank" class="contact-card glass-panel">
            <i class="ph ph-whatsapp-logo logo-icon"></i>
            <div>
              <h3>WhatsApp</h3>
              <p>(11) 9 6174-2713</p>
            </div>
          </a>
          
          <a href="mailto:eduardotheodorofegit@gmail.com" class="contact-card glass-panel">
            <i class="ph ph-envelope logo-icon"></i>
            <div class="contact-info-text">
              <h3>E-mail</h3>
              <p>eduardotheodorofegit&#64;gmail.com</p>
            </div>
          </a>
          
          <a href="https://linkedin.com/in/placeholder" target="_blank" class="contact-card glass-panel">
            <i class="ph ph-linkedin-logo logo-icon"></i>
            <div class="contact-info-text">
              <h3>LinkedIn</h3>
              <p>Conecte-se comigo</p>
            </div>
          </a>
          
          <a href="https://github.com/placeholder" target="_blank" class="contact-card glass-panel">
            <i class="ph ph-github-logo logo-icon"></i>
            <div class="contact-info-text">
              <h3>GitHub</h3>
              <p>Meus repositórios</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .contact-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 1.5rem;
      max-width: 1000px;
      margin: 0 auto;
    }
    
    .contact-card {
      display: flex;
      align-items: center;
      gap: 1.5rem;
      padding: 2rem;
      transition: all var(--transition-normal);
      border: 1px solid rgba(255, 255, 255, 0.05);
      overflow: hidden;
    }
    
    .contact-info-text {
      min-width: 0;
      flex: 1;
    }
    
    .contact-card:hover {
      transform: translateY(-5px);
      background: rgba(255, 255, 255, 0.05);
      border-color: var(--primary-color);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    }
    
    .logo-icon {
      font-size: 2.5rem;
      color: var(--primary-color);
      transition: transform var(--transition-fast);
      flex-shrink: 0;
    }
    
    .contact-card:hover .logo-icon {
      transform: scale(1.1);
      color: var(--text-primary);
    }
    
    .contact-card h3 {
      font-size: 1.25rem;
      margin-bottom: 0.25rem;
      color: var(--text-primary);
    }
    
    .contact-card p {
      color: var(--text-secondary);
      font-size: 0.95rem;
      word-break: break-word;
      overflow-wrap: anywhere;
    }
  `]
})
export class ContactComponent {}
