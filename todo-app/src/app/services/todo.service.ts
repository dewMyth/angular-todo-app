import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  getTodos(){
    return [
      { 
        id : 1, 
        title : "First To Do",
        isCompleted : false,
      },
      { 
        id : 2, 
        title : "Second To Do",
        isCompleted : true,
      },
      { 
        id : 3, 
        title : "Third To Do",
        isCompleted : false,
      }
    ]
  }
}
