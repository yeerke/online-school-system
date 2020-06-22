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

  ngOnInit(): void {
    this.dataAccessService.refreshNeeds.subscribe(() => {
      this.getAllStudent();
      console.log(this.students);
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
