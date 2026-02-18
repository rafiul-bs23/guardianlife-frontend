export interface Employee {
    id: string;
    name: string;
    designation: string;
    department: string;
    imageUrl: string;
}

export interface EmployeeListData {
    title: string;
    employees: Employee[];
}
