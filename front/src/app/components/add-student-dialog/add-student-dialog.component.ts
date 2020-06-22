import { Component, OnInit } from '@angular/core';
import { DataAccessService } from '../../services/data-access.service'
import { MatDialogRef } from '@angular/material/dialog'

@Component({
  selector: 'app-add-student-dialog',
  templateUrl: './add-student-dialog.component.html',
  styleUrls: ['./add-student-dialog.component.css']
})
export class AddStudentDialogComponent implements OnInit {
  nameValue: string;
  surnameValue: string;
  gpaValue: number;
  constructor(private dataAccessService: DataAccessService,
    private dialogRef: MatDialogRef<AddStudentDialogComponent>) { }

  ngOnInit(): void {
  }

  onclick(): void {
    this.dataAccessService.addStudent({
      'name': this.nameValue,
      'surname': this.surnameValue,
      'gpa': this.gpaValue,
    });
    this.dialogRef.close();
  }
}
