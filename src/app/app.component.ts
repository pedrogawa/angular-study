import { Component } from "@angular/core";

interface Todo {
  id: number;
  title: string;
  checked: boolean;
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "todoApp";
  todoInputValue: string = "";
  todos: Todo[] = [];
  todosId: number = 0;

  showValue() {
    if (!this.todoInputValue) {
      alert("Please enter a value");
    } else {
      this.todos.push({
        id: this.todosId,
        title: this.todoInputValue,
        checked: false,
      });
      this.todoInputValue = "";
      this.todosId++;
    }
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }
}
