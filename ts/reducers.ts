import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {Store} from "./store";
import {Action, ActionAddTodo, ActionRemoveTodo, ActionUpdateTodo} from "./action";

const u = require('updeep');

const addTodo = (todo: Todo) => (todos: Todo[]) => ([] as Todo[]).concat(todos, todo);
const removeTodo = (todo: Todo) => (todos: Todo[]) => todos.filter((it: Todo) => it.id != todo.id);
const updateTodo = (todo: Todo) => (todos: Todo[]) => todos.map((it: Todo) => {
    if (it.id == todo.id) {
        return u(todo, it);
    }
    return it;
});

const maybeAddTodo = (store: BehaviorSubject<Store>) => (action: Action) => {
    if (!(action instanceof ActionAddTodo)) {
        return
    }
    store.next(u({todos: addTodo(action.todo)}, store.value));
};
const maybeRemoveTodo = (store: BehaviorSubject<Store>) => (action: Action) => {
    if (!(action instanceof ActionRemoveTodo)) {
        return
    }
    store.next(u({todos: removeTodo(action.todo)}, store.value));
};
const maybeUpdateTodo = (store: BehaviorSubject<Store>) => (action: Action) => {
    if (!(action instanceof ActionUpdateTodo)) {
        return
    }
    store.next(u({todos: updateTodo(action.todo)}, store.value));
};

export {maybeAddTodo, maybeRemoveTodo, maybeUpdateTodo}