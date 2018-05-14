import { Component, OnInit, Input } from '@angular/core';

import { Event } from '../events/event';

@Component({
  selector: 'app-event-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})

export class EventDetailComponent implements OnInit {
  @Input() event: Event;

  constructor() {}

  onClose(): void {
    this.event = null;
  }

  ngOnInit() {}
}