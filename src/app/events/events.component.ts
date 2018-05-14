import { Component, OnInit } from '@angular/core';

import { Event } from './event';
import { EventService } from './event.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})

export class EventsComponent implements OnInit {
  constructor(private eventService: EventService) {}

  events: Event[];

  selectedEvent: Event;

  getEvents(): void {
    this.eventService.getEvents()
      .subscribe(events => this.events = events);
  }

  onSelect(event: Event): void {
    this.selectedEvent = event;
  }

  ngOnInit() {
    this.getEvents();
  }
}