// dataHandler.js

// Fetch meteorite data from NASA API or local file
export async function fetchMeteoriteData() {
  const apiUrl = "https://data.nasa.gov/resource/y77d-th95.json";
  const localFile = "Meteorite_Landings.json"; 

  // Try fetching from the API first
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) throw new Error('API fetch failed');
    const data = await response.json();
    return data;
  } catch (error) {
    console.warn("API fetch failed, loading local data...", error);
    // Fallback to local file
    try {
      const localResponse = await fetch(localFile);
      if (!localResponse.ok) throw new Error('Local file fetch failed');
      const localData = await localResponse.json();
      return localData;
    } catch (localError) {
      console.error("Local data fetch failed too", localError);
      throw new Error("Failed to load meteorite data from API and local file.");
    }
  }
}