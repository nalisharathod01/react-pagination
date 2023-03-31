import React, {useEffect, useState} from 'react'

function Users() {
const [users, setUsers] = useState([]);

 const fetchUsers = async() => {
   const response = await fetch(`https://dummyjson.com/users`);
   const data = await response.json()
   console.log(data);
   
   if(data && data.users) {
    setUsers(data.users);
   }
 }

 useEffect(() => {
    fetchUsers();
 }, []);

  return (
    <div>
      {users.length > 0 && <div className="products">
        {users.map((prod) => {
          return <span className="products__single" key={prod.id}>
            <h2>{prod.firstName}</h2>
            <span>
              {prod.title}
            </span>
          </span>
        })}
      </div>}
    </div>
  ) 
}

export default Users