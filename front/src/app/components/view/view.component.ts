import { Component, OnInit } from '@angular/core';
import { Student } from '../../models/Students';
import { DataAccessService } from '../../services/data-access.service'

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  students: Student[];
  constructor(private dataAccessService: DataAccessService) { }
  public ids = [];
  ngOnInit(): void {
    this.dataAccessService.refreshNeeds.subscribe(() => {
      this.getAllStudent();
    });
    this.getAllStudent();
  }
  private getAllStudent() {
    this.dataAccessService.getStudents().subscribe(
      students => {
          this.students = students;
      }
    );
  }
}
