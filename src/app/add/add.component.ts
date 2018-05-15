import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { EventService } from '../events/event.service';

@Component({
  selector: 'app-event-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})

export class EventAddComponent implements OnInit {
  @Input() event: any;

  constructor(private route: ActivatedRoute, private eventService: EventService, private location: Location) {
    this.event = {
      deleted: false,
    };
  }

  goBack(): void {
    this.location.back();
  }

  ngOnInit(): void {
    this.getType();
  }

  getType(): void {
    const type = this.route.snapshot.paramMap.get('type');

    this.event.type = type;
  }

  add(): void {
    this.eventService.addEvent(this.event)
      .subscribe(() => {
        this.goBack();
      });
  }
}