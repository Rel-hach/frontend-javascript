// Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two student objects
const student1: Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 20,
  location: 'New York'
};

const student2: Student = {
  firstName: 'Jane',
  lastName: 'Smith',
  age: 22,
  location: 'London'
};

// Create an array of students
const studentsList: Student[] = [student1, student2];

// Render the table using Vanilla JavaScript
function renderTable(students: Student[]): void {
  // Create table elements
  const table = document.createElement('table');
  const thead = document.createElement('thead');
  const tbody = document.createElement('tbody');
  const headerRow = document.createElement('tr');

  // Create table headers
  const headers = ['First Name', 'Location'];
  headers.forEach(headerText => {
    const th = document.createElement('th');
    th.textContent = headerText;
    headerRow.appendChild(th);
  });

  // Append headers to table
  thead.appendChild(headerRow);
  table.appendChild(thead);

  // Create table rows for each student
  students.forEach(student => {
    const row = document.createElement('tr');
    
    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = student.firstName;
    row.appendChild(firstNameCell);
    
    const locationCell = document.createElement('td');
    locationCell.textContent = student.location;
    row.appendChild(locationCell);
    
    tbody.appendChild(row);
  });

  // Append body to table
  table.appendChild(tbody);

  // Add table to the document body
  document.body.appendChild(table);
}

// Call the render function
renderTable(studentsList);