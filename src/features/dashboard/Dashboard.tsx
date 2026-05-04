import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../shared/Components/Navbar';
import { fetchDashboardDataApi } from './api';
import ClaimsList from './components/ClaimsList';
import PolicyList from './components/PolicyList';
import AddPolicyModal from './components/AddPolicyModal';
import type { DashboardApiResponse } from './types';
import { getUserData } from '../../shared/utils/authUtils';
import { FileCheck, CreditCard } from 'lucide-react';

const getGreeting = () => {
  const hour = new Date().getHours();
  if (hour < 12) return 'Good Morning,';
  if (hour < 18) return 'Good Afternoon,';
  return 'Good Evening,';
};

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<{ full_name?: string; mobile?: string; gender?: string } | null>(null);
  const [dashboardData, setDashboardData] = useState<DashboardApiResponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isAddPolicyModalOpen, setIsAddPolicyModalOpen] = useState(false);


  const fetchDashboardData = async () => {
    try {
      setIsLoading(true);
      const responseData = await fetchDashboardDataApi();
      console.log('Dashboard API Response:', responseData);
      setDashboardData(responseData);
    } catch (error) {
      console.error('Error fetching dashboard API:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const userData = getUserData();
    if (userData) {
      setUser(userData);
    }

    const fetchDashboardData = async () => {
      try {
        setIsLoading(true);
        const responseData = await fetchDashboardDataApi();
        setDashboardData(responseData);
      } catch (error) {
        console.error('Error fetching dashboard API:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="container mx-auto px-4 pt-24 pb-12 min-h-[60vh] max-w-5xl">
        <div className="w-full">
          {user ? (
            <div className="pt-8">
              <div className="mb-6">
                <p className="text-gray-600 text-xl mb-1">{getGreeting()}</p>
                <h2 className="text-3xl font-bold text-gray-900">{user.full_name || 'User'}</h2>
              </div>
              <div className="w-full h-[1px] bg-orange-400 mb-8" />

              {isLoading ? (
                <div className="mt-8 py-10 text-center">
                  <p className="text-gray-500 font-medium">Loading...</p>
                </div>
              ) : dashboardData && (
                <div className="mt-8 space-y-12">
                  {/* Policies Section */}
                  <div className="w-full">
                    <PolicyList
                      policies={dashboardData.policies}
                      onAddPolicy={() => setIsAddPolicyModalOpen(true)}
                    />
                  </div>

                  {/* Claims Section */}
                  {dashboardData.claims && dashboardData.claims.length > 0 && (
                    <div className="w-full">
                      <ClaimsList claims={dashboardData.claims} />
                    </div>
                  )}

                  {/* Bottom Buttons */}
                  <div className="flex flex-col sm:flex-row justify-center gap-6 pt-8 pb-4">
                    <button
                      onClick={() => navigate('/dashboard/claims/claims-submission')}
                      className="flex flex-col items-center justify-center border border-[#F37021] rounded-2xl w-full sm:w-56 h-32 hover:shadow-lg transition-shadow bg-white gap-3"
                    >
                      <div className="bg-[#F37021] rounded-full p-3 text-white shadow-md">
                        <FileCheck size={32} />
                      </div>
                      <span className="font-medium text-gray-800">Claims Submissions</span>
                    </button>
                    <button
                      onClick={() => navigate('/dashboard/claims/cashless-payment')}
                      className="flex flex-col items-center justify-center border border-[#F37021] rounded-2xl w-full sm:w-56 h-32 hover:shadow-lg transition-shadow bg-white gap-3"
                    >
                      <div className="bg-[#F37021] rounded-full p-3 text-white shadow-md">
                        <CreditCard size={32} />
                      </div>
                      <span className="font-medium text-gray-800">Cashless Payment</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <p className="text-gray-600 text-lg">Loading user profile...</p>
          )}
        </div>
      </div>

      <AddPolicyModal
        isOpen={isAddPolicyModalOpen}
        onClose={() => setIsAddPolicyModalOpen(false)}
        refresh={fetchDashboardData}
      />
    </div>
  );
};

export default Dashboard;
