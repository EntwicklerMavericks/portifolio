import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button 
      [class]="'btn ' + variant + ' ' + (fullWidth ? 'full-width' : '')"
      (click)="onClick.emit($event)">
      <ng-content></ng-content>
    </button>
  `,
  styles: [`
    .btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      padding: 0.75rem 1.5rem;
      border-radius: 0.5rem;
      font-weight: 600;
      transition: all var(--transition-normal);
    }
    
    .primary {
      background-color: var(--primary-color);
      color: #fff;
      box-shadow: 0 4px 14px 0 rgba(var(--primary-color-rgb), 0.39);
    }
    .primary:hover {
      filter: brightness(0.9);
      box-shadow: 0 6px 20px rgba(var(--primary-color-rgb), 0.23);
      transform: translateY(-2px);
    }
    
    .secondary {
      background-color: transparent;
      color: var(--text-primary);
      border: 1px solid var(--border-color);
    }
    .secondary:hover {
      border-color: var(--text-primary);
      background-color: rgba(255, 255, 255, 0.05);
    }
    
    .outline-gradient {
      background: linear-gradient(var(--bg-primary), var(--bg-primary)) padding-box,
                  linear-gradient(135deg, var(--primary-color), var(--secondary-color)) border-box;
      border: 2px solid transparent;
      color: var(--text-primary);
    }
    .outline-gradient:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 14px 0 rgba(var(--secondary-color-rgb), 0.2);
    }

    .full-width {
      width: 100%;
    }
  `]
})
export class ButtonComponent {
  @Input() variant: 'primary' | 'secondary' | 'outline-gradient' = 'primary';
  @Input() fullWidth: boolean = false;
  @Output() onClick = new EventEmitter<MouseEvent>();
}
