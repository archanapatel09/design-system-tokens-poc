import { Component } from '@angular/core';
import { Header } from './components/header/header';
import { Button } from "./components/button/button";
import { Card } from './components/card/card';
import { Input } from './components/input/input';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  imports: [Header, Button,Card,Input,ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  applyTheme(theme: string) {
    document.documentElement.setAttribute('data-theme', theme);
  }
}
