import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineDataService, TimelineEvent } from '../../core/data/timeline.data';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="section timeline-section" id="timeline">
      <div class="container">
        <h2 class="section-title">Minha Trajetória</h2>
        
        <div class="timeline">
          <div class="timeline-item" *ngFor="let event of events; let i = index">
            <div class="timeline-dot"></div>
            <div class="timeline-content glass-panel">
              <div class="timeline-year">{{ event.year }}</div>
              <h3 class="timeline-role">{{ event.role }}</h3>
              <p class="timeline-description">{{ event.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .timeline {
      position: relative;
      max-width: 800px;
      margin: 0 auto;
      padding-left: 2rem;
    }
    
    .timeline::before {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 7px;
      width: 2px;
      background: linear-gradient(to bottom, var(--primary-color), var(--secondary-color), transparent);
    }
    
    .timeline-item {
      position: relative;
      margin-bottom: 3rem;
    }
    
    .timeline-item:last-child {
      margin-bottom: 0;
    }
    
    .timeline-dot {
      position: absolute;
      left: -2rem;
      top: 1.5rem;
      width: 16px;
      height: 16px;
      border-radius: 50%;
      background: var(--bg-primary);
      border: 3px solid var(--primary-color);
      transform: translateX(-1px);
      box-shadow: 0 0 10px rgba(59, 130, 246, 0.5);
      z-index: 1;
      transition: all var(--transition-normal);
    }
    
    .timeline-item:hover .timeline-dot {
      background: var(--primary-color);
      transform: translateX(-1px) scale(1.2);
    }
    
    .timeline-content {
      padding: 2rem;
      position: relative;
      transition: all var(--transition-normal);
    }
    
    .timeline-item:hover .timeline-content {
      transform: translateX(5px);
      border-color: rgba(255, 255, 255, 0.15);
    }
    
    .timeline-year {
      display: inline-block;
      font-size: 0.875rem;
      font-weight: 700;
      color: var(--secondary-color);
      margin-bottom: 0.5rem;
      letter-spacing: 0.05em;
      text-transform: uppercase;
    }
    
    .timeline-role {
      font-size: 1.5rem;
      color: var(--text-primary);
      margin-bottom: 1rem;
    }
    
    .timeline-description {
      color: var(--text-secondary);
      line-height: 1.6;
    }
    
    @media (max-width: 768px) {
      .timeline {
        padding-left: 1.5rem;
      }
      .timeline-dot {
        left: -1.5rem;
        top: 1.25rem;
      }
      .timeline-content {
        padding: 1.5rem;
      }
    }
  `]
})
export class TimelineComponent implements OnInit {
  events: TimelineEvent[] = [];
  private timelineService = inject(TimelineDataService);

  ngOnInit(): void {
    this.events = this.timelineService.getEvents();
  }
}
