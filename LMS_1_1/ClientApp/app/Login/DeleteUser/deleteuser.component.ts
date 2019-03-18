import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { RegisterUser } from '../Register/registeruser';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-deleteuser',
  templateUrl: './deleteuser.component.html',
  styleUrls: ['./deleteuser.component.css']
})
export class DeleteuserComponent implements OnInit {

   user: RegisterUser;
   
  constructor(private route: ActivatedRoute,  private router: Router
    ,private cd: ChangeDetectorRef) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get("id");
  }

   public ConfirmedDelete()
   {

   }
}
