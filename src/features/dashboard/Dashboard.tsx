import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../shared/Components/Navbar';
import { fetchDashboardDataApi } from './api';
import { submitLogout } from '../login/api';
import ClaimsList from './components/ClaimsList';
import PolicyList from './components/PolicyList';
import type { DashboardApiResponse } from './types';
import Button from '../../shared/Components/Button';
import { getUserData, clearAuthData } from '../../shared/utils/authUtils';


const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<{ full_name?: string; mobile?: string; gender?: string } | null>(null);
  const [dashboardData, setDashboardData] = useState<DashboardApiResponse | null>(null);
  const [showClaimsMenu, setShowClaimsMenu] = useState(false);
  const [activeTab, setActiveTab] = useState<'policies' | 'claims'>('policies');


  useEffect(() => {
    const userData = getUserData();
    if (userData) {
      setUser(userData);
    }

    const fetchDashboardData = async () => {
      try {
        const responseData = await fetchDashboardDataApi();
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
      clearAuthData();
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
                <div className="mt-8 space-y-6">
                  {/* Tabs */}
                  <div className="flex gap-4 p-1.5 bg-gray-100/80 rounded-2xl w-fit">
                    <button
                      onClick={() => setActiveTab('policies')}
                      className={`px-8 py-3 rounded-xl text-[15px] font-bold transition-all duration-300 ${activeTab === 'policies'
                          ? 'bg-[#f37021] text-white shadow-lg shadow-orange-900/20 scale-[1.02]'
                          : 'text-gray-500 hover:text-gray-700 hover:bg-gray-200/50'
                        }`}
                    >
                      My Policies
                    </button>
                    <button
                      onClick={() => setActiveTab('claims')}
                      className={`px-8 py-3 rounded-xl text-[15px] font-bold transition-all duration-300 ${activeTab === 'claims'
                          ? 'bg-[#f37021] text-white shadow-lg shadow-orange-900/20 scale-[1.02]'
                          : 'text-gray-500 hover:text-gray-700 hover:bg-gray-200/50'
                        }`}
                    >
                      My Claims
                    </button>
                  </div>

                  {/* Content Area */}
                  <div className="pt-4 min-h-[400px]">
                    {activeTab === 'policies' ? (
                      <PolicyList policies={dashboardData.policies} />
                    ) : (
                      <ClaimsList claims={dashboardData.claims} />
                    )}
                  </div>
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
