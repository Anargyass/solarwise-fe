"use client";

import { CircleMarker, MapContainer, Popup, TileLayer } from "react-leaflet";
import { apiConfig } from "@/app/lib/api-config";

export default function ResultMap({
  coordinates,
  locationName,
}: {
  coordinates: { lat: number; lng: number };
  locationName: string;
}) {
  return (
    <MapContainer
      center={[coordinates.lat, coordinates.lng]}
      zoom={15}
      scrollWheelZoom={false}
      className="h-80 w-full sm:h-88 lg:h-104"
    >
      <TileLayer
        attribution={apiConfig.map.attribution}
        url={apiConfig.map.tileUrl}
      />
      <CircleMarker
        center={[coordinates.lat, coordinates.lng]}
        radius={12}
        fillColor="#003631"
        color="#fff6d1"
        weight={3}
        opacity={1}
        fillOpacity={0.8}
      >
        <Popup>
          <div className="text-sm font-semibold text-[#003631]">{locationName}</div>
        </Popup>
      </CircleMarker>
    </MapContainer>
  );
}
