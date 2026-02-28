
import { MOCK_EMPLOYEES_HEADER_DATA } from './api/mockData';
import EmployeesHeader from './components/EmployeesHeader';
import EmployeeList from './components/EmployeeList';

const Employees = () => {
  return (
    <main className="min-h-screen bg-gray-150">
      <EmployeesHeader data={MOCK_EMPLOYEES_HEADER_DATA} />
      <EmployeeList />
    </main>
  );
};

export default Employees;
