"use client";

import { useEffect } from "react";

const TrackVisitor = () => {
  useEffect(() => {
    const TRACKING_KEY = "visitor_tracked";

    // Check if the visitor has already been tracked
    const hasVisited = localStorage.getItem(TRACKING_KEY);

    if (!hasVisited) {
      // Call the Lambda function or API endpoint
      fetch("/api/track-visitor", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ timestamp: new Date().toISOString() }),
      })
        .then((response) => {
          if (response.ok) {
            localStorage.setItem(TRACKING_KEY, "true"); // Mark as tracked
          }
        })
        .catch((error) => {
          console.error("Error tracking visitor:", error);
        });
    }
  }, []);

  return null; // No UI needed
};

export default TrackVisitor;

// useEffect(() => {
//   const trackVisitor = async () => {
//     const tracked = localStorage.getItem("visitorTracked");
//     if (!tracked) {
//       try {
//         const response = await fetch("/api/track-visitor", {
//           method: "POST",
//         });
//         const data = await response.json();
//         console.log("Lambda Response:", data);
//         localStorage.setItem("visitorTracked", "true");
//       } catch (error) {
//         console.error("Error tracking visitor:", error);
//       }
//     }
//   };

//   trackVisitor();
// }, []);
