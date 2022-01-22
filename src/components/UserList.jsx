import React, { useEffect } from 'react';

const UserList = ({ getUsers, users }) => {
  useEffect(() => {
    getUsers();
  }, [getUsers]);
  return (
    <div>
      <ul>
        {users?.map((user, index) => (
          <li key={index}>{user.login}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
