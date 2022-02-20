import { Component, OnInit } from '@angular/core';

import { AppService } from "../services/app.service";

@Component({
  selector: 'apps-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})

export class HomeComponent implements OnInit {

  constructor(public appService: AppService) { }

  ngOnInit(): void {
  }

}
