import { Injectable, Renderer2, RendererFactory2, Inject, signal } from '@angular/core';
import { DOCUMENT } from '@angular/common';

export type Theme = 'theme-blue' | 'theme-pink' | 'theme-orange' | 'theme-red';

const VALID_THEMES: readonly Theme[] = ['theme-blue', 'theme-pink', 'theme-orange', 'theme-red'] as const;
const STORAGE_KEY = 'app-theme';
const DEFAULT_THEME: Theme = 'theme-blue';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly renderer: Renderer2;
  
  // Sinal privado para controle interno de estado reativo
  private readonly _currentTheme = signal<Theme>(DEFAULT_THEME);
  
  // Sinal público de apenas leitura (Readonly Signal)
  readonly currentTheme = this._currentTheme.asReadonly();

  constructor(
    rendererFactory: RendererFactory2,
    @Inject(DOCUMENT) private readonly document: Document
  ) {
    this.renderer = rendererFactory.createRenderer(null, null);

    const savedTheme = localStorage.getItem(STORAGE_KEY);
    if (savedTheme && VALID_THEMES.includes(savedTheme as Theme)) {
      this.setTheme(savedTheme as Theme);
    } else {
      this.setTheme(DEFAULT_THEME);
    }
  }

  setTheme(theme: Theme): void {
    // Remove a classe do tema anterior através do valor atual do sinal
    this.renderer.removeClass(this.document.body, this._currentTheme());
    
    // Atualiza o sinal reativo
    this._currentTheme.set(theme);
    
    // Adiciona a classe do novo tema
    this.renderer.addClass(this.document.body, theme);
    
    // Salva no localStorage
    localStorage.setItem(STORAGE_KEY, theme);
  }
}
