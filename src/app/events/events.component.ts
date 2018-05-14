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

  constructor(private eventService: EventService) {}

  getEvents(): void {
    this.eventService.getEvents()
      .subscribe(events => this.events = events);
  }

  removeEvent(id: number): void {    
    this.events = this.events.filter(event => event.id !== id);
  }

  readArticle(article: Article): void {    
    article.isRead = true;
  }

  ngOnInit() {
    this.getEvents();
  }
}