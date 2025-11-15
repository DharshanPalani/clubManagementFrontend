function Profile() {
  // test dummy data, need to add the frontend logic to fetch and save in state
  const user = {
    name: "Joey",
    email: "joey.contact@gmail.com",
    phone: "6767676767",
    role: "lead",
    domains: ["Web developer"],
  };

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
