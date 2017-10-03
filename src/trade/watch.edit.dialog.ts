/**
 * Watch edit dialog component
 *
 * @date 09/25/17
 * @author Fang Jin <windmaomao@gmail.com>
 */

import { Component, Inject } from '@angular/core';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'watch-edit-dialog',
  templateUrl: 'watch.edit.dialog.html',
})
export class WatchEditDialogComponent {

  constructor(
    public dialogRef: MdDialogRef<WatchEditDialogComponent>,
    @Inject(MD_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onEnter() {
    this.dialogRef.close(this.data.item);
  }

}
