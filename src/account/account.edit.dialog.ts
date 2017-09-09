import { Component, Inject } from '@angular/core';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'account-edit-dialog',
  templateUrl: 'account.edit.dialog.html',
})
export class AccountEditDialogComponent {

  constructor(
    public dialogRef: MdDialogRef<AccountEditDialogComponent>,
    @Inject(MD_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
