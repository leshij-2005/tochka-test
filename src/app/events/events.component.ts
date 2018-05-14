import { Component, OnInit } from '@angular/core';

import { EVENTS } from './mock-events';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})

export class EventsComponent implements OnInit {
  constructor() {}

  events = EVENTS;

  selectedEvent: Event;

  onSelect(event: Event): void {
    this.selectedEvent = event;
  }

  ngOnInit() {

  }
}