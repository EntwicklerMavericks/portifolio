import { Component, OnInit, ChangeDetectionStrategy, Inject, inject } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { Project } from '../../core/models';
import { ProjectsDataService } from '../../core/data/projects.data';
import { ButtonComponent } from '../../shared/components/button.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];

  private readonly projectsService = inject(ProjectsDataService);

  constructor(@Inject(DOCUMENT) private readonly document: Document) {}

  ngOnInit(): void {
    this.projects = this.projectsService.getProjects();
  }

  openLink(url: string | undefined): void {
    if (url && url !== '#') {
      this.document.defaultView?.open(url, '_blank');
    }
  }

  trackById(_index: number, project: Project): string {
    return project.id;
  }

  trackByTech(index: number): number {
    return index;
  }
}
