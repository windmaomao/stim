/**
 * Diagram service
 *
 * @date 08/31/17
 * @author Fang Jin <windmaomao@gmail.com>
 */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class DiagramService {
  constructor(private db: AngularFireDatabase) {}

  list(): Observable<any[]> {
    return this.db.list('/STIM/items');
  }
  get(id: String): Observable<any> {
    return this.db.object('/STIM/items/' + id);
  }
}
