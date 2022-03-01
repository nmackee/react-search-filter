import { useState } from "react";
import "./app.css";
import { Users } from "./users";

export default function App() {
  const [query, setQuery] = useState("");
  console.log(
    Users.filter((user) => user.first_name.toLowerCase().includes("fe"))
  );
  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search..."
        className="search"
        onChange={(e) => setQuery(e.target.value)}
      />
      {/* basic search
      <ul className="list">
        {Users.filter((user) =>
          user.first_name.toLowerCase().includes(query)
        ).map((user) => (
          <li key={user.id} className="listItem">
            {user.first_name}
          </li>
        ))}
      </ul> */}
    </div>
  );
}
