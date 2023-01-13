import React, { useState, createContext } from "react";
import { useNavigate } from "react-router-dom";
import { v4 } from "uuid";
export const ShareContext = createContext()
function Users() {
  const navigate = useNavigate();
  const [listUser, setListUser] = useState([
    {
      id: 1,
      title: "Leanne Graham",
      userName: "Bret",
      email: "Sincere@april.biz",
      phone: 1234567,
    },
    {
      id: 2,
      title: "Ervin Howell",
      userName: "Antonette",
      email: "Shanna@melissa.tv",
      phone: 1234567,
    },
    {
      id: 3,
      title: "Clementine Bauch",
      userName: "Samantha",
      email: "Nathan@yesenia.net",
      phone: 1234567,
    },
    {
      id: 4,
      title: "Patrical Lebsack",
      userName: "Karianne",
      email: "Julianne.OConner@kory.org",
      phone: 1234567,
    },
  ]);
  const elementListUser = listUser.map((user) => {
    return (
      <div key={user.id} className="user--1">
        <img src="http://goldenemperor.com/uploads/media/sites/4/2018/08/golden-bridge-3.jpg"></img>
        <p>{user.title}</p>
        <p>User Name: {user.userName}</p>
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>
        <button onClick={()=>navigate({
          pathname:"/userDetail",
          search: `?id=${user.id}`
        })}>Detail</button>
      </div>
    );
  });
  return (
    <div>
      <h2>Users</h2>
      <div className="user">{elementListUser}</div>
    </div>
  );
}

export default Users;
