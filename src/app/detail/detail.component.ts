import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { EventService } from '../events/event.service';

@Component({
  selector: 'app-event-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})

export class EventDetailComponent implements OnInit {
  @Input() event: Object;

  constructor(private route: ActivatedRoute, private eventService: EventService, private location: Location) {}

  goBack(): void {
    this.location.back();
  }

  ngOnInit(): void {
    this.getEvent();
  }

  getEvent(): void {
    const id = +this.route.snapshot.paramMap.get('id');

    this.eventService.getEvent(id)
      .subscribe(event => this.event = event);
  }
}