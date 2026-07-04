import { Component, ChangeDetectionStrategy, inject, HostListener, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService, Theme } from '../../core/services/theme.service';

interface ThemeOption {
  readonly id: Theme;
  readonly name: string;
  readonly gradient: string;
}

@Component({
  selector: 'app-theme-picker',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './theme-picker.component.html',
  styleUrl: './theme-picker.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThemePickerComponent {
  private readonly themeService = inject(ThemeService);

  menuOpen = false;
  currentTheme: Theme = this.themeService.getCurrentTheme();

  @ViewChild('container') containerRef!: ElementRef;

  readonly themes: readonly ThemeOption[] = [
    { id: 'theme-blue', name: 'Azul e Roxo', gradient: 'linear-gradient(135deg, #3B82F6, #8B5CF6)' },
    { id: 'theme-pink', name: 'Rosa e Bordô', gradient: 'linear-gradient(135deg, #F472B6, #9F1239)' },
    { id: 'theme-orange', name: 'Laranja e Amarelo', gradient: 'linear-gradient(135deg, #F97316, #EAB308)' },
    { id: 'theme-red', name: 'Vermelho e Roxo', gradient: 'linear-gradient(135deg, #EF4444, #A855F7)' }
  ];

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  selectTheme(themeId: Theme): void {
    this.themeService.setTheme(themeId);
    this.currentTheme = themeId;
    this.menuOpen = false;
  }

  trackById(_index: number, theme: ThemeOption): string {
    return theme.id;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (this.containerRef && !this.containerRef.nativeElement.contains(event.target)) {
      this.menuOpen = false;
    }
  }
}
