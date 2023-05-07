import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  @Input() teamsObjectInput: Array<any> = [];
  @Output() imageObjectEmitter: EventEmitter<any> = new EventEmitter();
  chosenImage: any;

  ngOnInit():void{
    this.chosenImage = this.teamsObjectInput[0];
    this.reload();
  }


  constructor() {
  }

  reload(){
    this.imageObjectEmitter.emit(this.chosenImage);
  }

}
