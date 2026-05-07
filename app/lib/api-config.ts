/**
 * API Configuration
 * Centralized configuration untuk semua external API endpoints
 */

export const apiConfig = {
  // Backend API
  simulation: {
    baseUrl: process.env.NEXT_PUBLIC_API_URL || "",
    endpoints: {
      simulate: "/api/v1/simulation",
    },
    timeout: 30000, // 30 seconds
  },

  // Geocoding API (reverse geocoding)
  nominatim: {
    baseUrl: process.env.NEXT_PUBLIC_NOMINATIM_API_URL || "https://nominatim.openstreetmap.org",
    endpoints: {
      reverse: "/reverse",
    },
    timeout: 5000, // 5 seconds
  },

  // Location Search API
  photon: {
    baseUrl: process.env.NEXT_PUBLIC_PHOTON_API_URL || "https://photon.komoot.io/api",
    endpoints: {
      search: "/",
    },
    timeout: 5000, // 5 seconds
  },

  // Map Configuration
  map: {
    tileUrl: process.env.NEXT_PUBLIC_MAP_TILE_URL || "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    attribution:
      process.env.NEXT_PUBLIC_MAP_ATTRIBUTION ||
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
};

/**
 * Helper function untuk membuat full URL ke simulation API
 */
export function getSimulationUrl(): string {
  return `${apiConfig.simulation.baseUrl}${apiConfig.simulation.endpoints.simulate}`;
}

/**
 * Helper function untuk membuat full URL ke nominatim reverse geocoding
 */
export function getNominatimReverseUrl(lat: number, lon: number): string {
  const params = new URLSearchParams({
    format: "jsonv2",
    lat: lat.toString(),
    lon: lon.toString(),
  });
  return `${apiConfig.nominatim.baseUrl}${apiConfig.nominatim.endpoints.reverse}?${params.toString()}`;
}

/**
 * Helper function untuk membuat full URL ke photon search
 */
export function getPhotonSearchUrl(query: string): string {
  const params = new URLSearchParams({
    q: query,
    limit: "1",
  });
  return `${apiConfig.photon.baseUrl}${apiConfig.photon.endpoints.search}?${params.toString()}`;
}
