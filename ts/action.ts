import {Subject as PublishSubject} from 'rxjs/Subject';

class Action {
}

class ActionAddTodo extends Action {
    constructor(public todo: Todo) {
        super()
    }
}

class ActionRemoveTodo extends Action {
    constructor(public todo: Todo) {
        super()
    }
}

class ActionUpdateTodo extends Action {
    constructor(public todo: Todo) {
        super()
    }
}

const action = new PublishSubject<Action>();

export {action, Action, ActionAddTodo, ActionRemoveTodo, ActionUpdateTodo}