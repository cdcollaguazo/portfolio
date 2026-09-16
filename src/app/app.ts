import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './shared/header/header';
import { NavBar } from "./shared/nav-bar/nav-bar";
import { Footer } from "./shared/footer/footer";

@Component({
  selector: 'app-root',
  imports: [Header, NavBar, RouterOutlet, Footer],
  templateUrl: './app.html'
})
export class App {}
