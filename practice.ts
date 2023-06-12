type Employee = {
  id: number;
  name: string;
  height: string;
  seasonal?: boolean;
};

interface Manager extends Employee {
  securityClearance: string;
  id: number;
  name: string;
  height: string;
}

const Dustin: Employee = {
  id: 1,
  name: "Dustin",
  height: "5-11",
};

const Justin: Manager = {
  id: 1,
  name: "Justin",
  height: "5-11",
  securityClearance: "Sec 1",
  seasonal: true,
};

const Daniel: Manager = {
  id: 1,
  name: "Justin",
  height: "5-11",
  securityClearance: "Sec 1",
  seasonal: false,
};

const employees: Employee[] = [];

employees.push(Justin, Dustin, Daniel);

employees.forEach((thing) => {
  console.log(thing.name);
});

//ES6 Function (arrow function)
const Kim = (personName: string, secondPerson: string): string => {
  const greeting = "Hello " + personName + secondPerson;
  return greeting;
};

const sayHiToCameron = Kim("Cameron", "Maxwell");

const renderEmployeeNames = (employeeList) => {
    console.log(employeeList.forEach((employee) console.log(employee.name));
}