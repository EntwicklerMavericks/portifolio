import { Component, ChangeDetectionStrategy } from '@angular/core';
import { HeroComponent } from './features/hero/hero.component';
import { AboutComponent } from './features/about/about.component';
import { SkillsComponent } from './features/skills/skills.component';
import { ProjectsComponent } from './features/projects/projects.component';
import { TimelineComponent } from './features/timeline/timeline.component';
import { ContactComponent } from './features/contact/contact.component';
import { FooterComponent } from './shared/components/footer.component';
import { ThemePickerComponent } from './shared/components/theme-picker.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    TimelineComponent,
    ContactComponent,
    FooterComponent,
    ThemePickerComponent
  ],
  template: `
    <a class="skip-link" href="#about">Pular para o conteúdo</a>
    <main class="app-container">
      <app-theme-picker></app-theme-picker>
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

    .skip-link {
      position: absolute;
      top: -100%;
      left: 0;
      background: var(--primary-color);
      color: #fff;
      padding: 0.75rem 1.5rem;
      z-index: 9999;
      font-weight: 600;
      border-radius: 0 0 0.5rem 0;
    }

    .skip-link:focus {
      top: 0;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {}
