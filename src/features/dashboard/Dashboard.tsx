import { useEffect, useState } from 'react';

const Dashboard = () => {
  const [user, setUser] = useState<{ full_name?: string; mobile?: string; gender?: string } | null>(null);

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      try {
        setUser(JSON.parse(userData));
      } catch (e) {
        console.error('Failed to parse user data from local storage', e);
      }
    }
  }, []);

  return (
    <div className="container mx-auto px-4 py-12 min-h-[60vh]">
      <div className="bg-white shadow drop-shadow-sm rounded-lg p-8 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-[#006A4E]">Dashboard</h1>
        {user ? (
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Welcome back, {user.full_name || 'User'}!</h2>
            <div className="bg-gray-50 p-6 rounded-md border border-gray-200">
              <h3 className="text-xl font-medium text-gray-700 mb-4">Your Profile Details</h3>
              <ul className="space-y-3 text-gray-600 text-lg">
                <li className="flex">
                  <span className="font-semibold w-24">Name:</span>
                  <span>{user.full_name || 'N/A'}</span>
                </li>
                <li className="flex">
                  <span className="font-semibold w-24">Mobile:</span>
                  <span>{user.mobile || 'N/A'}</span>
                </li>
                {user.gender && (
                  <li className="flex">
                    <span className="font-semibold w-24">Gender:</span>
                    <span className="capitalize">{user.gender.toLowerCase()}</span>
                  </li>
                )}
              </ul>
            </div>
          </div>
        ) : (
          <p className="text-gray-600 text-lg">Loading user profile...</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
