import { useEffect, useState } from "react";
import api from "../api/axios";

function Dashboards() {
  const [username, setUsername] = useState("");

  useEffect(() => {
    api
      .get<any>("/auth/me", { withCredentials: true })
      .then((res: any) => {
        setUsername(res.data.userID);
      })
      .catch((error: any) => {
        console.error(error);
        alert("Sybau");
      });
  }, []);

  return (
    <div>
      <h1>{username}</h1>
    </div>
  );
}

export default Dashboards;
