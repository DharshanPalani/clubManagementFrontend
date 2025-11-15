import { useEffect, useState } from "react";
interface SidebarProps {
  role: string;
  onTabSelect: (tab: string) => void;
}

function Sidebar({ role, onTabSelect }: SidebarProps) {
  const [roleBasedText, setRoleBasedText] = useState("");

  useEffect(() => {
    if (role === "member") setRoleBasedText("Domains");
    else if (role === "lead") setRoleBasedText("Your domain");
  }, [role]);

  return (
    <div className="w-64 bg-blue-800 text-white flex flex-col p-6">
      <h1 className="text-2xl font-bold mb-8">GTECH</h1>
      <div className="flex flex-col space-y-3">
        {["Home", "Profile", roleBasedText, "Logout"].map((tab) => (
          <button
            key={tab}
            onClick={() => onTabSelect(tab)}
            className="text-left px-4 py-2 rounded hover:bg-blue-700 transition-colors"
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
