import { Component, OnInit, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Project } from '../../core/models';
import { ProjectsDataService } from '../../core/data/projects.data';
import { ButtonComponent } from '../../shared/components/button.component';
import { WINDOW } from '../../core/tokens/window.token';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ButtonComponent, NgOptimizedImage],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];

  private readonly projectsService = inject(ProjectsDataService);
  private readonly window = inject(WINDOW);

  ngOnInit(): void {
    this.projects = this.projectsService.getProjects();
  }

  openLink(url: string | undefined): void {
    if (url && url !== '#') {
      this.window?.open(url, '_blank');
    }
  }

  trackById(_index: number, project: Project): string {
    return project.id;
  }

  trackByTech(index: number): number {
    return index;
  }
}
