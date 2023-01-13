import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

function UserDetail() {
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
  const [searchParam, setSearchParam] = useSearchParams();
  let userId = searchParam.get("id");
  console.log(userId);
  const elementUser = listUser.map((user) => {
    if (userId == user.id) {
      return (
        <div key={user.id} className="user--1">
          <img src="http://goldenemperor.com/uploads/media/sites/4/2018/08/golden-bridge-3.jpg"></img>
          <p>{user.title}</p>
          <p>User Name: {user.userName}</p>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
        </div>
      );
    }
  });
  return (
    <div>
      <h2>User Detail</h2>
      {elementUser}
    </div>
  );
}

export default UserDetail;
