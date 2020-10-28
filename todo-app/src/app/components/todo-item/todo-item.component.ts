import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
 
  @Input() todo : Todo;

  constructor() { }

  ngOnInit() {
  
  }

  setClasses() {
    let classes = {
      todo : true,
      'is-complete' : this.todo.isCompleted
    }

    return classes; 
  }

  onToggle(todo){
    todo.isCompleted = !todo.isCompleted;
  }

  onDelete(todo){
    console.log("Deleted")
  }


}
