import React, { useState } from "react";
import "./app.css";
import { Users } from "./users";
import { Table } from "./Table";

export default function App() {
  const [query, setQuery] = useState("");

  const keys = ["first_name", "last_name", "email"];
  console.log(Users[0]["first_name"]);

  const search = (data) => {
    return data.filter((item) =>
      // item.first_name.toLowerCase().includes(query) ||
      // item.last_name.toLowerCase().includes(query) ||
      // item.email.toLowerCase().includes(query)

      keys.some((key) => item[key].toLowerCase().includes(query))
    );
  };
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

      <Table data={search(Users)} />
    </div>
  );
}
