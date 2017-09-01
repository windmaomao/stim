/**
 * Data service
 *
 * @date 08/31/17
 * @author Fang Jin <windmaomao@gmail.com>
 */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';
import { DiagramService } from './diagram.service';

@Injectable()
export class DataService {
  constructor(public diagram: DiagramService) {}
}
