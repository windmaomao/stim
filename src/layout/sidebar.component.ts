/**
 * Sidebar component
 *
 * @date 08/16/17
 * @author Fang Jin <windmaomao@gmail.com>
 */

import { Component } from '@angular/core';
import { AuthService } from '../firebase/auth.service';

@Component({
  selector: 'st-sidebar',
  templateUrl: 'sidebar.component.html',
})
export class StSidebarComponent {
  constructor(public auth: AuthService) {}
}
