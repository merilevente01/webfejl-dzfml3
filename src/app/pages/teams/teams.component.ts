import { Component, OnInit } from '@angular/core';
import { TeamsObject } from 'src/app/shared/constants/constants';



@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit{

  teamsObject: Array<any> = TeamsObject;
  chosenImage: any;


  constructor() {}
  ngOnInit(): void {

  }

  reload(){

  }


  loadImage(imageObject: any) {
    this.chosenImage = imageObject;
  }





}
