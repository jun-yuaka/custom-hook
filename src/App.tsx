import "./styles.css";
import { UserCard } from "./compornents/UserCard";

const user = {
  id: 1,
  name: "jan",
  email: "test@aa.com",
  address: "ADDRES"
};

export default function App() {
  return (
    <div className="App">
      <UserCard user={user} />
    </div>
  );
}
