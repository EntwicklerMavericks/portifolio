import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsDataService, Project } from '../../core/data/projects.data';
import { ButtonComponent } from '../../shared/components/button.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  template: `
    <section class="section projects-section" id="projects">
      <div class="container">
        <h2 class="section-title">Projetos em Destaque</h2>
        
        <div class="projects-grid">
          <div class="project-card glass-panel" *ngFor="let project of projects">
            <div class="project-image">
              <img [src]="project.image" [alt]="project.title">
              <div class="project-overlay">
                <div class="overlay-content">
                  <app-button variant="primary" (onClick)="openLink(project.demoUrl)">
                    <i class="ph ph-arrow-square-out"></i> Demo
                  </app-button>
                  <app-button variant="secondary" (onClick)="openLink(project.githubUrl)">
                    <i class="ph ph-github-logo"></i> GitHub
                  </app-button>
                </div>
              </div>
            </div>
            
            <div class="project-info">
              <h3 class="project-title">{{ project.title }}</h3>
              <p class="project-description">{{ project.description }}</p>
              
              <div class="project-tech">
                <span class="tech-tag" *ngFor="let tech of project.technologies">{{ tech }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .projects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
      gap: 2.5rem;
    }
    
    .project-card {
      display: flex;
      flex-direction: column;
      overflow: hidden;
      padding: 0;
      border: 1px solid rgba(255, 255, 255, 0.05);
      transition: all var(--transition-normal);
    }
    
    .project-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 15px 35px rgba(0, 0, 0, 0.4);
      border-color: rgba(255, 255, 255, 0.1);
    }
    
    .project-image {
      position: relative;
      width: 100%;
      aspect-ratio: 16/9;
      overflow: hidden;
    }
    
    .project-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform var(--transition-slow);
    }
    
    .project-card:hover .project-image img {
      transform: scale(1.05);
    }
    
    .project-overlay {
      position: absolute;
      inset: 0;
      background: rgba(15, 23, 42, 0.85);
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      transition: opacity var(--transition-normal);
    }
    
    .project-card:hover .project-overlay {
      opacity: 1;
    }
    
    .overlay-content {
      display: flex;
      gap: 1rem;
      transform: translateY(20px);
      transition: transform var(--transition-normal);
    }
    
    .project-card:hover .overlay-content {
      transform: translateY(0);
    }
    
    .project-info {
      padding: 2rem;
      display: flex;
      flex-direction: column;
      flex-grow: 1;
    }
    
    .project-title {
      font-size: 1.5rem;
      margin-bottom: 1rem;
      color: var(--text-primary);
    }
    
    .project-description {
      color: var(--text-secondary);
      line-height: 1.6;
      margin-bottom: 1.5rem;
      flex-grow: 1;
    }
    
    .project-tech {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }
    
    .tech-tag {
      font-size: 0.75rem;
      font-weight: 600;
      padding: 0.25rem 0.75rem;
      border-radius: 2rem;
      background: rgba(var(--primary-color-rgb), 0.1);
      color: var(--primary-color);
      border: 1px solid rgba(var(--primary-color-rgb), 0.2);
    }
    
    @media (max-width: 768px) {
      .projects-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];
  private projectsService = inject(ProjectsDataService);

  ngOnInit(): void {
    this.projects = this.projectsService.getProjects();
  }

  openLink(url: string | undefined): void {
    if (url && url !== '#') {
      window.open(url, '_blank');
    } else {
      alert('Link não disponível (Placeholder).');
    }
  }
}
