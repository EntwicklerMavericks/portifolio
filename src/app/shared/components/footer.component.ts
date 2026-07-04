import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="footer">
      <div class="container footer-content">
        <p>Desenvolvido com Angular.</p>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      border-top: 1px solid var(--border-color);
      padding: 2rem 0;
      text-align: center;
      background-color: var(--bg-primary);
    }
    
    .footer-content p {
      color: var(--text-secondary);
      font-size: 0.9rem;
    }
  `]
})
export class FooterComponent {}
