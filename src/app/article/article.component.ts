import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Article } from './article';
import { EventService } from '../events/event.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})

export class ArticleComponent implements OnInit {
  @Input() article: Article;

  constructor(private route: ActivatedRoute, private eventService: EventService, private location: Location) {}

  ngOnInit(): void {
    this.get();
  }

  get(): void {
    const id = +this.route.snapshot.paramMap.get('id');

    this.eventService.getEvent(id)
      .subscribe((event: Article) => this.article = event);
  }

  goBack(): void {
    this.location.back();
  }

  read(): void {
    this.article.isRead = true;

    this.goBack();
  }
}