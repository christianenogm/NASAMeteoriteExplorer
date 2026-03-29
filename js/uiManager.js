// uiManager.js

export const tableBody = document.querySelector("#meteoriteTable tbody");
export const messageDiv = document.getElementById("message");

let currentData = []; // Data currently shown (filtered, searched, sorted)
let sortConfig = { key: null, ascending: true };

// Set the current data to be displayed in the table
export function setCurrentData(data) {
  currentData = data;
}

// Render the meteorite data in the table
export function renderTable(data) {
  tableBody.innerHTML = "";
  if (data.length === 0) {
    messageDiv.textContent = "No results found.";
    return;
  }
  messageDiv.textContent = "";

  const fragment = document.createDocumentFragment();

  data.forEach(item => {
    const tr = document.createElement("tr");

    const id = item.id || '';
    const name = item.name || '';
    const year = item.year ? new Date(item.year).getFullYear() : '';
    const recclass = item.recclass || '';
 
    tr.innerHTML = `
      <td>${id}</td>
      <td>${name}</td>
      <td>${year}</td>
      <td>${recclass}</td>
    `;

    fragment.appendChild(tr);
  });

  tableBody.appendChild(fragment);
}

// Sort the meteorite data based on the specified key and order
export function sortData(data, key, ascending) {
  return data.slice().sort((a, b) => {
    let valA = a[key];
    let valB = b[key];

    // For year, parse date and compare numbers
    if (key === 'year') {
      valA = valA ? new Date(valA).getFullYear() : 0;
      valB = valB ? new Date(valB).getFullYear() : 0;
    } else if (key === 'mass') {
      valA = parseFloat(valA) || 0;
      valB = parseFloat(valB) || 0;
    } else {
      valA = (valA || "").toString().toLowerCase();
      valB = (valB || "").toString().toLowerCase();
    }

    if (valA < valB) return ascending ? -1 : 1;
    if (valA > valB) return ascending ? 1 : -1;
    return 0;
  });
}

// Toggle sorting for a specific key
export function toggleSort(key) {
  if (sortConfig.key === key) {
    sortConfig.ascending = !sortConfig.ascending;
  } else {
    sortConfig.key = key;
    sortConfig.ascending = true;
  }
  currentData = sortData(currentData, sortConfig.key, sortConfig.ascending);
  renderTable(currentData);
  return currentData;
}

// Filter meteorite data by year range
export function filterByYear(data, minYear, maxYear) {
  return data.filter(item => {
    if (!item.year) return false;
    const year = new Date(item.year).getFullYear();
    return year >= minYear && year <= maxYear;
  });
}

// Search meteorite data by name
export function searchByName(data, nameQuery) {
  if (!nameQuery) return data;
  const lowerQuery = nameQuery.toLowerCase();
  return data.filter(item => (item.name || '').toLowerCase().includes(lowerQuery));
}

// Show a message in the UI
export function showMessage(text, isError = true) {
  messageDiv.style.color = isError ? "red" : "green";
  messageDiv.textContent = text;
}

// Export data as CSV
export function exportAsCSV(data) {
  if (!data || data.length === 0) {
    showMessage("No data to export.", true);
    return;
  }

  const headers = ["ID", "Name", "Year", "Class", "Mass", "Fall"];
  const rows = data.map(item => [
    item.id || "",
    item.name || "",
    item.year ? new Date(item.year).getFullYear() : "",
    item.recclass || "",
    item.mass || "",
    item.fall || ""
  ]);

  const csvContent = [
    headers.map(h => `"${h}"`).join(","),
    ...rows.map(row => row.map(cell => `"${cell}"`).join(","))
  ].join("\n");

  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.setAttribute("href", url);
  link.setAttribute("download", "meteorites.csv");
  link.click();
  URL.revokeObjectURL(url);
}

// Export data as PDF
export function exportAsPDF(data) {
  if (!data || data.length === 0) {
    showMessage("No data to export.", true);
    return;
  }

  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  
  doc.setFontSize(16);
  doc.text("NASA Meteorite Data", 14, 15);
  
  doc.setFontSize(10);
  const headers = ["ID", "Name", "Year", "Class", "Mass", "Fall"];
  const rows = data.map(item => [
    (item.id || "").toString().substring(0, 8),
    (item.name || "").substring(0, 15),
    item.year ? new Date(item.year).getFullYear() : "",
    (item.recclass || "").substring(0, 10),
    (item.mass || "").substring(0, 8),
    (item.fall || "").substring(0, 5)
  ]);

  doc.autoTable({
    head: [headers],
    body: rows,
    startY: 25,
    margin: 10,
    styles: { fontSize: 8 },
    headStyles: { fillColor: [41, 128, 185] }
  });

  doc.save("meteorites.pdf");
}