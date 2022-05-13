import { Component } from '@angular/core';
import { Model, TodoItem } from 'src/Models/Model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todolistBootStrap';
  model= new Model();
  getName()
  {
    return this.model.user;
  }

  getTodoItems()
  {
return this.model.items;
  }

  additem(newtask: string)
  {
    this.model.items.push(new TodoItem(newtask,false));
  }

  deletetask(i:number)
  {
this.model.items.splice(i,1);

  }
}
