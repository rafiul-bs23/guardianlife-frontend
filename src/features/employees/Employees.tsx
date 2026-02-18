
import { MOCK_EMPLOYEES_HEADER_DATA } from './api/mockData';
import EmployeesHeader from './components/EmployeesHeader';

const Employees = () => {
  return (
    <main className="min-h-screen bg-white">
      <EmployeesHeader data={MOCK_EMPLOYEES_HEADER_DATA} />
      {/* Additional content can go here */}
    </main>
  );
};

export default Employees;
