"use client"; // app router me lagana zaroori hai

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { io } from "socket.io-client";

// Leaflet components ko dynamic import karo (SSR disable)
const MapContainer = dynamic(() => import("react-leaflet").then(m => m.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import("react-leaflet").then(m => m.TileLayer), { ssr: false });
const Marker = dynamic(() => import("react-leaflet").then(m => m.Marker), { ssr: false });


export default function Viewer() {
  const [pos, setPos] = useState(null)

  useEffect(() => {
    const socket = io("http://localhost:5000");

    socket.on("tracker:location", (data) => setPos({ lat: data.lat, lng: data.lng }));

    return () => {
      socket.off("tracker:location");
      socket.disconnect();
    };
  }, []);

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <MapContainer center={[pos?.lat || 0, pos?.lng || 0]} zoom={13} style={{ height: "100%", width: "100%" }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {pos && <Marker position={[pos.lat, pos.lng]} />}
      </MapContainer>
    </div>
  );
}
