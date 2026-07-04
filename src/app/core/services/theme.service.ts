import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

export type Theme = 'theme-blue' | 'theme-pink' | 'theme-orange' | 'theme-red';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private renderer: Renderer2;
  private currentTheme: Theme = 'theme-blue';

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
    
    // Recupera o tema do localStorage se existir
    const savedTheme = localStorage.getItem('app-theme') as Theme;
    if (savedTheme) {
      this.setTheme(savedTheme);
    } else {
      this.setTheme('theme-blue');
    }
  }

  setTheme(theme: Theme) {
    // Remove o tema atual
    this.renderer.removeClass(document.body, this.currentTheme);
    
    // Adiciona o novo tema
    this.currentTheme = theme;
    this.renderer.addClass(document.body, this.currentTheme);
    
    // Salva a preferência
    localStorage.setItem('app-theme', this.currentTheme);
  }

  getCurrentTheme(): Theme {
    return this.currentTheme;
  }
}
