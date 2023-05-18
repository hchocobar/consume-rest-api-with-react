import React, {useEffect, useState} from "react";

export const User = () => {
  const [user, setUser] = useState([])

  const idNro = '5';
  const host = 'https://jsonplaceholder.typicode.com/users/';

  const url = host + idNro;
  const requestOption = {method: 'GET'};

  const getUser = async () => {
    const response = await fetch(url);
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
      <p>{user.username} - {user.email}</p>
      {console.log(user)}
    </div>
  )
}