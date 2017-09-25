/**
 * Trade service
 *
 * @date 09/21/17
 * @author Fang Jin <windmaomao@gmail.com>
 */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';
import { FirebaseListObservable } from 'angularfire2/database';

import { environment } from '../environments/environment';

@Injectable()
export class TradeService {
  private api = 'stock';
  constructor(private db: AngularFireDatabase) {}

  entry(): string {
    return '/' + environment.api.entry + '/' + this.api;
  }

  list(subject: String): FirebaseListObservable<any[]> {
    return this.db.list(this.entry() + '/' + subject);
  }

  update(subject: String, id: any, data: any) {
    let items:FirebaseListObservable<any[]> = this.list(subject);
    return items.update(id, data);
  }

  trades(): Observable<any[]> {
    return this.list('trades');
  }
  watches(): Observable<any[]> {
    return this.list('watches');
  }
  updateWatch(id: any, data: any) {
    return this.update('watches', id, data);
  }
}
