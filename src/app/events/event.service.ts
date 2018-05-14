import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Event } from './event';
import { EVENTS } from './mock-events';


@Injectable({
  providedIn: 'root',
})

export class EventService {
  constructor() {}

  getEvents(): Observable<Event[]> {
    return of(EVENTS);
  }

  getEvent(id: number): Observable<Event> {
    return of(EVENTS.find(event => event.id === id));
  }
}