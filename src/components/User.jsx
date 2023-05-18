import React, {useEffect, useState} from "react";

export const User = () => {
  const [user, setUser] = useState([])

  const idNro = '5';
  const host = 'https://jsonplaceholder.typicode.com/users/';

  const getUser = async () => {
    const url = host + idNro;
    const requestOption = {method: 'GET'};

    const response = await fetch(url, requestOption);
    const data = await response.json();
    setUser(data);
  }

  useEffect(() => {
    getUser();
  }, [])

  return (
    <div>
      <h1>Detalles de un usuario</h1>
      <h2>{user.name}</h2>
      <p>id: {user.id} - username: {user.username} - email: {user.email}</p>
      <hr/>
    </div>
  )
}