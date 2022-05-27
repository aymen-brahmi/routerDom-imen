import React from 'react';
import {list} from './userData';
import {useParams} from 'react-router-dom';
function Profile() {
  const { idUser } = useParams();
  return (
    <div>
      <h1>{list.find((user) => user.id === Number(idUser)).name}</h1>
      <h2>{list.find((user) => user.id === Number(idUser)).address.suite}</h2>
    </div>
  )
}

export default Profile