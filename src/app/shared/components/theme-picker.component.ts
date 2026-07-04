import { Component, inject, HostListener, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService, Theme } from '../../core/services/theme.service';

@Component({
  selector: 'app-theme-picker',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="theme-picker-container" #container>
      <button class="theme-toggle-btn glass-panel" (click)="toggleMenu()" aria-label="Mudar cor do tema">
        <i class="ph ph-palette"></i>
      </button>

      <div class="theme-menu glass-panel" [class.open]="menuOpen">
        <h4>Cores do Tema</h4>
        <div class="theme-options">
          <button 
            *ngFor="let theme of themes" 
            class="theme-circle"
            [class.active]="currentTheme === theme.id"
            [style.background]="theme.gradient"
            (click)="selectTheme(theme.id)"
            [title]="theme.name"
            aria-label="Selecionar tema">
          </button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .theme-picker-container {
      position: fixed;
      bottom: 2rem;
      right: 2rem;
      z-index: 1000;
    }

    .theme-toggle-btn {
      width: 56px;
      height: 56px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--text-primary);
      font-size: 1.75rem;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
      transition: all var(--transition-normal);
      border: 1px solid var(--border-color);
    }

    .theme-toggle-btn:hover {
      transform: scale(1.1);
      color: var(--primary-color);
      border-color: var(--primary-color);
    }

    .theme-menu {
      position: absolute;
      bottom: 80px;
      right: 0;
      padding: 1rem;
      border-radius: 1rem;
      box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
      width: 200px;
      opacity: 0;
      visibility: hidden;
      transform: translateY(20px) scale(0.9);
      transform-origin: bottom right;
      transition: all var(--transition-normal);
    }

    .theme-menu.open {
      opacity: 1;
      visibility: visible;
      transform: translateY(0) scale(1);
    }

    .theme-menu h4 {
      font-size: 0.9rem;
      margin-bottom: 1rem;
      color: var(--text-secondary);
      font-weight: 500;
      text-align: center;
    }

    .theme-options {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 0.75rem;
    }

    .theme-circle {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      border: 2px solid transparent;
      transition: all var(--transition-fast);
      cursor: pointer;
    }

    .theme-circle:hover {
      transform: scale(1.1);
    }

    .theme-circle.active {
      border-color: var(--text-primary);
      transform: scale(1.2);
      box-shadow: 0 0 10px rgba(255, 255, 255, 0.2);
    }
  `]
})
export class ThemePickerComponent {
  private themeService = inject(ThemeService);
  
  menuOpen = false;
  currentTheme: Theme = this.themeService.getCurrentTheme();

  @ViewChild('container') containerRef!: ElementRef;

  themes = [
    { id: 'theme-blue', name: 'Azul e Roxo', gradient: 'linear-gradient(135deg, #3B82F6, #8B5CF6)' },
    { id: 'theme-pink', name: 'Rosa e Bordô', gradient: 'linear-gradient(135deg, #F472B6, #9F1239)' },
    { id: 'theme-orange', name: 'Laranja e Amarelo', gradient: 'linear-gradient(135deg, #F97316, #EAB308)' },
    { id: 'theme-red', name: 'Vermelho e Roxo', gradient: 'linear-gradient(135deg, #EF4444, #A855F7)' }
  ];

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  selectTheme(themeId: string) {
    const theme = themeId as Theme;
    this.themeService.setTheme(theme);
    this.currentTheme = theme;
    this.menuOpen = false;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (this.containerRef && !this.containerRef.nativeElement.contains(event.target)) {
      this.menuOpen = false;
    }
  }
}
