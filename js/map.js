// map.js

export let map;
export let markers = [];

// Initialize the Google Map
export function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 3,
    center: { lat: 30, lng: 0 },
  });
}

// Clear existing markers from the map
export function clearMarkers() {
  markers.forEach(marker => marker.setMap(null));
  markers = [];
}

// Add meteorite markers to the map
export function addMarkers(meteorites) {
  clearMarkers();

  meteorites.forEach(meteorite => {
    const lat = parseFloat(meteorite.reclat);
    const lng = parseFloat(meteorite.reclong);
    if (!isNaN(lat) && !isNaN(lng)) {
      const marker = new google.maps.Marker({
        position: { lat, lng },
        map,
      });

    const infoContent = `
      <div>
        <h3>${meteorite.name}</h3>
        <p><strong>Year:</strong> ${meteorite.year ? new Date(meteorite.year).getFullYear() : 'N/A'}</p>
        <p><strong>Mass:</strong> ${meteorite.mass || 'N/A'}</p>
        <p><strong>Class:</strong> ${meteorite.recclass || 'N/A'}</p>
        <p><strong>Fall:</strong> ${meteorite.fall || 'N/A'}</p>
      </div>
    `;

      const infoWindow = new google.maps.InfoWindow({
        content: infoContent,
      });

      marker.addListener("click", () => {
        infoWindow.open(map, marker);
      });

      markers.push(marker);
    }
  });
}
