import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Login = () => {

    const [message, setMessage] = useState("");


    const bubbleStyle = {
        position: 'absolute',
        borderRadius: '50%',
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        opacity: 0.7,
        pointerEvents: 'none',
    };


    const generateRandomBubble = (index) => ({
        width: Math.random() * 60 + 20,
        height: Math.random() * 60 + 20,
        x: index === 0 ? 20 : index === 1 ? 220 : index === 2 ? 100 : index === 3 ? 50 : 150,
        y: index === 0 ? 50 : index === 1 ? 10 : index === 2 ? 150 : index === 3 ? 200 : 100,
        delay: Math.random() * 10,
        duration: Math.random() * 5 + 5,
    });


    const bubbles = Array.from({ length: 5 }).map((_, index) => generateRandomBubble(index));

    return (
        <div className="h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 relative overflow-hidden">

            {bubbles.map((bubble, index) => (
                <motion.div
                    key={index}
                    style={{
                        ...bubbleStyle,
                        width: bubble.width,
                        height: bubble.height,
                        left: bubble.x,
                        top: bubble.y,
                    }}
                    animate={{
                        y: [bubble.y, bubble.y - 50, bubble.y],
                        x: [bubble.x, bubble.x + 30, bubble.x],
                    }}
                    transition={{
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: bubble.duration,
                        delay: bubble.delay,
                        ease: "easeInOut",
                    }}
                />
            ))}

            <div className="max-w-sm w-full bg-white rounded-lg shadow-xl p-8 z-10 relative">
                <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Welcome Back!</h2>

                <form className="space-y-5">

                    {/* Email Input */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email Address</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Enter your email"
                            required
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
                            className="w-full mt-2 px-5 py-3 rounded-md border border-gray-300 bg-gray-50 text-gray-700 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                        />
                    </div>

                    {/* Error Message */}
                    {message && (
                        <p className="text-sm text-red-500 text-center">{message}</p>
                    )}

                    {/* Login Button */}
                    <button className="w-full mt-6 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-md transition duration-200 ease-in-out">
                        Login
                    </button>
                </form>

                {/* Register Link */}
                <p className="mt-4 text-center text-sm text-gray-600">
                    Don’t have an account?{" "}
                    <Link to="/register" className="text-indigo-600 font-semibold hover:underline">
                        Register
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
