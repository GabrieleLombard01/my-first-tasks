import { Component } from '@angular/core';
import { HeaderComponent } from './components/Header/Header.component';
import { GalleryComponent } from './components/Gallery/Gallery.component';
import { FooterComponent } from './components/Footer/Footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, GalleryComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-first-tasks';
}
