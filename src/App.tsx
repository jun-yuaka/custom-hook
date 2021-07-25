import "./styles.css";
import { UserCard } from "./compornents/UserCard";
import axios from "axios";
import { User } from "./types/api/user";
import { useState } from "react";
import { UserProfile } from "./types/UserProfile";

const user = {
  id: 1,
  name: "jan",
  email: "test@aa.com",
  address: "ADDRES"
};

export default function App() {
  const [userProfiles, setUserProfiles] = useState<Array<UserProfile>>([]);

  const onClickFetchUser = () => {
    axios
      .get<Array<User>>("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        const data = res.data.map((user) => ({
          id: user.id,
          name: `${user.name}(${user.username})`,
          email: user.email,
          address: `${user.address.city}${user.address.suite}${user.address.city}`
        }));
        setUserProfiles(data);
      });
  };

  return (
    <div className="App">
      <button onClick={onClickFetchUser}>データ取得</button>
      {userProfiles.map((user) => (
        <UserCard user={user} />
      ))}
    </div>
  );
}
