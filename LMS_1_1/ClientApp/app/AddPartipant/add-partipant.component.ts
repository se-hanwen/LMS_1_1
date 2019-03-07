import { Component, OnInit } from '@angular/core';

import { Partipant } from './partipant';
import { ActivatedRoute, Router } from '@angular/router';
import { PartipantService } from './partipant.service';

@Component({
  selector: 'add-partipant',
  templateUrl: './add-partipant.component.html',
  styleUrls: ['./add-partipant.component.css']
})
export class AddPartipantComponent implements OnInit {
  pageTitle: string = "";
  BlackList: Partipant[] =[];
  ChooseFrom: Partipant[] =[];
  Choosed:Partipant[] =[];
  courseId: string =""
  constructor(private route: ActivatedRoute,
    private router: Router,
    private  PartipantService: PartipantService
    ) { }

  ngOnInit() {
  }

}
