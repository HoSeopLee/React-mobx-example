import axios from 'axios';
import { inject, observer } from 'mobx-react';
import { useCallback } from 'react';
import UserList from '../components/UserList';

const UserListContainer = ({ userStore }) => {
  //컨터에너에서 구동하는 방법
  // const getUsers = useCallback(async () => {
  //   try {
  //     userStore.pending();
  //     const response = await axios.get('https://api.github.com/users');
  //     userStore.success(response.data);
  //   } catch (error) {
  //     userStore.fail(error);
  //   }
  // }, [userStore]);

  const users = userStore.state.users;
  const getUsers = useCallback(() => {
    // userStore.getUsers(); //스토어 쪽에서 작성하는게 코드가 조금더 깔끔해짐
    userStore.getUsersFlow(); // mobx에서 제공하는 제너레이터 함수 사용해보기
  }, [userStore]);
  return <UserList getUsers={getUsers} users={users} />;
};

export default inject('userStore')(observer(UserListContainer));
