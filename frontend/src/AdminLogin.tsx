import { useState } from 'react';

const AdminLogin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleLogin = async () => {
        try {
            const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/admin/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password }),
            });

            if (!response.ok) {
                setMessage('Invalid credentials');
                return;
            }

            const data = await response.json();
            console.log(data)
            localStorage.setItem('token', data.token);
            setMessage('Login successful');
            window.location.href = '/admin/dashboard';
        } catch (error) {
            setMessage('Something went wrong. Please try again.');
        }
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="bg-white p-8 shadow-md rounded-md w-96">
                <h2 className="text-2xl font-bold mb-4">Admin Login</h2>
                <input
                    type="text"
                    placeholder="Username"
                    className="w-full p-2 border mb-4 rounded"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="w-full p-2 border mb-4 rounded"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button
                    onClick={handleLogin}
                    className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                >
                    Login
                </button>
                {message && <p className="text-red-500 mt-4">{message}</p>}
            </div>
        </div>
    );
};

export default AdminLogin;
