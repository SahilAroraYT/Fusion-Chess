import { useEffect, useState } from 'react';

const AdminDashboard = () => {
    const [message, setMessage] = useState('');

    useEffect(() => {
        const fetchProtectedData = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/admin/protected`, {
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (!response.ok) {
                    setMessage('Unauthorized. Redirecting to login...');
                    setTimeout(() => (window.location.href = '/admin/login'), 2000);
                    return;
                }

                const data = await response.json();
                setMessage(data.message);
            } catch (error) {
                setMessage('An error occurred. Redirecting to login...');
                setTimeout(() => (window.location.href = '/admin/login'), 2000);
            }
        };

        fetchProtectedData();
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
        window.location.href = '/';
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="text-center">
                <h2 className="text-2xl mb-4">{message}</h2>
                <button
                    onClick={handleLogout}
                    className="bg-red-500 text-white p-2 rounded hover:bg-red-600"
                >
                    Logout
                </button>
            </div>
        </div>
    );
};

export default AdminDashboard;
