import React, {useEffect, useState} from "react";

export const Users = () => {
  const [user, setUser] = useState([]);
  const url = 'https://jsonplaceholder.typicode.com/users';
  const requestOption = { method: 'GET'}

  const getUser = async () => {
    const response = await fetch(url, requestOption);
    const data = await response.json();
    setUser(data);
  }

  useEffect(()=>{
    getUser();
  }, [])

    return (
        <div>
          <h1>Lista de Usuarios</h1>
          <ol>
            {user.map( (item, id = item.id) => {
                  return (<li key={id}> {item.name} --- que vive en ---- {item.address.city}</li>)
                }
              )
            }
          </ol>
        </div>
    )
}