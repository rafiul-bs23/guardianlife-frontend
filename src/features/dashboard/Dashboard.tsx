import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../shared/Components/Navbar';
import { fetchDashboardDataApi } from './api';
import { submitLogout } from '../login/api';
import ClaimsList from './components/ClaimsList';
import PolicyList from './components/PolicyList';
import type { DashboardApiResponse } from './types';
import Button from '../../shared/Components/Button';


const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<{ full_name?: string; mobile?: string; gender?: string } | null>(null);
  const [dashboardData, setDashboardData] = useState<DashboardApiResponse | null>(null);
  const [showClaimsMenu, setShowClaimsMenu] = useState(false);


  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      try {
        setUser(JSON.parse(userData));
      } catch (e) {
        console.error('Failed to parse user data from local storage', e);
      }
    }

    const fetchDashboardData = async () => {
      try {
        const responseData = await fetchDashboardDataApi();
        console.log('Dashboard API Response:', responseData);
        setDashboardData(responseData);
      } catch (error) {
        console.error('Error fetching dashboard API:', error);
      }
    };

    fetchDashboardData();
  }, []);

  const handleLogout = async () => {
    try {
      await submitLogout();
    } catch (error) {
      console.error('Logout API failed', error);
    } finally {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      navigate('/login');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-4 py-32 min-h-[60vh]">
        <div className="bg-white shadow drop-shadow-sm rounded-lg p-8 max-w-5xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-[#006A4E]">Dashboard</h1>
            <div className="flex gap-2">
              <div className="relative">
                <Button
                  onClick={() => setShowClaimsMenu(!showClaimsMenu)}
                  variant='base'
                  className="rounded-md font-medium transition-colors"
                >
                  Claims
                </Button>
                {showClaimsMenu && (
                  <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-100 rounded-md shadow-lg py-1 z-50">
                    <button
                      onClick={() => {
                        setShowClaimsMenu(false);
                        navigate('/dashboard/claims/cashless-payment');
                      }}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Cashless Payment
                    </button>
                    <button
                      onClick={() => {
                        setShowClaimsMenu(false);
                        navigate('/dashboard/claims/claims-submission');
                      }}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Claims Submission
                    </button>
                  </div>
                )}
              </div>
              <Button
                onClick={handleLogout}
                variant='base'
                className="bg-red-500 hover:bg-red-600 rounded-md font-medium transition-colors"
              >
                Logout
              </Button>
            </div>

          </div>
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

              {dashboardData && (
                <div className="mt-8 space-y-8">
                  <ClaimsList claims={dashboardData.claims} />
                  <PolicyList policies={dashboardData.policies} />
                </div>
              )}
            </div>
          ) : (
            <p className="text-gray-600 text-lg">Loading user profile...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
