import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './features/hero/hero.component';
import { AboutComponent } from './features/about/about.component';
import { SkillsComponent } from './features/skills/skills.component';
import { ProjectsComponent } from './features/projects/projects.component';
import { TimelineComponent } from './features/timeline/timeline.component';
import { ContactComponent } from './features/contact/contact.component';
import { FooterComponent } from './shared/components/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    HeroComponent, 
    AboutComponent, 
    SkillsComponent, 
    ProjectsComponent, 
    TimelineComponent, 
    ContactComponent,
    FooterComponent
  ],
  template: `
    <main class="app-container">
      <app-hero></app-hero>
      <app-about></app-about>
      <app-skills></app-skills>
      <app-projects></app-projects>
      <app-timeline></app-timeline>
      <app-contact></app-contact>
      <app-footer></app-footer>
    </main>
  `,
  styles: [`
    .app-container {
      display: flex;
      flex-direction: column;
      overflow-x: hidden;
    }
  `]
})
export class AppComponent {
  title = 'portifolio';
}
