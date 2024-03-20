import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-todo-input-additens',
  templateUrl: './todo-input-additens.component.html',
  styleUrls: ['./todo-input-additens.component.scss']
})
export class TodoInputAdditensComponent implements OnInit {

  @Output() public emmitItemTaskList = new EventEmitter();

  public addItemTaskList: string = "";
  constructor() { }

  ngOnInit(): void {
  }

  public submitItemTaskList(){

    this.addItemTaskList = this.addItemTaskList.trim();
    if(this.addItemTaskList){
      this.emmitItemTaskList.emit(this.addItemTaskList);
      this.addItemTaskList = "";
    }
  }

}
