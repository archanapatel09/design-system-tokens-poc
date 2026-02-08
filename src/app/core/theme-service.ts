import { Injectable, signal, effect } from '@angular/core';

export type ThemeName = 'light' | 'dark' | 'High Contrast';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  // 1) Theme state (signal)
  theme = signal<ThemeName>(this.getInitialTheme());

  constructor() {
    // 2) Whenever theme changes -> apply to <html> + save
    effect(() => {
      const t = this.theme();
      document.documentElement.setAttribute('data-theme', t);
      localStorage.setItem('theme', t);
    });
  }

  setTheme(t: ThemeName) {
    this.theme.set(t);
  }

  private getInitialTheme(): ThemeName {
    const saved = localStorage.getItem('theme') as ThemeName | null;
    if (saved === 'light' || saved === 'dark' || saved === 'High Contrast') return saved;
    return 'light';
  }
}

