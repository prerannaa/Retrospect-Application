import { Component, OnInit } from '@angular/core';
import {ButtonModule} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';

@Component({
  selector: 'app-retrospectentry',
  templateUrl: './retrospectentry.component.html',
  styleUrls: ['./retrospectentry.component.css']
})
export class RetrospectentryComponent implements OnInit {


  showWentWellDialog: boolean = false;
  showDidntWentWellDialog: boolean = false;
  showActionItemDialog: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  showWentWellDialogs(){
    this.showWentWellDialog = true;
  }

  hideWentWellDialogs(){
    this.showWentWellDialog = false;
  }

  showDidntWentWellDialogs(){
    this.showDidntWentWellDialog = true;
  }

  hideDidntWentWellDialogs(){
    this.showDidntWentWellDialog = false;
  }

  showActionItemDialogs(){
    this.showActionItemDialog = true;
  }

  hideActionItemDialogs(){
    this.showActionItemDialog =false;
  }

}
