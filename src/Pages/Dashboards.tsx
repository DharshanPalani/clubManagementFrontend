import { useEffect, useState } from "react";
import api from "../api/axios";
import Sidebar from "../components/Sidebar";
import Profile from "./Profile";

function Dashboards() {
  const [username, setUsername] = useState<string>("");
  const [role, setRole] = useState<string>("");
  const [selectedTab, setSelectedTab] = useState<string>("Profile");

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

  const renderTabContent = () => {
    switch (selectedTab) {
      case "Profile":
        return <Profile />;
      case "Domains":
        return <div>Domains Content for Members</div>;
      case "Your domain":
        return <div>Your Domain Content for Leads</div>;
      case "Logout":
        return <div>Logging out...</div>;
      default:
        return <div>Select a tab</div>;
    }
  };

  return (
    <div className="flex h-screen">
      <Sidebar role={role} onTabSelect={(tab) => setSelectedTab(tab)} />
      <main className="flex-1 bg-blue-200 p-8 overflow-auto">
        {renderTabContent()}
      </main>
    </div>
  );
}

export default Dashboards;
