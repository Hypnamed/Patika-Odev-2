import React, { useEffect, useState } from 'react'

function Users() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() =>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((users) => {
      setUsers(users)
      setIsLoading(false)
    })
    .catch((e) => console.log(e))
  }, []);

  return (
    <div>
      <h1>Kullanıcılar</h1>

      {isLoading && <h1>2dk bekle amk</h1>}

      {
        users.map((user) => 
        <h2 key={user.id}>{user.name}</h2>
        )
      }
    </div>
  )
}

export default Users