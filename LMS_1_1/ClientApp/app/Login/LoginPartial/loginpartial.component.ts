import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'loginpartial',
  templateUrl: './loginpartial.component.html',
  styleUrls: ['./loginpartial.component.css']
})
export class LoginpartialComponent implements OnInit {

  IsSignedIn: boolean
  isTeacher: boolean
  FirstName: string;
  LastName: string;
  constructor() { }

  ngOnInit() {
  }

  public logout()
  {
    
  }
}
