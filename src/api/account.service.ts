/**
 * Account service
 *
 * @date 09/01/17
 * @author Fang Jin <windmaomao@gmail.com>
 */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class AccountService {
  private api: String = '/QPLOT/account';
  constructor(private db: AngularFireDatabase) {}

  metas(): Observable<any> {
    return this.db.object(this.api + '/metas');
  }
  list(subject: String): Observable<any[]> {
    return this.db.list(this.api + '/' + subject);
  }
  get(subject: String, id: String): Observable<any> {
    return this.db.object(this.api + '/' + subject + '/' + id);
  }

  accounts(): Observable<any[]> {
    return this.list('accounts');
  }
  getAccount(id: String): Observable<any> {
    return this.get('accounts', id);
  }
  statements(year: String, month?: String): Observable<any[]> {
    let id = 'statements' + '/' + year;
    if (!month) {
      return this.list(id);
    }
    id = id + '/' + month;
    return this.list(id);
  }
}
