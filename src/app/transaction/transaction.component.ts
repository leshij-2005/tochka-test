import { Component, OnInit, Input } from '@angular/core';
import { Transaction } from './transaction';
import { EventService } from '../events/event.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})

export class TransactionComponent implements OnInit {
  @Input() transaction: Transaction;

  constructor(private eventService: EventService) {}

  ngOnInit() {}
}