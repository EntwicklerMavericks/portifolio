import { Component, OnInit, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineEvent } from '../../core/models';
import { TimelineDataService } from '../../core/data/timeline.data';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimelineComponent implements OnInit {
  events: TimelineEvent[] = [];

  private readonly timelineService = inject(TimelineDataService);

  ngOnInit(): void {
    this.events = this.timelineService.getEvents();
  }

  trackByYear(_index: number, event: TimelineEvent): string {
    return event.year;
  }
}
