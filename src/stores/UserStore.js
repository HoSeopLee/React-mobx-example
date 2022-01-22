import axios from 'axios';
import { action, observable, makeObservable, runInAction, flow } from 'mobx';

export default class UserStore {
  @observable
  state = {
    user: [],
    loading: false,
    error: null,
  };

  constructor() {
    makeObservable(this);
  }
  @action
  pending() {
    this.state.loading = true;
    this.state.error = null;
  }
  @action
  success(users) {
    this.state.users = users;
    this.state.loading = false;
    this.state.error = null;
  }
  @action
  fail() {
    this.state.loading = false;
    this.state.error = null;
  }

  async getUsers() {
    try {
      runInAction(() => {
        this.state.loading = true;
        this.state.error = null;
      });
      const response = await axios.get('https://api.github.com/users');
      runInAction(() => {
        this.state.users = response.data;
        this.state.loading = false;
        this.state.error = null;
      });
    } catch (error) {
      runInAction(() => {
        this.state.loading = false;
        this.state.error = null;
      });
    }
  }
  //Mobx 에서 제공하는 방식인 제너레이터 활용
  //러닝액션을 사용안해도 되므로 조금더 편하게 작성할 수 있는 장점이 있음.
  //처리 방식이 재밌음.
  @flow
  *getUsersFlow() {
    try {
      this.state.loading = true;
      this.state.error = null;
      const response = yield axios.get('https://api.github.com/users');
      this.state.users = response.data;
      this.state.loading = false;
      this.state.error = null;
    } catch (error) {
      this.state.loading = false;
      this.state.error = null;
    }
  }
}
