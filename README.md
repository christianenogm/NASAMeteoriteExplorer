# 🌠 NASA Meteorite Explorer

An interactive web application to explore NASA meteorite landing data. Filter by year range, visualize on Google Maps, and export results as CSV or PDF.

## ✨ Features

- 🗺️ **Interactive Map**: View meteorites on an interactive Google Maps visualization
- 🔍 **Year Range Filter**: Filter meteorites by minimum and maximum year
- 📊 **Data Table**: View detailed information in a sortable table format
- 📥 **Export Functionality**: Download data in CSV or PDF format
- 🎯 **Column Sorting**: Click table headers (ID, Name, Year, Class) to sort data
- 📱 **Responsive Design**: Works seamlessly on both mobile and desktop devices

## 🚀 How to Use

### 1. Open the Application

Open the `index.html` file in your web browser.

### 2. Explore the Data

- The application automatically loads all NASA meteorites
- Use the interactive map to see the geographic distribution
- View the complete list in the table below the map

### 3. Filter by Year

- Enter the **minimum year** in the "Min Year" field
- Enter the **maximum year** in the "Max Year" field
- Click the "Filter" button to apply the filter

### 4. Sort the Data

- Click any table header (ID, Name, Year, Class) to sort by that column
- Click again to reverse the sort order (ascending/descending)

### 5. Export the Data

- Click **"Save as CSV"** to download filtered results in Excel-compatible format
- Click **"Save as PDF"** to download with formatted table layout

## 💻 Technologies Used

- **HTML5** - Page structure and semantics
- **CSS3** - Styling and responsive layout
- **JavaScript (ES6+)** - Application logic and interactivity
- **Google Maps API** - Interactive map rendering
- **jsPDF** - PDF file generation
- **NASA API** - Meteorite data source (with local JSON fallback)

## 📁 Project Structure

```
NASA-Meteorite-Explorer/
├── index.html              # Main HTML file
├── css/
│   └── style.css          # Application styles
├── js/
│   ├── main.js            # Main application logic and event handlers
│   ├── dataHandler.js     # Data loading (API and local file)
│   ├── map.js             # Google Maps initialization and management
│   └── uiManager.js       # UI functions (table, filters, exports)
├── Meteorite_Landings.json # Backup local data file
└── README.md              # This file
```

## 🔧 Technical Details

### Data Loading Flow

1. Application attempts to fetch data from the **NASA API**
2. If API is unavailable, falls back to local **Meteorite_Landings.json** file
3. Data is stored in memory for quick operations and filtering

### JavaScript Modules

- **main.js**: Application initialization, event listeners, and orchestration
- **dataHandler.js**: Data fetching from API or local file
- **map.js**: Google Maps initialization and marker management
- **uiManager.js**: Table rendering, filtering, sorting, and export functions

### Data Export

- **CSV**: Comma-separated values format, compatible with Excel and other spreadsheet applications
- **PDF**: Formatted PDF document with table layout using jsPDF library

## 📊 Data Description

The `Meteorite_Landings.json` file contains **45,716 meteorite records** with the following information:

- **ID**: Unique meteorite identifier
- **Name**: Name of the meteorite
- **Year**: Fall year (timestamp format)
- **Class**: Mineralogical classification
- **Mass**: Weight in grams
- **Fall**: Type of fall (Fell/Found)
- **reclat/reclong**: Latitude and Longitude coordinates

## 🎓 Academic Context

This project was developed as a final assignment for the **INFO-3168 - JavaScript 2** course in the **Web Development and Internet Applications** program.

**Student**: Christiane Nogueira Mendes  
**ID**: 1242980

## 📜 License

This project is licensed under the **MIT License**. See the LICENSE file for details.

## 🤝 Contributing

Suggestions and improvements are welcome! Feel free to open issues or submit pull requests.

## 📧 Contact

For questions or suggestions, please reach out through GitHub or email.

---

**Made with ❤️ by Christiane Nogueira**
