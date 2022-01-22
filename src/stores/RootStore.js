import PersonStore from './PersonStore';
import TodoStore from './TodoStore';
import UserStore from './UserStore';

export default class RootStore {
  constructor() {
    this.todoStore = new TodoStore(this);
    this.personStore = new PersonStore(this);
    this.userStore = new UserStore(this);
  }
}
