import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { events } from './mock-events';
import { EventEmitter } from 'events';

@Injectable({
  providedIn: 'root',
})

export class EventService {
  events = [];

  constructor() {}

  getEvents(): Observable<Object[]> {
    this.events = events.filter(event => !event.deleted);

    return of(this.events);
  }

  getEvent(id: number): Observable<Object> {
    if (!this.events.length) {
      this.events = events;
    }

    return of(this.events.find(event => event.id === id))
  }
}