/**
 * Cv service
 *
 * @date 08/31/17
 * @author Fang Jin <windmaomao@gmail.com>
 */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';
import { FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class CvService {
  private api: String = '/QPLOT/cv';
  constructor(private db: AngularFireDatabase) {}

  metas(): Observable<any> {
    return this.db.object(this.api + '/metas');
  }
  list(subject: String): FirebaseListObservable<any[]> {
    return this.db.list(this.api + '/' + subject);
  }
  get(subject: String, id: String): Observable<any> {
    return this.db.object(this.api + '/' + subject + '/' + id);
  }
  update(subject: String, id: any, data: any) {
    let items:FirebaseListObservable<any[]> = this.list(subject);
    return items.update(id, data);
  }

  entries(): Observable<any[]> {
    return this.list('entries');
  }
  getEntry(id: String): Observable<any> {
    return this.get('entries', id);
  }
  updateEntry(id: any, data: any) {
    return this.update('entries', id, data);
  }
  types(): Observable<any[]> {
    return this.list('types');
  }
}
