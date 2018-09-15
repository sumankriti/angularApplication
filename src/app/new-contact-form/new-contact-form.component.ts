import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-new-contact-form',
  templateUrl: './new-contact-form.component.html',
  styleUrls: ['./new-contact-form.component.css']
})
export class NewContactFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  form=new FormGroup({
    topics:new FormArray([

    ])
  })
  addTopic(topic:HTMLInputElement)
  {
    (this.form.get('topics') as FormArray).push(new FormControl(topic.value));
    topic.value='';
  }
}
