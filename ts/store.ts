import {BehaviorSubject} from "rxjs/BehaviorSubject";

interface Store {
    todos: Todo[]
}

const store = new BehaviorSubject<Store>({
    todos: []
});


export {store, Store}