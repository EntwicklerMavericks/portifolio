import { Injectable, Renderer2, RendererFactory2, Inject } from '@angular/core';
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
  private currentTheme: Theme = DEFAULT_THEME;

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
    this.renderer.removeClass(this.document.body, this.currentTheme);
    this.currentTheme = theme;
    this.renderer.addClass(this.document.body, this.currentTheme);
    localStorage.setItem(STORAGE_KEY, this.currentTheme);
  }

  getCurrentTheme(): Theme {
    return this.currentTheme;
  }
}
