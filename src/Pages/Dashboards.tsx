import { useEffect, useState } from "react";
import api from "../api/axios";
import Sidebar from "../components/Sidebar";

function Dashboards() {
  const [username, setUsername] = useState<string>("");
  const [role, setRole] = useState<string>("");

  useEffect(() => {
    api
      .get<any>("/auth/me", { withCredentials: true })
      .then((res) => setUsername(res.data.username))
      .catch((error) => {
        console.error(error);
        alert("Failed to fetch user info");
      });
  }, []);

  useEffect(() => {
    api
      .get<any>("/user/role/getRole", { withCredentials: true })
      .then((res) => setRole(res.data.role))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="flex h-screen">
      <Sidebar role={role} />

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
