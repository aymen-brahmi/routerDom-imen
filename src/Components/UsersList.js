import React from 'react';
import {list} from './userData';
import UserCard from './UserCard';
import {Container,Row} from 'reactstrap';
function UsersList() {
  return (
    <div>
      <Container>
        <Row>
      {list.map((user,i)=> <UserCard user={user} /> )}
        </Row>
      </Container> 
    </div>
  )
}

export default UsersList