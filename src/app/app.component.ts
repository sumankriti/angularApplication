import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularApplication';
  imageUrl="assets/pfd89er8_ganesha-unaplash-650_625x300_12_September_18.jpg";
  colSpan=2;
  isActive=false;
  email="kritisuman@hotmail.com";
  onEnter(e)
  {
    console.log(e.target.value);
  }
  onEmail()
  {
    console.log(this.email);
  }
}
