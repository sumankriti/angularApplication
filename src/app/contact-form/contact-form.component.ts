import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  contactMethods=[{name:'phone',id:1},{name:'email',id:2}];
  log(x)
  {
console.log(x);
  }
  onSubmit(f)
  {
    console.log(f.value);
    console.log(f.value.comments);
    console.log(f.value.isSubscribed);
  }
}
