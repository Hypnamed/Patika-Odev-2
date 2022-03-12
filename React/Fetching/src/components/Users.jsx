import React, { useEffect } from 'react'

function Users() {
  useEffect(() =>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      console.log(res)
    })
  })

  return (
    <div>Users</div>
  )
}

export default Users