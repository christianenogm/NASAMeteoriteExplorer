// main.js

import { fetchMeteoriteData } from "./dataHandler.js";
import { initMap, addMarkers } from "./map.js";
import {
  renderTable,
  setCurrentData,
  filterByYear,
  searchByName,
  toggleSort,
  showMessage,
  exportAsCSV,
  exportAsPDF
} from "./uiManager.js";

let allData = [];
let filteredData = [];

window.initMap = initMap;  // Google Maps callback needs this globally

// Initialize the map and load meteorite data
async function initializeApp() {
  showMessage("Loading data...", false);
  try {
    allData = await fetchMeteoriteData();
    filteredData = allData;
    setCurrentData(filteredData);

    initMap();
    addMarkers(filteredData);
    renderTable(filteredData);
    showMessage("");
  } catch (error) {
    showMessage("Failed to load meteorite data.");
    console.error(error);
  }
}

initializeApp();

document.getElementById("filterBtn").addEventListener("click", () => {
  const minYear = parseInt(document.getElementById("minYear").value);
  const maxYear = parseInt(document.getElementById("maxYear").value);

  if (isNaN(minYear) || isNaN(maxYear)) {
    showMessage("Please enter valid numeric years.");
    return;
  }
  if (minYear > maxYear) {
    showMessage("Min Year should be less than or equal to Max Year.");
    return;
  }

  filteredData = filterByYear(allData, minYear, maxYear);
  setCurrentData(filteredData);
  addMarkers(filteredData);
  renderTable(filteredData);
  showMessage(`Filtered results: ${filteredData.length}`, false);
});

// Sorting handlers for each column header
["sortId", "sortName", "sortYear", "sortClass"].forEach(id => {
  document.getElementById(id).addEventListener("click", () => {
    const keyMap = {
      sortId: "id",
      sortName: "name",
      sortYear: "year",
      sortClass: "recclass"
    };
    filteredData = toggleSort(keyMap[id]);
    setCurrentData(filteredData);
    addMarkers(filteredData);
  });
});

// Download CSV button
document.getElementById("downloadCsvBtn").addEventListener("click", () => {
  exportAsCSV(filteredData);
  showMessage("CSV download started.", false);
});

// Download PDF button
document.getElementById("downloadPdfBtn").addEventListener("click", () => {
  exportAsPDF(filteredData);
  showMessage("PDF download started.", false);
});