"use client"; // Next.js app router mein ye batata hai ke component sirf client-side pe chalega

import { useEffect } from "react";
import { io } from "socket.io-client";

export default function Tracker() {
  useEffect(() => {
    // socket client-side par initialize ho raha hai
    const socket = io("http://localhost:5000");

    if (navigator.geolocation) {
      // Browser ka GPS tracker (continuous updates)
      const watchId = navigator.geolocation.watchPosition((p) => {
        // har update ke sath backend ko event bhejna
        socket.emit("tracker:update", {
          trackerId: "TR123",        // fixed tracker ID (har user ke liye alag ho sakti hai)
          lat: p.coords.latitude,    // current latitude
          lng: p.coords.longitude,   // current longitude
        });
      });

      // cleanup function (Next.js/React me jab component unmount hota hai)
      return () => {
        navigator.geolocation.clearWatch(watchId); // GPS tracking stop
        socket.disconnect(); // server se socket connection close
      };
    }
  }, []);

  return <h2>Sending location...</h2>;
}
