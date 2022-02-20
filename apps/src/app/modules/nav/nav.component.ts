import { Component, OnInit } from '@angular/core';

import { AppService } from "../../services/app.service";

@Component({
  selector: 'apps-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.sass']
})

export class NavComponent implements OnInit {

  constructor(public appService: AppService) { }

  ngOnInit(): void {
  }

}
