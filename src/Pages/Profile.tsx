import { useEffect, useState } from "react";
import api from "../api/axios";

function Profile() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [domains, setDomains] = useState<string[]>([]);
  const [role, setRole] = useState("");

  const user = {
    name: name,
    email: email,
    phone: phone,
    role: role,
    domains: domains,
  };

  type profilePayload = {
    data: {
      email: string;
      phone: string;
    };
  };

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const profileRes = await api.get<profilePayload>(
          "/user/profile/getPhoneEmail",
          {
            withCredentials: true,
          }
        );
        setEmail(profileRes.data.data.email);
        setPhone(profileRes.data.data.phone);

        const roleRes = await api.get("/user/role/getRole", {
          withCredentials: true,
        });

        setRole(roleRes.data.role);

        if (roleRes.data.role === "lead") {
          const domainsRes = await api.get("/admin/domain/getDomain", {
            withCredentials: true,
          });

          const d = domainsRes.data.domain_name;
          setDomains(Array.isArray(d) ? d : [d]);
        }
      } catch (err) {
        console.error(err);
      }
    };

    fetchProfile();
  }, []);

  return (
    <div className="p-6">
      <div className="flex items-start justify-between pb-6 border-b border-gray-200">
        <div>
          <h1 className="text-3xl font-semibold text-gray-900">{user.name}</h1>

          <div className="mt-4 space-y-1 text-gray-700">
            <p>
              <span className="font-medium">Email:</span> {user.email}
            </p>
            <p>
              <span className="font-medium">Phone:</span> {user.phone}
            </p>
            <p>
              <span className="font-medium">Role:</span> {user.role}
            </p>

            {user.role === "lead" ? (
              <p>
                <span className="font-medium">Domain:</span> {user.domains[0]}
              </p>
            ) : (
              <div>
                <span className="font-medium">Domains:</span>
                <ul className="list-disc ml-5 mt-1">
                  {user.domains.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
        {/* Placeholder rn, need to have a way to store the image and show it */}
        <div className="w-32 h-40 bg-gray-200 flex items-center justify-center text-gray-500 text-sm">
          img
        </div>
      </div>
    </div>
  );
}

export default Profile;
