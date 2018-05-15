import { Component, OnInit } from '@angular/core';

import { EventService } from './event.service';
import { Article } from '../article/article';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})

export class EventsComponent implements OnInit {
  events = [];
  sortBy:string = 'date';

  constructor(private eventService: EventService) {}

  getEvents(): void {
    this.eventService.getEvents()
      .subscribe(events => this.events = events);
  }

  ngOnInit() {
    this.getEvents();
  }

  sort(type: string): void {
    this.sortBy = type;

    this.events.sort((a, b) => a[type] > b[type] ? 1 : -1);
  }
}