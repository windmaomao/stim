/**
 * Account service
 *
 * @date 09/01/17
 * @author Fang Jin <windmaomao@gmail.com>
 */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';
import { FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class AccountService {
  private api: String = '/QPLOT/account';
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
  updateItem(subject: String, id: any, data: any) {
    let items:FirebaseListObservable<any[]> = this.list(subject);
    return items.update(id, data);
  }

  accounts(): Observable<any[]> {
    return this.list('accounts');
  }
  getAccount(id: String): Observable<any> {
    return this.get('accounts', id);
  }
  statements(id: String): Observable<any[]> {
    return this.list('statements/' + id);
  }
  updateStatement(id: any, data: any) {
    return this.updateItem('statements', id, data);
  }
}
