import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MomahidounBoxComponent } from './components/momahidoun-box/momahidoun-box.component';
import { StoryBoxComponent } from './components/story-box/story-box.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    MomahidounBoxComponent,
    StoryBoxComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'tawbah';
}
