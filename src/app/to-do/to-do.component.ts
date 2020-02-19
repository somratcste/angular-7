import { Component, OnInit } from '@angular/core';

class TodoItem {
  isDone: boolean;
  name: string;
}

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css'],
  styles: [`
        .is-done {
          text-decoration: line-through;
        }
    `]
})

export class ToDoComponent implements OnInit {

  constructor() {
    this.name = '';
    this.items = [];
  }

  public name: string = '';
  public items: Array<TodoItem> = [];
  public itemObj: any;

  public add() {
    this.itemObj = {
      name: this.name,
      isDone: false
    };

    this.items.push(this.itemObj);
    this.name = '';
    event.preventDefault();
  }

  public toggleItem(item: TodoItem) {
    item.isDone = !item.isDone;
  }

  public getRemainingCount() {
    return this.items.filter(item => !item.isDone).length;
  }

  public getTotalCount() {
    return this.items.length;
  }

  ngOnInit() {
  }

}
