import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Register = () => {
    const [message, setMessage] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleRegister = (e) => {
        e.preventDefault();

        // Basic validation
        if (password !== confirmPassword) {
            setMessage("Passwords do not match");
            return;
        }

        if (!email || !password || !confirmPassword) {
            setMessage("Please fill in all fields");
            return;
        }

        // Simulate successful registration
        setMessage("Registration successful!");
    };

    return (
        <div className="h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 relative overflow-hidden">
            <div className="max-w-sm w-full bg-white rounded-lg shadow-xl p-8 z-10 relative">
                <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Create Account</h2>

                <form onSubmit={handleRegister} className="space-y-5">

                    {/* Email Input */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email Address</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Enter your email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full mt-2 px-5 py-3 rounded-md border border-gray-300 bg-gray-50 text-gray-700 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                        />
                    </div>

                    {/* Password Input */}
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-600">Password</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Enter your password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full mt-2 px-5 py-3 rounded-md border border-gray-300 bg-gray-50 text-gray-700 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                        />
                    </div>

                    {/* Confirm Password Input */}
                    <div>
                        <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-600">Confirm Password</label>
                        <input
                            type="password"
                            name="confirm-password"
                            id="confirm-password"
                            placeholder="Confirm your password"
                            required
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="w-full mt-2 px-5 py-3 rounded-md border border-gray-300 bg-gray-50 text-gray-700 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                        />
                    </div>

                    {/* Error Message */}
                    {message && (
                        <p className="text-sm text-red-500 text-center">{message}</p>
                    )}

                    {/* Register Button */}
                    <button type="submit" className="w-full mt-6 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-md transition duration-200 ease-in-out">
                        Register
                    </button>
                </form>

                {/* Login Link  d */}
                <p className="mt-4 text-center text-sm text-gray-600">
                    Already have an account?{" "}
                    <Link to="/login" className="text-indigo-600 font-semibold hover:underline">
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Register;
