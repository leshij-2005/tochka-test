import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Transaction } from './transaction';
import { EventService } from '../events/event.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})

export class TransactionComponent implements OnInit {
  @Input() transaction: Transaction;

  constructor(private route: ActivatedRoute, private eventService: EventService, private location: Location) {}

  ngOnInit(): void {
    this.get();
  }

  get(): void {
    const id = +this.route.snapshot.paramMap.get('id');

    this.eventService.getEvent(id)
      .subscribe((event: Transaction) => this.transaction = event);
  }

  goBack(): void {
    this.location.back();
  }

  remove(): void {
    this.eventService.deleteEvent(this.transaction.id).subscribe(() => this.transaction.deleted = true);

    this.goBack();
  }
}