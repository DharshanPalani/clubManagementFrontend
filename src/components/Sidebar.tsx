import { useEffect, useState } from "react";

interface SidebarProps {
  role: string;
}

function Sidebar({ role }: SidebarProps) {
  const [roleBasedText, setRoleBasedText] = useState("");

  useEffect(() => {
    if (role == "member") {
      setRoleBasedText("Domains");
    } else if (role === "lead") {
      setRoleBasedText("Your domain");
    }
  }, [role]);

  return (
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
          {roleBasedText}
        </a>
        <a
          href=""
          className="px-4 py-2 rounded hover:bg-blue-700 transition-colors"
        >
          Logout
        </a>
      </div>
    </div>
  );
}

export default Sidebar;
