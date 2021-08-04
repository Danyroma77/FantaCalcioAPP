import { Component, isDevMode, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { ModifierService } from 'src/app/services/modifier.service';
import { ModifierAddComponent } from '../panel/modifier-add/modifier-add.component';
import { ModifierConfigComponent } from '../panel/modifier-config/modifier-config.component';
import { ModifierEditComponent } from '../panel/modifier-edit/modifier-edit.component';

@Component({
  selector: 'mdg-bonus-manager',
  templateUrl: './bonus-manager.component.html',
  styleUrls: ['./bonus-manager.component.css']
})
export class BonusManagerComponent implements OnInit {
  displayedColumns: string[] = ['index', 'description', 'roleplayers', 'function'];
  modifierList$: any;
  messageDelete: string;
  numConfig: Observable<any>;
  constructor(
    private modifierService: ModifierService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.listFromService();
  }

  listFromService() {
    this.modifierService.getListModifier()
      .pipe()
      .subscribe(
        (data) => { this.modifierList$ = data },
        (error) => { console.log('ERRORE => ' + error.message.error) }
      );

  }

  addBonusMalus() {
    const dialogRef = this.dialog.open(ModifierAddComponent, { width: '750px' });

    dialogRef.afterClosed().subscribe(result => {
      this.listFromService();
    });
  }

  manageConfig(element: any) {

    const dialogRef = this.dialog.open(ModifierConfigComponent, {
      data: { id: element.id },
      width: '650px'
    });
    dialogRef.afterClosed().subscribe(result => { this.listFromService(); });
  }

  deleteModifier(element) {

    this.modifierService.deleteModifier(element.id).pipe()
      .subscribe(
        (data) => {
          this.listFromService();
        },
        (error) => {
          if (isDevMode) console.log(error);
          this.snackBar.open(error.message, "X");
        }
      );
  }

  updateModifier(element) {
    const dialogRef = this.dialog.open(ModifierEditComponent, {
      data: { id: element.id }
    });
    dialogRef.afterClosed().subscribe(result => { this.listFromService() });

  }

}
