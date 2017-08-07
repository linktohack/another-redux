import "rxjs/add/operator/map";
import "rxjs/add/operator/distinctUntilChanged";

import {store, Store} from './store';
import {action, ActionAddTodo, ActionRemoveTodo, ActionUpdateTodo} from "./action";
import {maybeAddTodo, maybeRemoveTodo, maybeUpdateTodo} from './reducers';

// Subscriptions
store.subscribe(it => {
    console.log('pretend to render todo list with store', it);
});

store.map((it: Store) => it.todos.length)
    .distinctUntilChanged()
    .subscribe((it: number) => {
        console.log('pretend to render the todo list\'s length', it);
    });

// Reducers
action.subscribe(maybeAddTodo(store));
action.subscribe(maybeRemoveTodo(store));
action.subscribe(maybeUpdateTodo(store));

// Action creators
action.next(new ActionAddTodo({
    id: 1,
    text: 'Hello',
    completed: false
}));
action.next(new ActionAddTodo({
    id: 2,
    text: 'There',
    completed: false
}));
action.next(new ActionAddTodo({
    id: 3,
    text: 'From',
    completed: false
}));
action.next(new ActionRemoveTodo({
    id: 2
}));
action.next(new ActionUpdateTodo({
    id: 1,
    text: "Cool"
}));
action.next(new ActionUpdateTodo({
    id: 3,
    completed: true
}));