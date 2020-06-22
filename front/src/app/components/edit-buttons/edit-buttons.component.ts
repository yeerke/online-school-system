import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog'
import { AddStudentDialogComponent } from '../add-student-dialog/add-student-dialog.component';
import { DataAccessService } from '../../services/data-access.service';

@Component({
  selector: 'app-edit-buttons',
  templateUrl: './edit-buttons.component.html',
  styleUrls: ['./edit-buttons.component.css']
})
export class EditButtonsComponent implements OnInit {
  @Input() ids: number[];
  @Output() clearEvent = new EventEmitter();
  constructor(private dialog: MatDialog,
    private dataAccessService: DataAccessService) { }

  ngOnInit(): void {
  }
  addClick(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    this.dialog.open(AddStudentDialogComponent)
    this.clearSelectedHistory();
  }
  
  deleteClick(): void {
    this.dataAccessService.deleteStudents(this.ids);
    this.clearSelectedHistory();
  }

  private clearSelectedHistory(): void {
    this.ids = [];
    this.clearEvent.emit([]);
  }
}
