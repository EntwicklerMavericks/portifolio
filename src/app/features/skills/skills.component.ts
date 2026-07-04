import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsDataService, Skill } from '../../core/data/skills.data';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="section skills-section" id="skills">
      <div class="container">
        <h2 class="section-title">Tecnologias e Ferramentas</h2>
        
        <div class="skills-grid">
          <div class="skill-card glass-panel" *ngFor="let skill of skills">
            <div class="skill-icon-wrapper">
              <i [class]="'ph ' + skill.icon + ' skill-icon'"></i>
            </div>
            <h4 class="skill-name">{{ skill.name }}</h4>
            <p class="skill-description">{{ skill.description }}</p>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .skills-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 1.5rem;
    }
    
    .skill-card {
      padding: 2rem 1.5rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      transition: all var(--transition-normal);
      border: 1px solid rgba(255, 255, 255, 0.05);
      position: relative;
      overflow: hidden;
    }
    
    .skill-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 4px;
      background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
      transform: scaleX(0);
      transform-origin: left;
      transition: transform var(--transition-normal);
    }
    
    .skill-card:hover {
      transform: translateY(-8px);
      border-color: rgba(255, 255, 255, 0.15);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
    }
    
    .skill-card:hover::before {
      transform: scaleX(1);
    }
    
    .skill-icon-wrapper {
      width: 64px;
      height: 64px;
      border-radius: 1rem;
      background: rgba(var(--primary-color-rgb), 0.1);
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 1.5rem;
      color: var(--primary-color);
      transition: all var(--transition-normal);
    }
    
    .skill-card:hover .skill-icon-wrapper {
      background: var(--primary-color);
      color: #fff;
      transform: scale(1.1) rotate(5deg);
    }
    
    .skill-icon {
      font-size: 2rem;
    }
    
    .skill-name {
      font-size: 1.25rem;
      margin-bottom: 0.75rem;
      color: var(--text-primary);
    }
    
    .skill-description {
      font-size: 0.95rem;
      color: var(--text-secondary);
      line-height: 1.5;
    }
  `]
})
export class SkillsComponent implements OnInit {
  skills: Skill[] = [];
  private skillsService = inject(SkillsDataService);

  ngOnInit(): void {
    this.skills = this.skillsService.getSkills();
  }
}
