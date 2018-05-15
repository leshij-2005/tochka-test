import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ArticleComponent } from './article/article.component';
import { TransactionComponent } from './transaction/transaction.component';
import { EventsComponent } from './events/events.component';
import { EventAddComponent } from './add/add.component';

const routes: Routes = [
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  { path: 'events', component: EventsComponent },
  { path: 'add/:type', component: EventAddComponent },
  { path: 'article/:id', component: ArticleComponent },
  { path: 'transaction/:id', component: TransactionComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}