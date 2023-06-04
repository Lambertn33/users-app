import { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [users, setUsers] = useState([]);
  const handleAddUser = (newUser) => {
    setUsers((prevState) => {
      return [...prevState, newUser];
    })
  }
  return (
    <div>
      <AddUser  onAddUser={handleAddUser}/>
      {
        users.length && <UsersList users={users} />
      }
    </div>
  );
}

export default App;
