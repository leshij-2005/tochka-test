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
    this.events = (this.events.length ? this.events : events).filter(event => !event.deleted);

    return of(this.events);
  }

  getEvent(id: number): Observable<Object> {
    if (!this.events.length) {
      this.events = events;
    }

    return of(this.events.find(event => event.id === id))
  }

  updateEvent(id: number, data: Object): Observable<Object> {
    return of(this.events.find(event => event.id === id));
  }

  deleteEvent(id: number): Observable<Object> {
    return of(true);
  }

  addEvent(event: any): Observable<Object> {
    event.date = new Date();
    event.id = this.events.length + 1;

    this.events.push(event);

    return of(event);
  }
}