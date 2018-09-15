import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  constructor() { }
  courses={
    title:'courses title will be herenmsndsjdufmsncmxncdfuoncbxcbjxjcsdsncmxbncnjdwhdsmnxmxncnjsnjfdmcnxmcnmxnmcxfudf',
    rating:4.278,
    students:309878,
    price:190.95,
    releaseDate:new Date(2016,3,1)
  }
  course;

  ngOnInit() {
  }
  onAdd()
  {
    this.course.push({name:'course5'});
  }
  onRemove(course)
  {
    let index=this.course.indexOf(course);
    this.course.splice(index,1);
  
  }
  onUpdate(course)
  {
    course.name="updated";
  }
  loadCourses()
  {
this.course=[{name:'course1'},{name:'course2'},{name:'course3'},{name:'course4'}];
  }
  trackCourse()
  {
    
  }
}
