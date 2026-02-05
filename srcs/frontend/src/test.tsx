import { useState } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:3000");

export default function CoursWs() {
  const [username, setUsername] = useState("");
  const [group, setGroup] = useState("JavaScript");

  const handleSubmit = (e) => {
    e.preventDefault();

    socket.emit("join", { username, group });

    socket.on("message", (msg) => {
      console.log("Message reçu :", msg);
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          className="form-control"
          id="username"
          placeholder="Enter username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="group">Groupes</label>
        <select
          className="form-control"
          id="group"
          value={group}
          onChange={(e) => setGroup(e.target.value)}
        >
          <option value="JavaScript">JavaScript</option>
          <option value="Python">Python</option>
          <option value="PHP">PHP</option>
          <option value="C#">C#</option>
          <option value="Ruby">Ruby</option>
          <option value="Java">Java</option>
        </select>
      </div>

      <button className="btn btn-primary" type="submit">
        Joindre le groupe
      </button>
    </form>
  );
}
