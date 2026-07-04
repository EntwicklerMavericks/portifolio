import { Component, OnInit, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Skill } from '../../core/models';
import { SkillsDataService } from '../../core/data/skills.data';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkillsComponent implements OnInit {
  skills: Skill[] = [];

  private readonly skillsService = inject(SkillsDataService);

  ngOnInit(): void {
    this.skills = this.skillsService.getSkills();
  }

  trackByName(_index: number, skill: Skill): string {
    return skill.name;
  }
}
