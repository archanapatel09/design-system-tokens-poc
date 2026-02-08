import { Component, inject } from '@angular/core';
import { ThemeName, ThemeService } from '../../core/theme-service';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header
 {
themeService = inject(ThemeService);

  onThemeChange(event: Event) {
    const value = (event.target as HTMLSelectElement).value as ThemeName;
    this.themeService.setTheme(value);
  }
  
 }
