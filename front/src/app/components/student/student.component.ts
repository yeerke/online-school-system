import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Student } from '../../models/Students';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  @Input() student: Student;
  isClicked: boolean = false;
  @Output() addEvent = new EventEmitter();
  @Output() removeEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  onclick(): void{
    this.isClicked = !this.isClicked;
    if (this.isClicked) {
      this.addEvent.emit(this.student.id);
    } else {
      this.removeEvent.emit(this.student.id);
    }
  }
}