import { useEffect, useState } from "react";
import api from "../api/axios";
import LeadProfile from "./LeadProfile";
import MemberDashboard from "./Dashboards/MemberDashboard";

type UserRole = {
  role: string;
};

function Profile() {
  const [role, setRole] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const roleRes = await api.get<UserRole>("/user/role/getRole");
        setRole(roleRes.data.role);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);
  return role === "lead" ? <LeadProfile /> : <MemberDashboard />;
}

export default Profile;
