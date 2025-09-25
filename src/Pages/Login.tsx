import { useState } from "react";
import useLogin from "../hooks/useLogin";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const onLoginPress = async () => {
    if (username != "" && password != "") {
      const result = await useLogin(username, password);
      alert(result);
      navigate("/dashboard");
    } else {
      alert("Fill the given input");
    }
  };

  return (
    <div className="w-screen h-screen bg-blue-200 flex items-center justify-end pr-32">
      <div className="flex flex-col items-end w-80">
        <h1 className="text-3xl font-bold text-black mb-6">Welcome back!</h1>

        <input
          type="text"
          placeholder="Username"
          onChange={(e: any) => setUsername(e.target.value)}
          className="w-full p-3 mb-4 rounded-lg border border-black focus:outline-none"
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e: any) => setPassword(e.target.value)}
          className="w-full p-3 mb-6 rounded-lg border border-black focus:outline-none"
        />

        <button
          className="w-full py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
          onClick={() => onLoginPress()}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
