import React from 'react'
import {Card,CardHeader,CardBody,CardTitle,Button,CardText} from 'reactstrap';
import {Link} from 'react-router-dom';
function UserCard({user} ) {
  return (
    <div>
      <Card>
    <CardHeader>
      {user.name}
    </CardHeader>
    <CardBody>
      <CardTitle tag="h5">
      {user.username}
      </CardTitle>
      <CardText>
      {user.email}
      </CardText>
      <Link to={`/profile/${user.id}`}>
       <Button>Go To My Profile</Button>
      </Link>
    </CardBody>
    
  </Card>
    </div>
  )
}

export default UserCard