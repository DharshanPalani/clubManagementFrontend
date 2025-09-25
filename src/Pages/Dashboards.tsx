import { useEffect, useState } from "react";
import api from "../api/axios";

function Dashboards() {
  const [username, setUsername] = useState("");

  useEffect(() => {
    api
      .get<any>("/auth/me", { withCredentials: true })
      .then((res: any) => {
        setUsername(res.data.username);
      })
      .catch((error: any) => {
        console.error(error);
        alert("Sybau");
      });
  }, []);

  return (
    <div className="flex h-screen">
      <div className="w-64 bg-blue-800 text-white flex flex-col p-6">
        <h1 className="text-2xl font-bold mb-8">GTECH</h1>
        <div className="flex flex-col space-y-3">
          <a
            href=""
            className="px-4 py-2 rounded hover:bg-blue-700 transition-colors"
          >
            Home
          </a>
          <a
            href=""
            className="px-4 py-2 rounded hover:bg-blue-700 transition-colors"
          >
            Profile
          </a>
          <a
            href=""
            className="px-4 py-2 rounded hover:bg-blue-700 transition-colors"
          >
            Your Domain
          </a>
          <a
            href=""
            className="px-4 py-2 rounded hover:bg-blue-700 transition-colors"
          >
            Logout
          </a>
        </div>
      </div>

      <main className="flex-1 bg-blue-200 p-8">
        <h2 className="text-3xl font-semibold mb-4">Dashboard</h2>
        <p className="mb-6">
          Welcome, <span className="font-bold">{username}</span>!
        </p>
      </main>
    </div>
  );
}

export default Dashboards;
