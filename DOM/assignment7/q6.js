const style = document.createElement("style");
style.textContent = `
  body { font-family: sans-serif; max-width: 520px; margin: 30px auto; }
  input { width: 100%; padding: 8px; box-sizing: border-box; margin-bottom: 12px; }
  table { width: 100%; border-collapse: collapse; }
  th, td { border: 1px solid #ccc; padding: 8px; text-align: left; }
  th { background: #f3f4f6; }
  .no-results td { text-align: center; color: #b91c1c; font-weight: bold; }
`;
document.head.appendChild(style);

const students = [
  { name: "Aarav Sharma", branch: "CSE", cgpa: 8.9 },
  { name: "Diya Verma", branch: "ECE", cgpa: 8.2 },
  { name: "Kabir Singh", branch: "ME", cgpa: 7.5 },
  { name: "Meera Gupta", branch: "CSE", cgpa: 9.1 },
  { name: "Rohan Patel", branch: "IT", cgpa: 8.0 },
  { name: "Sneha Rao", branch: "ECE", cgpa: 8.7 },
];

document.body.innerHTML = `
  <h2>Student Table</h2>
  <input id="searchBox" type="text" placeholder="Search by name, branch or CGPA...">
  <table>
    <thead><tr><th>Name</th><th>Branch</th><th>CGPA</th></tr></thead>
    <tbody id="tableBody"></tbody>
  </table>`;

const tableBody = document.getElementById("tableBody");

students.forEach((student) => {
  const row = document.createElement("tr");
  row.innerHTML = `<td>${student.name}</td><td>${student.branch}</td><td>${student.cgpa}</td>`;
  tableBody.appendChild(row);
});

const noResultsRow = document.createElement("tr");
noResultsRow.className = "no-results";
noResultsRow.innerHTML = `<td colspan="3">No results found</td>`;
noResultsRow.style.display = "none";
tableBody.appendChild(noResultsRow);

document.getElementById("searchBox").addEventListener("input", (event) => {
  const searchText = event.target.value.trim().toLowerCase();
  const dataRows = tableBody.querySelectorAll("tr:not(.no-results)");
  let visibleCount = 0;

  dataRows.forEach((row) => {
    const matches = row.textContent.toLowerCase().includes(searchText);
    row.style.display = matches ? "" : "none";
    if (matches) visibleCount++;
  });

  noResultsRow.style.display = visibleCount === 0 ? "" : "none";
});
