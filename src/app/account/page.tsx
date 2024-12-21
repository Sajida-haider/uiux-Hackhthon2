"use client"; 
import { useState } from "react";



// Define the type for loginData and registerData
interface LoginData {
  email: string;
  password: string;
  rememberMe: boolean;
}

interface RegisterData {
  email: string;
}

const Account: React.FC = () => {
  const [loginData, setLoginData] = useState<LoginData>({
    email: "",
    password: "",
    rememberMe: false,
  });

  const [registerData, setRegisterData] = useState<RegisterData>({
    email: "",
  });

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setLoginData({
      ...loginData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleRegisterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRegisterData({ ...registerData, [name]: value });
  };

  const handleLoginSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Login Submitted:", loginData);
  };

  const handleRegisterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Register Submitted:", registerData);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 text-center">
      <h1 className="text-3xl font-bold mb-6">My Account</h1>
      <div className="flex flex-col md:flex-row justify-between gap-8">
        <div className="w-full md:w-1/2 bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Log In</h2>
          <form onSubmit={handleLoginSubmit} className="flex flex-col gap-4">
            <div>
              <label htmlFor="login-email" className="block text-sm font-medium mb-1">
                Username or email address
              </label>
              <input
                type="email"
                id="login-email"
                name="email"
                value={loginData.email}
                onChange={handleLoginChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-100"
              />
            </div>
            <div>
              <label htmlFor="login-password" className="block text-sm font-medium mb-1">
                Password
              </label>
              <input
                type="password"
                id="login-password"
                name="password"
                value={loginData.password}
                onChange={handleLoginChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="rememberMe"
                name="rememberMe"
                checked={loginData.rememberMe}
                onChange={handleLoginChange}
                className="h-4 w-4"
              />
              <label htmlFor="rememberMe" className="text-sm">Remember me</label>
            </div>
            <button type="submit" className="bg-blue-200 text-black px-4 py-2 rounded-lg hover:bg-blue-100">
              Log In
            </button>
            <p className="text-sm">
              <a href="#" className="text-blue-500 hover:underline">Lost Your Password?</a>
            </p>
          </form>
        </div>

        {/* Registration Section */}
        <div className="w-full md:w-1/2 bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Register</h2>
          <form onSubmit={handleRegisterSubmit} className="flex flex-col gap-4">
            <div>
              <label htmlFor="register-email" className="block text-sm font-medium mb-1">Email address</label>
              <input
                type="email"
                id="register-email"
                name="email"
                value={registerData.email}
                onChange={handleRegisterChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button type="submit" className="bg-green-200 text-black px-4 py-2 rounded-lg hover:bg-green-100">
              Register
            </button>
            <p className="text-sm text-gray-500">
              A link to set a new password will be sent to your email address.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Account;
