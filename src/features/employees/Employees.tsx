
import { MOCK_EMPLOYEES_HEADER_DATA, MOCK_EMPLOYEE_LIST_DATA } from './api/mockData';
import EmployeesHeader from './components/EmployeesHeader';
import EmployeeList from './components/EmployeeList';

const Employees = () => {
  return (
    <main className="min-h-screen bg-white">
      <EmployeesHeader data={MOCK_EMPLOYEES_HEADER_DATA} />
      <EmployeeList data={MOCK_EMPLOYEE_LIST_DATA} />
    </main>
  );
};

export default Employees;
