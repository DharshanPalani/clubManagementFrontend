import { useEffect, useState } from "react";
import api from "../api/axios";

type leadData = {
  domain_name: string;
};

function LeadDashboard() {
  const [leadDomain, setLeadDomain] = useState("");

  useEffect(() => {
    api
      .get<leadData>("/admin/domain/getDomain")
      .then((res) => setLeadDomain(res.data.domain_name));
  }, []);

  return <div>Your domain name is {leadDomain}</div>;
}

export default LeadDashboard;
