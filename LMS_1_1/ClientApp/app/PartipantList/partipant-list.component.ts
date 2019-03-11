import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPartipant } from '../AddPartipant/partipant';

import { PartipantService } from '../AddPartipant/partipant.service';

@Component({
  selector: 'app-partipant-list',
  templateUrl: './partipant-list.component.html',
  styleUrls: ['./partipant-list.component.css']
})
export class PartipantListComponent implements OnInit {

   users: IPartipant[];
   @Input()   courseid: string="";

  constructor(private route: ActivatedRoute, private  PartipantService: PartipantService) { }

  ngOnInit() {

    this.PartipantService.CourseId=this.courseid;
    this.PartipantService.GetStudentsOn().subscribe
    (
      user=>
      { 
        this.users= user; 
      }
    );
  }

}
